const path = require('path');
const createConfig = require('./webpackHelper');

module.exports = createConfig({
  entry: {
    devtools: './src/devtools.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  devtool: process.env.NODE_ENV !== 'production'
    ? '#inline-source-map'
    : false
});
