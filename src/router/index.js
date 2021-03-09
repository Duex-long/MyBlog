import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/home',
    name:'home',
    component :() =>import('@/views/Home.vue')
  },
  {
    path:'/float',
    name:'Float',
    component :() =>import('@/components/Float.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to,from,next) => {
//   if(to.path ==='/login'){
//     return next()
//   }else{
//   //  获取一个token 现在没设置 默认跳转login
//     var tokenstr = false
//     if(!tokenstr) {
//       return next('/login')
//     } else{
//       next('/home')
//     }
//   }
// })

export default router
