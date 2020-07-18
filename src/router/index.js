import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/homepage.vue'
import Login from '../views/Login'
import ShopManagement from '../views/shopManagement'
import Welcome from '../views/welcome'
//导入订单组件
// import OrderManagement from '../views/Ordermanagement'
// 导入订单列表组件
import OrderList from '../views/Ordermanagement/order/orderlist'
// 导入订单统计组件
import OrderCount from '../views/Ordermanagement/order/ordercount'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/shopManagement',
        component: ShopManagement
      },
      {
        path: '/orderlist',
        component: OrderList
      },
      {
        path: '/ordercount',
        component: OrderCount
      },
      {
        path: '/qqqqq',
        component: () => import('@/views/Ordermanagement')
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
