---
sidebarDepth: 1
---
# Advanced

## Configuration

Here are the options you can pass to the VueHandyGa object:

```js
const options = {
  gaID: String, //Your ID provided by Google Analytics
  builtin: Boolean //Controls if the built-in component should be used or not. Default: true
}
```
## Accessing plugin inside Vue instance

As the plugin is globally registered, you can access its propreties and methods like so:

```js
this.$handyga.proprety
// OR
this.$handyga.method()
```

## API

### **`.options`**

  Access the object holding options

### **`.start()`**

  This function simply calls the google analytics provided script that will deposit cookies in the browser to track audience.

### **`.accept()`**

  This function sets a cookie that tells that the user has given his consent for your app to use Google Analytics. Then the `.start()` function is called to set the tracking cookies using Google's official script.


### **`.reject()`**

  This function sets a cookie that tells that the user rejected your request to use cookies for tracking purpose. It also delete existing tracking cookies and deposit another cookie disabling tracking if cookie removal failed.


### **`.checkConsent()`**
  This function checks if the browser is already holding any consent cookie for your app/web site.


### **`.processCookieConsent()`**
  This function should be called on the app init and checks if the browser is holding or not a consent cookie. If a consent cookie 

## Built-in component
To make Google Analytics integration really easy, according to RGPD requirements, the plugin is provided with a built-in component handling consent request and cookie deposit for you.

Here's how the component lives inside your app:

1. On plugin installation, a Vuex store module is registered to hold UI state.
2. The component is registered in your main component.
3. On `mounted` lifecycle hook of the built-in component, the `.processCookieConsent()` method is called to check presence or absence of a consent cookie.

