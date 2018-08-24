import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store/index'

const AUTH_TOKEN = localStorage.getItem('token');
if (AUTH_TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
}

Vue.config.productionTip = false

Vue.filter('price', function (value) {
  return `${value}$`;
})

Vue.use(Vuelidate)
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
