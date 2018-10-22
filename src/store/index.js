import Vue from 'vue'
import Vuex from 'vuex'
import Session from '../models/Session'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: Session.user,
    roles: Session.roles
  },
  modules: {},
  mutations: {
    login (state, userData) {
      state.user = userData
      state.roles = userData.roles
      window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + Session.token.access_token
    },
    logout (state) {
      state.user = null
      state.roles = []
    }
  }
})
