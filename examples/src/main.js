import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js'

Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){                 //在初始化阶段前
		Vue.prototype.$bus = this   //配置全局总线，bus有总线的意思
	}
}).$mount('#app')
