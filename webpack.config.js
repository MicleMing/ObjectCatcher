const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const createConfig = require('./webpackHelper');

module.exports = createConfig({
  entry: {
    devtools: './src/devtools.js',
    background: './src/background.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new CopyPlugin([
      { from: './background.html', to: './' },
      { from: './devtools.html', to: './' },
      { from: './manifest.json', to: './' },
      { from: './icons', to: './icons' },
      { from: './content.js', to: './' },
    ]),
  ],
  devtool: process.env.NODE_ENV !== 'production'
    ? '#inline-source-map'
    : false
});
