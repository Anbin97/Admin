import Vue from 'vue'
import App from './App.vue'
// 引入初始化css
import 'normalize.css/normalize.css'
import "@/assets/style/index.less"
// 引入组件库
import './core/use.js'
// 引入公共方法
// import "./common"
// 引入vuex
import store from './store/'
// 路由
import router from './router'
import "@/router/beforeEach"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
