# VueHandyGa

Vue.js plugin making Google Analytics (RGPD friendly) integration easy!

## Quick start

### 1. Install

```
yarn add vue-handy-ga
# or
npm i vue-handy-ga --save
```

### 2. Plug-in

```js
import VueHandyGa from 'vue-handy-ga'

Vue.use(VueHandyGa)

const options = {
  gaID: 'UA-XXXXXXXX-X',
  builtin: false //default: true
}

new Vue({
  // your vue config
  vueHandyGaSettings: new VueHandyGa(),
})
```

### 3. Use in your components

```vue
<template>
  <!-- If using built-in UI -->
  <vue-handy-ga />
</template>

<script>
export default {
  mounted() {
    console.log(this.$handyga)
  }
}
</script>
```

## Documentation

Find the official documentation [here](https://pedraal.github.io/vue-handyga/)

## License

MIT

## Credits

- Vue Plugin Boilerplate: [f/vue-plugin-boilerplate/](https://github.com/f/vue-plugin-boilerplate)
