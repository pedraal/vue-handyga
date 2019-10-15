---
sidebarDepth: 2
---
# Quick start

## Introduction

The goal of this Vue plugin is to let you integrate Google Analytics faster.
In this guide we will walk through the entire process to get this npm module and to get it running in your app.

We'll also learn how to use built-in consent component and how to build yours using this plugin.

## Installation

Install the npm package using CLI

```
npm install vue-handy-ga
```

## Integration

### Using built-in UI

::: warning
As the built-in UI is registering a Vuex store module to handle UI state, you'll need to install Vuex and import it in your project
:::

In your index.js file:

```js
import Vue from 'vue'
import Vuex from 'vuex' 
import VueHandyGa from 'vue-handy-ga'

import App from './App.vue'

Vue.use(VueHandyGa)

const options = {
  gaID: 'UA-XXXXXXXX-X'
}

new Vue({
  el: '#app',
  vueHandyGaSettings: new VueHandyGa(options),
  render: createElement => createElement(App)
})
```

In your Vue file

```vue
<template>
  <div>
    <vue-handy-ga />
  </div>
</template>

<script>
export default {
  components: {
    VueHandyGa
  }
}
</script>

```

### Without built-in UI

In your index.js file:

```js
import Vue from 'vue'
import VueHandyGa from 'vue-handy-ga'

import App from './App.vue'

Vue.use(VueHandyGa)

const options = {
  gaID: 'UA-XXXXXXXX-X'
  builtin: false
}

new Vue({
  el: '#app',
  vueHandyGaSettings: new VueHandyGa(options),
  render: createElement => createElement(App)
})
```

In your Vue file

```vue
<template>
  <div>
    <h1>Hello world!</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$handyga.start()
  }
}
</script>

```

## Examples

You'll find 2 examples in the [Github repo](https://github.com/pedraal/vue-handyga): 
- Basic: In this example you will find how to use the plugin whitout the built-in UI
- Built-in consent: This example is showing how to integrate the built-in UI in any Vue.js project