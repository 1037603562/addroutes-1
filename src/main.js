import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './plugins/element.js'
import './plugins/element.js'
Vue.config.productionTip = false

// import '../src/permission.js'
//axios
import axios from 'axios'//接口2备用：https://www.liulongbin.top:8888/api/private/v1/
axios.defaults.baseURL = 'http://119.23.53.78:8888/api/private/v1/'//http://119.23.53.78:8888/api/private/v1/login?username=admin&password=123456
//axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'//这个是自己搭建的后台接口

axios.interceptors.request.use(config => {
  //axios.interceptors后面的request就是一个请求拦截器，我们可以通过use函数为请求拦截器挂载一个回调函数
  //只要你通过axios项服务端发了一次数据请求，那么必然会在发送请求期间优先调用use这个回调函数。也就是请求在到达服务器之前
  //先调用一下这个回调函数,对咱们的请求做一下预处理，return config 就代表咱们已经对其做了一次预处理
  //console.log(config)

  config.headers.Authorization = window.sessionStorage.getItem('token')//为config做预处理--在config.headers下面手动加一个Authorization字段 赋值为预先保存的token
  //在最后必须return config
  return config
})

Vue.prototype.$http = axios

import './assets/css/globle.css'
new Vue({
  router,
  created () {//vue实例化之前执行 即页面刷新时执行
    store.commit('addMenu',router);
  },
  store,
  render: h => h(App)
}).$mount('#app')
