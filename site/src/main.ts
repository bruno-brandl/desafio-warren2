import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Maska from 'maska'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Maska)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
