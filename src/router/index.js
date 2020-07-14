import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


//在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复，
// 虽然对项目无影响，但是看到有红的还是不舒服。
// 于是查了一下发现可以这样解决
// 在你引入VueRouter的时候再加上一句话：
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}

 //import Welcome from '../components/Welcome.vue'
// import Users from '../components/Users.vue'
// import Roles from '../components/Roles.vue'
// import Rights from '../components/Rights.vue'
// import Goods from '../components/Goods.vue'
// import Params from '../components/Params.vue'
// import Categories from '../components/Categories.vue'
// import Orders from '../components/Orders.vue'
// import Reports from '../components/Reports.vue'

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export const defaultRoutes = [
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  
]

// export const dsyncRouter = [
  // {
  //   path:'/users',
  //   component:Users,
  // },
  // {
  //   path:'/roles',
  //   component:Roles,
  
  // },
  // {
  //   path:'/rights',
  //   component:Rights,
    
  // },
  // {
  //   path:'/goods',
  //   component:Goods,
  
  // },
  // {
  //   path:'/params',
  //   component:Params,
  
  // },
  // {
  //   path:'/categories',
  //   component:Categories,
   
  // },
  // {
  //   path:'/orders',
  //   component:Orders,
   
  // },
  // {
  //   path:'/reports',
  //   component:Reports,
  
  // },
// ]




const router = new VueRouter({
  routes:defaultRoutes
})
router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()

  var tokenStr =  window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next();
  
})
export default router
