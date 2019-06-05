/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default  new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showfooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }


  ]

})
