---
sidebarDepth: 2
---

# Quick start <Badge text="v1.2.0"/>

## Introduction

Having an audience monitoring system is not a feature of your project. This shouldn't be a time consuming task when you bootstrap your new project.
That's why we designed Vue Handy GA to let you quickly plug Google Analytics in your web project.

## Installation

Install the npm package using CLI

```
npm install vue-handy-ga
# or
yarn add vue-handy-ga
```

## Usage

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

::: tip
Then you can use it the same way you would in a Vue Single File Component.
:::


## Examples

You'll find 2 examples in the [Github repo](https://github.com/pedraal/vue-handyga):

- Basic: In this example you will find how to use the plugin without the built-in UI.
- Built-in consent: This example is showing how to integrate the built-in UI in any Vue.js project.
- Custom locales: This example is showing how to use custom locales in the built-in UI.
