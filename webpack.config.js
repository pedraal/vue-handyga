const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ['./src/vue-handy-ga.js'],
  output: {
    library: 'VueHandyGa',
    libraryTarget: 'umd',
    filename: 'vue-handy-ga.js',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
