<template>
  <div id="app">

    <!-- 引入导航栏组件 -->
    <BlogHeader></BlogHeader>
    <!-- 路由展示区域 -->
    <div class="content">
      <!-- <keep-alive> --> <!-- 实现前进刷新，后退缓存 -->
        <router-view/>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader.vue'
  export default{
    name:'app',
    data(){
      return{

      }
    },
    components:{
      BlogHeader
    }
  };
</script>

<style scoped>
  .content{
    width:50%;
    margin:0 auto;
    margin-top: 80px;
  }
</style>
