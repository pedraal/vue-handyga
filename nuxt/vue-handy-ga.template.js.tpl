import Vue from 'vue'
import VueHandyGa from 'vue-handy-ga'

Vue.use(VueHandyGa);

export default ({ app }) => {
  // inject options from module
  const opts = [<%= serialize(options) %>][0]
  app.vueHandyGaSettings = new VueHandyGa(opts)
};
