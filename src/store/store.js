import Vue from 'vue'
import Vuex from 'vuex'
import fund from './modules/fund'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fund,
  },
})
