import Vue from 'vue'
import VueHandyGa from '@/vue-handy-ga'
import customLocales from './custom-locales.json'

import App from './App.vue'

Vue.use(VueHandyGa)

const options = {
  gaID: 'MY-GA-ID',
  customLocales
}

if (document.getElementById('app')) {
  window.app = new Vue({
    el: '#app',
    vueHandyGaSettings: new VueHandyGa(options),
    render: createElement => createElement(App)
  })
}
