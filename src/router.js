import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import store from '@/store'

Vue.use(Router)

const checkAuth = (to, from, next) => {
  if (!store.getters.isAuth) {
    return next('/');
  } 

  return next();
};

const checkAdmin = (to, from, next) => {
  if (!store.getters.isAdmin) {
    return next('/');
  } 

  return next();
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
      beforeEnter: (to, from, next) => {
        if (!store.getters.isAuth) {
          return next('/');
        } 

        if (store.getters.isAdmin) {
          return next('/dashboard');
        } 

        return next();
      }
    },
    {
      path: '/orders/:id',
      name: 'orderDetails',
      component: () => import('./views/OrderDetails.vue'),
      beforeEnter: (to, from, next) => {
        if (!store.getters.isAuth) {
          return next('/');
        } 

        if (store.getters.isAdmin) {
          return next('/dashboard');
        } 

        if (store.state.orders.length === 0) {
          return next('/orders');
        } 

        return next();
      }
    },
    {
      path: '/dashboard',
      component: () => import ('./views/dashboard/Index.vue'),
      beforeEnter: checkAdmin,
      children: [
        {
          path: '',
          component: () => import ('./views/dashboard/dashboard/Dashboard.vue'),
        },
        {
          path: 'users',
          component: () => import ('./views/dashboard/users/Users.vue'),
        },
        {
          path: 'users/:id/orders',
          component: () => import ('./views/dashboard/users/Orders.vue'),
        },
        {
          path: 'users/:id/edit',
          component: () => import ('./views/dashboard/users/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (store.state.users.length === 0) {
              return next('/dashboard/users');
            }

            return next();
          }
        },
        {
          path: 'orders',
          component: () => import ('./views/dashboard/orders/Orders.vue'),
        },
        {
          path: 'orders/:id',
          component: () => import ('./views/dashboard/orders/Details.vue'),
        },
        {
          path: 'orders/:id/edit',
          component: () => import ('./views/dashboard/orders/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (store.state.orders.length === 0) {
              return next('/dashboard/orders');
            }

            return next();
          }
        },
        {
          path: 'books',
          component: () => import ('./views/dashboard/books/Books.vue'),
        },
        {
          path: 'books/add',
          component: () => import ('./views/dashboard/books/Add.vue'),
        },
        {
          path: 'books/:id',
          component: () => import ('./views/dashboard/books/View.vue'),
        },
        {
          path: 'books/:id/edit',
          component: () => import ('./views/dashboard/books/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (store.state.books.length === 0) {
              return next('/dashboard/books');
            }

            return next();
          }
        },
        {
          path: 'genres',
          component: () => import ('./views/dashboard/genres/Genres.vue'),
        },
        {
          path: 'genres/:id/edit',
          component: () => import ('./views/dashboard/genres/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (store.state.genres.length === 0) {
              return next('/dashboard/genres');
            }

            return next();
          }
        },
        {
          path: 'genres/add',
          component: () => import ('./views/dashboard/genres/Add.vue'),
        },
        {
          path: 'authors',
          component: () => import ('./views/dashboard/authors/Authors.vue'),
        },
        {
          path: 'authors/:id/edit',
          component: () => import ('./views/dashboard/authors/Edit.vue'),
          beforeEnter: (to, from, next) => {
            if (store.state.authors.length === 0) {
              return next('/dashboard/authors');
            }

            return next();
          }
        },
        {
          path: 'authors/add',
          component: () => import ('./views/dashboard/authors/Add.vue'),
        },
      ]
    }
  ]
})
