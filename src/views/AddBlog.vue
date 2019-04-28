<template>
	<div class="writeBlog">

		<div class="container">
			<form v-if="flag">
				<div class="blog">
					<label>博客标题：</label>
					<input type="input" name="title" placeholder="请输入标题" v-model="blog.title">
				</div>
				<div class="blog">
					<label>博客内容：</label>
					<textarea placeholder="请输入内容" name="content" v-model="blog.content"></textarea>
				</div>
				<div class="blog">
					<div>博客类型：</div>
					<div class="check">
						<input type="radio" v-model="blog.type" value="html">
						<label>html</label>
					</div>
					<div class="check">
						<input type="radio" v-model="blog.type" value="css">
						<label>css</label>
					</div>
					<div class="check">
						<input type="radio" v-model="blog.type" value="javascript">
						<label>javascript</label>
					</div>
				</div>
				<div class="blog">
					<label>博客类型：</label>
					<button class="btn" @click.prevent="addBlog">提交</button>
				</div>
			</form>
			<h3 v-else>提交成功!</h3>
		</div>

	</div>

</template>

<script>
import axios from 'axios'
export default{
	name:'writeBlog',
	data(){
		return{
			blog:{
				title:'',
				content:'',
				type:''
			},
			flag:true
		}
	},
	methods:{
		addBlog:function (e) {
			console.log(this.blog)
			axios.post('/posts',{
				title:this.blog.title,
				body:this.blog.content,
				userId:1
			}).then(res=>{
				console.log(res)
				this.flag = false
				for(var item in this.blog){
					this.blog[item] = ''
				}
			})
		},
	}
};
</script>

<style scoped>

.blog{
	display: flex;
	flex-direction: column;
	margin-top: 20px;
}
.check{
	display: flex;
	align-items: center;
}
.btn{
	width:50px;
	height:30px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	background-color: red;
	cursor: pointer;
}
</style>