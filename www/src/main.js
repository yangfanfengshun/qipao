import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import router from './router.config'

Vue.config.productionTip = false
//引入css
import './assets/css/public.css'
import './assets/css/pagination.css'
import './assets/css/iconfont.css'
import './assets/css/style.1.css'
//引入axios，并放到根实例原型上
import axios from 'axios'
Vue.prototype.$http = axios




new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
