---
sidebarDepth: 2
---

# Quick start <Badge text="v1.2.0"/>

## Introduction

This guide is made to help you quickly setup Google Analytics and cookie consent request in your new web project using plugin's built-in UI. To customize the built-in UI, refer to the [available options](/advanced/#options). To build a custom cookies consent handler, refer to the [API](/advanced/#api) in the advanced section.

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

You'll find 2 examples in the [Github repo](https://github.com/pedraal/vue-handyga/tree/master/examples):

- Basic: In this example you will find how to use the plugin without the built-in UI.
- Built-in consent: This example is showing how to integrate the built-in UI in any Vue.js project.
- Custom locales: This example is showing how to customize locales in the built-in UI.
