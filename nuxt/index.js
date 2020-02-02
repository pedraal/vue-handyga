const { resolve } = require('path')

module.exports = function nuxtVueWaitModule (moduleOptions) {
  const options = Object.assign({}, this.options.VueHandyGa, moduleOptions)

  this.addPlugin({
    ssr: false,
    src: resolve(__dirname, 'vue-handy-ga.template.js.tpl'),
    fileName: 'vue-handy-ga.js',
    options: options
  })
}

module.exports.meta = require('../package.json')
