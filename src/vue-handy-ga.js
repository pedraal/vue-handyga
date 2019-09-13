import { devMode, registerVuexStore } from './utils';

// Import your additional components here
import VueHandyGaComponent from './vue-handy-ga-component.vue';

export default class VueHandyGa {
  // HERE IS YOUR PLACE TO DEVELOP YOUR COMPONENT

  constructor(options = {}) {
    const defaults = {
      // This is your plugin's options. It will be accessible with this.options
      accessorName: '$vueHandyGa',
      ui: false
    };
    this.options = { ...defaults, ...options };
  }

  // Some instance methods that you can access from this.$vueHandyGa
  world() {
    return 'world';
  }

  static register = (Vue, options, store) => {
    console.log('Here is the options of the component', options);
    console.log('Here is the store of the app', store);
    // You can use `this.options` property to access options.

    // Delete this line if your plug-in doesn't provide any components
    Vue.component('VueHandyGa', VueHandyGaComponent);

    // Vue.directive('your-custom-directive', customDirective);

    registerVuexStore(store, 'gaStore', {
      namespaced: true,
      state: { uiState: null },
      getters: {},
      actions: {},
      mutations: {}
    });
  };

  // Some lifecycle hooks to add on mixin
  static mixin = () => ({
    mounted() {
      console.log('Hey! I am running on every mount, please remove me!');
      console.log(this.$store);
    }
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
