// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Config from './models/Config'
import router from './router'
import store from './store'
import layout from './components/Layout'
import axios from 'axios'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faReply, faUser, faTrash, faSpinner, faHeart, faEdit} from '@fortawesome/free-solid-svg-icons/'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import 'bulma/css/bulma.css'
import 'bulma-extensions/dist/css/bulma-extensions.min.css'
import './assets/css/app.css'
import Session from './models/Session'

window.axios = axios

window.Event = new Vue()
window.Config = Config

axios.interceptors.request.use(
  conf => {
    Event.$emit('before-request')
    return conf
  },
  error => {
    Event.$emit('request-error')
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  response => {
    Event.$emit('after-response')
    return response
  },
  error => {
    Event.$emit('response-error')
    return Promise.reject(error)
  }
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faSpinner, faReply, faTrash, faUser, faHeart, faEdit)

Vue.config.productionTip = false
Vue.component('layout', layout)

if (Session.token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + Session.token.access_token
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
