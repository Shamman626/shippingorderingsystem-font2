import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/user/Login'
import Register from '@/components/user/Register'
import Home from '@/components/Home'
import CheckShipment from '@/components/shipments/CheckShipment'
import CreateShippingOrder from '@/components/shipments/CreateShippingOrder'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/home',
    component: Home,
    children: [
      // 写子路由  显示在主区域
      { path: '/checkShipment', component: CheckShipment},
      { path: '/createShippingOrder', component: CreateShippingOrder}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
