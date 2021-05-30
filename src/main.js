import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  store,
  router,
  vuetify: new Vuetify({}),
  render: h => h(App),
}).$mount('#app')
