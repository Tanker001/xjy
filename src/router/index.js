import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/homepage.vue'
import Login from '../views/Login'
import ShopManagement from '../views/shopManagement'
import Welcome from '../views/welcome'
import Shopdetails from '../views/shopManagement/Shopdetails.vue'
import CurrencyCoupon from '@/views/Couponmanagement/currencyCoupon.vue'
import ShopCoupon from '@/views/Couponmanagement/shopCoupon.vue'
import AddCoupon from '@/views/Couponmanagement/addCoupon.vue'
import EditCoupon from '@/views/Couponmanagement/editCoupon.vue'
//导入订单组件
// import OrderManagement from '../views/Ordermanagement'
// 导入订单列表组件
import OrderList from '../views/Ordermanagement/order/orderlist'
// 导入订单统计组件
import OrderCount from '../views/Ordermanagement/order/ordercount'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'login',
  component: Login
}, {
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [{
      path: '/welcome',
      component: Welcome
    }, {
      path: '/shopManagement',
      component: ShopManagement
    }, {
      path: '/shopdetails/:id',
      name: 'Shopdetails',
      component: Shopdetails
    },
    {
      path: '/qqqqq',
      component: () => import('@/views/Ordermanagement')
    }, {
      path: '/shopStyle',
      component: () => import('@/views/shopManagement/shopStyle')
    }, {
      path: '/currencyCoupon',
      component: CurrencyCoupon
    },
    {
      path: '/currencyCoupon/addcoupon',
      component: AddCoupon
    },
    {
      path: '/currencyCoupon/editcoupon',
      component: EditCoupon
    },
    {
      path: '/shopCoupon',
      component: ShopCoupon
    },
    {
      path: '/orderlist',
      component: OrderList
    },
    {
      path: '/ordercount',
      component: OrderCount
    }
  ]
}]
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
