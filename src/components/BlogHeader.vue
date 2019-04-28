<template>
	<div id="blog-header">
		<div class="title">
      		<router-link to="/" class="item" exact>博客列表</router-link>
      		<router-link to="/addBlog" class="item" exact>写博客</router-link>
    	</div>
	</div>
</template>

<script>
	export default{
		name:'blog-header'
	};
</script>

<style scoped>
	.title{
    width:50%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content:center;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    position: fixed;
    left:25%;
    top:0px;
  }
  .item{
    color:#333;
    margin:0px 20px;
    text-decoration-line: none;
    padding-bottom: 6px;
  }
  .router-link-active{
    color:red;
    font-weight: bold;
  }
</style>