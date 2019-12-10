import Vue from 'vue';
import Vuex from 'vuex';
import VueHandyGa from '@/vue-handy-ga';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueHandyGa);

const options = {
  // Add your own gaID
  gaID: 'UA-119401025-6',
  advanced: true
};

if (document.getElementById('app')) {
  window.app = new Vue({
    el: '#app',
    store: new Vuex.Store(),
    vueHandyGaSettings: new VueHandyGa(options),
    render: createElement => createElement(App)
  });
}
