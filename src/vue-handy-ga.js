import { devMode, registerVuexStore } from './utils';

import VueHandyGaComponent from './vue-handy-ga-component.vue';

export default class VueHandyGa {
  constructor(options = {}) {
    const defaults = {
      accessorName: '$vueHandyGa'
    };
    this.options = { ...defaults, ...options };
  }

  world() {
    return 'world';
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
