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

new Vue({
  // your vue config
  vueHandyGaSettings: new VueHandyGa()
})
```

### 3. Use in your components

```vue
<template>
  <vue-handy-ga />
</template>

<script>
export default {
  async created() {
    console.log(this.$vueHandyGa)
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
