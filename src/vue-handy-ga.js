import { devMode, registerVuexStore } from './utils'

import Cookies from 'js-cookie'

import VueHandyGaComponent from './vue-handy-ga-component.vue'

export default class VueHandyGa {
  constructor (options = {}) {
    const defaults = {
      builtin: true,
      mandatory: false,
      gaID: null,
      bgColor: '#5c6bc0',
      textColor: 'white'
    }
    this.options = { ...defaults, ...options }
  }

  static register = (Vue, { options }, store) => {
    if (options.builtin) {
      Vue.component('VueHandyGa', VueHandyGaComponent)
      registerVuexStore(store, 'gaStore', {
        namespaced: true,
        state: {
          UIstate: 'none'
        },
        getters: {
          UIstate (state) {
            return state.UIstate
          }
        },
        actions: {
          updateUI ({ commit }, payload) {
            commit('UPDATE_UI', payload)
          }
        },
        mutations: {
          UPDATE_UI (state, payload) {
            state.UIstate = payload
          }
        }
      })
    }
    Vue.prototype.$handyga = {
      options,
/* eslint-disable */
      start () {
        if (!options.gaID) return console.log('[vue-handy-ga] No gaID provided')
        ;(function (i, s, o, g, r, a, m) {
          i.GoogleAnalyticsObject = r
          ;(i[r] =
            i[r] ||
            function () {
              ;(i[r].q = i[r].q || []).push(arguments)
            }),
          (i[r].l = 1 * new Date())
          ;(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0])
          a.async = 1
          a.src = g
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

        ga('create', options.gaID, 'auto')
        ga('send', 'pageview')
      },
      accept () {
        Cookies.set('hasConsent', true, { expires: 395 })
        this.start()
        if (options.builtin) {
          store.dispatch('gaStore/updateUI', 'none')
        }
      },
      reject () {
        const GA_COOKIE_NAMES = ['__utma', '__utmb', '__utmc', '__utmz', '_ga', '_gat', '_gid']
        Cookies.set(`ga-disable-${options.gaID}`, true, { expires: 395 })
        window[`ga-disable-${options.gaID}`] = true
        Cookies.set('hasConsent', false, { expires: 395 })
        GA_COOKIE_NAMES.forEach(cookieName => Cookies.remove(cookieName))
        if (options.builtin) {
          store.dispatch('gaStore/updateUI', 'none')
        }
      },
      /* eslint-enable */

      leave () {
        window.location.href = 'https://google.com'
      },

      checkConsent () {
        return Cookies.get('hasConsent') !== undefined
      },

      processConsent (callback) {
        const consentCookie = Cookies.getJSON('hasConsent')
        const doNotTrack = navigator.doNotTrack || navigator.msDoNotTrack

        if (doNotTrack === 'yes' || doNotTrack === '1' || consentCookie === false) {
          this.reject()
          return
        }

        if (consentCookie === true) {
          this.start()
          return
        }

        if (doNotTrack === 'no' || doNotTrack === '0') {
          Cookies.set('hasConsent', true, { expires: 395 })
          this.start()
          return
        }

        if (this.options.builtin) {
          store.dispatch('gaStore/updateUI', 'notification')
          return
        }

        if (callback) {
          callback()
        }
      }
    }
  }

  static mixin = () => ({})

  /// /////////////////////////////////
  // YOU MAY NOT NEED TO EDIT BELOW //
  /// /////////////////////////////////

  initialized = false

  init (Vue, store) {
    if (devMode() && !install.installed) {
      console.warn('[vue-handy-ga] not installed. Make sure to call `Vue.use(VueHandyGa)` before init root instance.')
    }

    if (this.initialized) {
      return
    }

    VueHandyGa.register(Vue, this.options, store)
    this.initialized = true
  }
}

export function install (Vue) {
  const isDev = devMode()
  if (install.installed && Vue) {
    if (isDev) {
      console.warn('[vue-handy-ga] already installed. Vue.use(VueHandyGa) should be called only once.')
    }
    return
  }

  Vue.mixin({
    /**
     * VueHandyGa init hook, injected into each instances init hooks list.
     */
    beforeCreate () {
      const { vueHandyGaSettings, store, parent } = this.$options

      let instance = null
      if (vueHandyGaSettings) {
        instance = typeof vueHandyGaSettings === 'function' ? new vueHandyGaSettings() : new VueHandyGa(vueHandyGaSettings) /* eslint-disable-line */
        // Inject store
        instance.init(Vue, store)
      } else if (parent && parent.__$VueHandyGaInstance) {
        instance = parent.__$VueHandyGaInstance
        instance.init(Vue, parent.$store)
      }
    },

    ...VueHandyGa.mixin()
  })

  install.installed = true
  if (isDev) {
    console.info('[vue-handy-ga] is plugged in.')
  }
}

VueHandyGa.install = install
