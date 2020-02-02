import Vue from 'vue'
import VueHandyGa from '@/vue-handy-ga'

import App from './App.vue'

Vue.use(VueHandyGa)

const options = {
  // Add your own gaID
  gaID: 'UA-119401025-6',
  // Set on false to let choice to your user
  mandatory: true
}

if (document.getElementById('app')) {
  window.app = new Vue({
    el: '#app',
    vueHandyGaSettings: new VueHandyGa(options),
    render: createElement => createElement(App)
  })
}
