import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class VueHandyGa {
  constructor(options?: VueHandyGaOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface VueHandyGaOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $vueHandyGa: VueHandyGa;
    __$VueHandyGaInstance: VueHandyGa;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    vueHandyGaSettings?: VueHandyGaOptions | VueHandyGa
  }
}
