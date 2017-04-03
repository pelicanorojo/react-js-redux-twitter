'use strict'
const webpack = require('webpack');
const path = require('path');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const configFactory = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);

  return {
    entry: {
      app: './app/app.js'
    },
    output: {
      filename: './public/js/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [ 'react', 'env', 'es2015'],
            plugins: [
            ]
          }
        }
      ]
    },
    devServer: {
      contentBase: [
        path.join(__dirname, '../../public/'),
        path.join(__dirname, '../../app/')
      ],
      watchContentBase: true,
      publicPath: '/',
      compress: true,
      port: 9000
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: ifNotProd()// config.debug has to be passed this way now too!
      }),
      new CopyWebpackPlugin([
          { from: './app/index.html', to: './public/' },
        ],
        {
          copyUnmodified: false
        })
    ]
  };
};

module.exports = configFactory(process.env);
