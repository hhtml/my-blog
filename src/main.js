import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.use(axios)

Vue.config.productionTip = false

//全局配置axios
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'

//自定义全局指令
Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value == 'theme'){
			el.style.backgroundColor = '#6677cc'
		}

		if(binding.arg == 'column'){
			el.style.padding = '10px'
		}
	}
})

//自定义全局过滤器
Vue.filter('snippet',function (value) {
	return value.slice(0,50) + '...'
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
