# VueHandyGa

Vue.js plugin making Google Analytics (RGPD friendly) integration easy!

## Quick start

### 1. Install

Install the npm package using CLI

```
npm install vue-handy-ga
# or
yarn add vue-handy-ga
```

### 2. Usage

### Vue.js

In your `index.js` file :

```js
import Vue from 'vue'
import Vuex from 'vuex'
import VueHandyGa from 'vue-handy-ga'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueHandyGa)

const options = {
  gaID: 'UA-XXXXXXXX-X'
}

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  vueHandyGaSettings: new VueHandyGa(options),
  render: createElement => createElement(App)
})
```

In your Single File Component :

```vue
<template>
  <div>
    <vue-handy-ga />
  </div>
</template>

<script>
export default {}
</script>
```

### Nuxt.js

In your `nuxt.config.js` file :

```js
export default : {
  // [...]
  modules: [
    ['vue-handy-ga/nuxt', {
      gaID: 'UA-XXXXXXXX-X'
    }]
  ]
  // [...]
}
```

Then you can use it the same way you would in a Vue Single File Component.

## Documentation

Find the official documentation [here](https://pedraal.github.io/vue-handyga/)

## License

MIT

## Credits

- Vue Plugin Boilerplate: [f/vue-plugin-boilerplate/](https://github.com/f/vue-plugin-boilerplate)
