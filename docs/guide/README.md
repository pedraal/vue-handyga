---
sidebar: auto
---

# Guide

## Introduction

The goal of this Vue plugin is to let you integrate Google Analytics faster.
In this guide we will walk through the entire process to get this npm module and to get it running in your app.

## Installation

Install the npm package using CLI

```
npm install vue-handy-ga
```

## Integration

- **In a vue.js project**

In your index.js file:

```js
import Vue from 'vue'
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

- In a nuxt.js projet

  _Coming soon_

## Advanced

### Configuration

Here are the options you can pass to the VueHandyGa object:

```js
const options = {
  gaID: '' //Your ID provided by Google Analytics
}
```

### Accessing plugin inside Vue instance

As the plugin is globally registered, you can access its propreties and methods like so:

```js
this.$vueHandyGa.proprety
// OR
this.$vueHandyGa.method()
```

### Methods

- **.start()**

  This function simply calls the google analytics provided script that will deposit cookies in the browser to track audience.
