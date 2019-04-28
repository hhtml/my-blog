<template>
	<div class="blogList" v-theme:column="'narrow'" >
		
		<input type="text" placeholder="search blog" v-model="search">
		<div class="blogWrap" v-for="item in searchBlog" :key="item.id" @click="goPage(item.id)"> <!-- 添加了搜索功能 所以遍历searchBlog-->
			<div class="blogTitle" v-rainbow>标题：{{item.id}}. {{item.title | toUppercase}}</div>
			<div class="blogContent">内容：{{item.body | snippet}}</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		name:'blogList',
		data(){
			return{
				pageData:[], //页面数据
				loading: true,
				search:''
			}
		},
		created(){
			var that = this
			//请求页面数据 jsonplaceholder
			axios.get('/posts')
			.then((res)=>{
				console.log(res)
				if(res.status == 200){
					//请求成功
					that.loading = false
					that.pageData = res.data.slice(0,10)
				}else{
					console.log('请求失败',res.statusText)
				}
			}).catch(err=>{
				console.log('异常回调',err)
			})
		},
		methods:{
			goPage:function (id) {
				console.log(id)
				this.$router.push(`/blog/${id}`)
			}
		},
		computed:{
			searchBlog:function () {
				return this.pageData.filter((blog) =>{
					return blog.title.match(this.search)
				})
			}
		},
		filters:{ //自定义私有过滤器 两种写法

			// "to-uppercase":function (value) {
			// 	return value.toUpperCase()
			// },
			toUppercase(value){
				return value.toUpperCase()
			}
		},
		directives:{ //自定义私有指令
			"rainbow":{
				bind(el,binging,vnode){
					el.style.color = "#" + Math.random().toString(16).slice(2,8)
				}
			}
		}
	};
</script>

<style scoped>
	input{
		width:100%;
		height:40px;
		border:1px solid #ccc;
		border-radius: 10px;
		padding:0px 10px;
		box-sizing: border-box;
	}
	.blogWrap{
		width:100%;
		background-color: #eee;
		padding:10px;
		box-sizing: border-box;
		margin-top: 10px;
	}
	.blogTitle{
		width:100%;
		font-size: 18px;
		color:#000;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.blogContent{
		font-size: 16px;
		color:#000;
		margin-top: 6px;
	}
</style>