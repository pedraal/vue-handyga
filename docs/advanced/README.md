---
sidebarDepth: 1
---

# Advanced <Badge text="v1.2.0"/>

## Options

List of available options / customizations

#### **`gaID`** <Badge type="warning" text="mandatory"/>

* **Type**: String
* **Description**: The Google Analytics identifier. It should looks like this `UA-XXXXXXXX-X`.

#### **`builtin`**
* **Default**: `true`
* **Type**: `Boolean`
* **Description**: Defines if you will be using the built-in UI component.

#### **`mandatory`**
* **Default**: `false`
* **Type**: `Boolean`
* **Description**: Defines if the user will have to accept cookie deposit to stay on website.

#### **`bgColor`**
* **Default**: `false`
* **Type**: `String`
* **Description**: Defines built-in component background.

#### **`textColor`**
* **Default**: `false`
* **Type**: `String`
* **Description**: Defines built-in component text color.

#### **`customLocales`**
* **Default**: `null`
* **Type**: `JSON`
* **Description**: Defines built-in component texts. It as to follow the [given format](#customize-built-in-ui).


## Cookies

To handle user consent and Google Analytics, this plugin delivers 2 types of cookies:

- **Consent related cookies**: To store user's consent, a `hasConsent` cookie is delivered, true or false depending on user's choice. Another cookie (`ga-disable-YOUR-GAID`) is delivered if the user refuses your tracking request which disable Google's script.
- **Google Analytics cookies**: [Official docs](https://developers.google.com/analytics/devguides/collection/analyticsjs)

## Accessing plugin inside Vue instance

As the plugin is globally registered, you can access its propreties and methods like so:

```js
this.$handyga.proprety
// OR
this.$handyga.method()
```

## API

#### **`.options`**

Access the object holding options

#### **`.start()`**

This function simply calls the google analytics provided script that will deposit cookies in the browser to track audience.

#### **`.accept()`**

This function sets a cookie that tells that the user has given his consent for your app to use Google Analytics. Then the `.start()` function is called to run Google's official script. [Official docs](https://developers.google.com/analytics/devguides/collection/analyticsjs)

#### **`.reject()`**

This function sets a cookie that tells that the user rejected your request to use cookies for tracking purposes. It also deletes existing tracking cookies and sets a window property blocking the Google's script to send data. Get more info in [official docs](https://developers.google.com/analytics/devguides/collection/analyticsjs/user-opt-out).

#### **`.checkConsent()`**

This function checks if the browser is already holding any consent cookie for your app/web site.

#### **`.processConsent(callback[optionnal])`**

This function brings the logic behing consent handling. It checks the trackablity of the client using the following conditions:

- If there is a consent cookie set on `false` or if the browser exposes a `doNotTrack` value equal to `yes` or `1` in the navigator global object. In that case, the `.reject()` method is called.
- If there is a consent cookie set on `true`, the `.start()` method is called.
- If the browser exposes a `doNotTrack` value equal to `no` or `0` in the navigator global object, a `true` consent cookie is stored and the `.start()` method is called.
- If none of this conditions is verified and:
  - you are using the built-in component, a Vuex action is dispatched to mutate UI's state, rendering a notification component prompting for user's consent.
  - you are not using the built-in component, you can pass a callback to this function to add your own UI logic.

## Built-in UI

To make Google Analytics integration really easy, according to RGPD requirements, the plugin has a built-in component handling consent request and cookie deposit for you.

Simply register this component in your main vue component. On mount, it will call the [`.processConsent()`](#processconsent-callback-optionnal) method. If the user has never been asked for consent, it will render a notification component. Otherwise, the plugin will use the stored user's choice to start tracking or not.

### Customize built-in UI

You can customize the built-in ui its components to follow your web app design. Pass hexcodes to [`bgColor`](#bgcolor) and [`textColor`](#textcolor) options to customize colors and pass your own JSON [`customLocales`](#customlocales) to customize your cookie consent request. This plugin supports Markdown to you can full customize the built-in UI.

::: warning
If you choose to use [`customLocales`](#customlocales), you will have to keep the following format

``` json
{
  "notification": "",
  "modalTitle": "",
  "modalBody": "",
  "actions": {
    "accept": "",
    "refuse": "",
    "more": ""
  },
  "mandatory": {
    "notification": "",
    "actions": {
      "accept": "",
      "more": "",
      "leave": ""
    }
  }
}
```
:::