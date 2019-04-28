<template>
	<div id="BlogContent">
		<h2>博客内容：(传参过来的id:{{id}})</h2>
		<h3>标题：{{blog.title}}</h3>
		<div class="content">内容：{{blog.body}}</div>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name:'BlogContent',
	data(){
		return{
			id: this.$route.params.id,
			blog:{}
		}
	},
	created(){
		console.log(this.id)
		axios.get('/posts/'+this.id)
			.then(res=>{
				console.log(res)
				this.blog = res.data
			})
	}
};
</script>

<style scoped>

</style>