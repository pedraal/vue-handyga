import Vue from 'vue'
import Vuex from 'vuex'
import VueHandyGa from '@/vue-handy-ga'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueHandyGa)

const options = {
  // Add your own gaID
  gaID: 'MY-GA-ID',
  builtin: false
}

if (document.getElementById('app')) {
  window.app = new Vue({
    el: '#app',
    store: new Vuex.Store(),
    vueHandyGaSettings: new VueHandyGa(options),
    render: createElement => createElement(App)
  })
}
