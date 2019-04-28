import Vue from 'vue'
import Router from 'vue-router'
import BlogList from './views/BlogList.vue'
import AddBlog from './views/AddBlog.vue'
import BlogContent from './views/BlogContent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BlogList
    },
    {
      path: '/addBlog',
      component:AddBlog,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import( webpackChunkName: "about"  './views/About.vue')
    },
    {
      path:'/blog/:id',
      component:BlogContent
    }
  ],
  mode:'history'
})
