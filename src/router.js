import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import store from '@/store'

Vue.use(Router)

const checkAuth = (to, from, next) => {
  if (store.getters.isAuth) {
    next();
  } else {
    next('/');
  }
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/books/:id',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
      beforeEnter: checkAuth
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue'),
      beforeEnter: checkAuth
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./views/Orders.vue'),
      beforeEnter: checkAuth
    },
    {
      path: '/orders/:id',
      name: 'orderDetails',
      component: () => import('./views/OrderDetails.vue'),
      beforeEnter: (to, from, next) => {
        if (store.getters.isAuth) {
          if (store.state.orders.length > 0) {
            next();
          } else {
            next('/orders');
          }
          
        } else {
          next('/');
        }
      }
    }
  ]
})
