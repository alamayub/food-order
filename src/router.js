import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import demo from './views/demo.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  	{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
  ]
})
