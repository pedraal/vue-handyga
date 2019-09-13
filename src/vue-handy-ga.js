import { devMode, registerVuexStore } from './utils';

import VueHandyGaComponent from './vue-handy-ga-component.vue';

export default class VueHandyGa {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$vueHandyGa',
      consentHandler: false,
      gaID: null
    };
    this.options = { ...defaults, ...options };
  }

  start() {
    if (!this.options.options.gaID)
      return console.log('[vue-handy-ga] No gaID provided');
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      'script',
      'https://www.google-analytics.com/analytics.js',
      'ga'
    );

    ga('create', this.options.options.gaID, 'auto');
    ga('send', 'pageview');
  }

  static register = (Vue, options, store) => {
    Vue.component('VueHandyGa', VueHandyGaComponent);

    registerVuexStore(store, 'gaStore', {
      namespaced: true,
      state: {},
      getters: {},
      actions: {},
      mutations: {}
    });
  };

  static mixin = () => ({
    mounted() {}
  });

  ////////////////////////////////////
  // YOU MAY NOT NEED TO EDIT BELOW //
  ////////////////////////////////////

  initialized = false;

  init(Vue, store) {
    if (devMode() && !install.installed) {
      console.warn(
        `[vue-handy-ga] not installed. Make sure to call \`Vue.use(VueHandyGa)\` before init root instance.`
      );
    }

    if (this.initialized) {
      return;
    }

    VueHandyGa.register(Vue, this.options, store);
    this.initialized = true;
  }
}

export function install(Vue) {
  const isDev = devMode();
  if (install.installed && Vue) {
    if (isDev) {
      console.warn(
        '[vue-handy-ga] already installed. Vue.use(VueHandyGa) should be called only once.'
      );
    }
    return;
  }

  Vue.mixin({
    /**
     * VueHandyGa init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const { vueHandyGaSettings, store, parent } = this.$options;

      let instance = null;
      if (vueHandyGaSettings) {
        instance =
          typeof vueHandyGaSettings === 'function'
            ? new vueHandyGaSettings()
            : new VueHandyGa(vueHandyGaSettings);
        // Inject store
        instance.init(Vue, store);
      } else if (parent && parent.__$VueHandyGaInstance) {
        instance = parent.__$VueHandyGaInstance;
        instance.init(Vue, parent.$store);
      }

      if (instance) {
        // Store helper for internal use
        this.__$VueHandyGaInstance = instance;
        this[instance.options.accessorName] = instance;
      }
    },

    ...VueHandyGa.mixin()
  });

  install.installed = true;
  if (isDev) {
    console.info('[vue-handy-ga] is plugged in.');
  }
}

VueHandyGa.install = install;
