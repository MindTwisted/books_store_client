import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store/index'

const AUTH_TOKEN = localStorage.getItem('token');

if (AUTH_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
}

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const response = error.response;

  if (response.status == 401) {
    store.commit('removeAuth');
    store.commit('setLoginModal');

    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('discount');

    router.push('/');
  }

  return Promise.reject(error);
});

Vue.config.productionTip = false

Vue.filter('price', function (value) {
  return `${value}$`;
})

Vue.filter('percent', function (value) {
  return `${value}%`;
})

Vue.use(Vuelidate)
Vue.use(Notifications)
Vue.use(VueChartkick, {adapter: Chart})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
  TODO:
  3) add loaders;
  4) add REST API documentation;
*/