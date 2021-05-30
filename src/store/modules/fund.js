export default {
  namespaced: true,
  actions: {},
  mutations: {
    changeFund(state, payload) {
      state.fund -= payload
    },
    setLastTrade(state, payload) {
      state.lastTrade = payload
    },
    setDefaultLastTrade(state) {
      state.lastTrade = null
    },
  },
  state: {
    fund: 100000,
    lastTrade: null,
  },
  getters: {
    allFund(state) {
      return state.fund
    },
  },
}

