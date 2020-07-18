import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'
import request from '@/utils/request'
Vue.use(Element, {
  size: 'small',
  zIndex: 3000
})
Vue.config.productionTip = false

Vue.prototype.$http = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
