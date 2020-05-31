import Vue from 'vue'
import VueHandyGa from '@/vue-handy-ga'

import App from './App.vue'

Vue.use(VueHandyGa)

const options = {
  // Add your own gaID
  gaID: 'MY-GA-ID',
  builtin: false
}

if (document.getElementById('app')) {
  window.app = new Vue({
    el: '#app',
    vueHandyGaSettings: new VueHandyGa(options),
    render: createElement => createElement(App)
  })
}
