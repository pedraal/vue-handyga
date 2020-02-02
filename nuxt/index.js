/*
Nuxt.js module for vue-test
Usage:
    - Install vue-test package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vue-test/nuxt'
            // Optionally passing options in module configuration
            ['vue-test/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VueTest: { ...options }
    }
*/

const { resolve } = require('path')

module.exports = function nuxtVueWaitModule (moduleOptions) {
  const options = Object.assign({}, this.options.VueHandyGa, moduleOptions)

  // Register plugin
  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'vue-handy-ga.template.js.tpl'),
    fileName: 'vue-handy-ga.js',
    options: options
  })
}

// required by nuxt
module.exports.meta = require('../package.json')
