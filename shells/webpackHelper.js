const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = (config, target = { chrome: 52, firefox: 48 }) => {

  const baseConfig = {
    resolve: {
      alias: {
        src: path.resolve(__dirname, '../src'),
        components: path.resolve(__dirname, '../src/devtools/components'),
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname)
          ],
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.css$/,
          loader: 'css-loader'
        },
        {
          test: /\.scss$/,
          loaders: [
            "style-loader",
            "css-loader?modules&localIdentName=[path]_[name]_[local]_[hash:base64:5]",
            "sass-loader"],
          include: path.resolve(__dirname, "../src")
        },
        {
          test: /\.(png|woff2)$/,
          loader: 'url-loader?limit=0'
        }
      ]
    },
    performance: {
      hints: false
    },
    devServer: {
      port: process.env.PORT
    }
  }
  return merge(baseConfig, config);
}
