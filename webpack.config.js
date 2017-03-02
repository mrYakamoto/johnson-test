'use strict'

const env = require('./lib/env')
const transform = require('lodash.transform')
const webpack = require('webpack')

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': transform(env.all, (result, value, key) => {
    result[key] = JSON.stringify(value)

    return result
  }, {})
})

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin()

const plugins = [
  processEnvPlugin
]

if (env.NODE_ENV === 'production') {
  plugins.push(uglifyPlugin)
}

module.exports = {
  entry: {
    base: './LBJ.jsx'
  }
, module: {
    loaders: [
      {
        loader: 'babel'
      , query: {
          presets: [
            'es2015', 'react', 'stage-0'
          ]
        }
      , test: /\.(js|jsx)$/
      }
    , {
        loader: 'json'
      , test: /\.json$/
      }
    , {
        loaders: [
          'style'
        , 'css'
        , 'sass'
        ]
      , test: /\.scss$/
      }
    , {
        loaders: 'url'
      , test: /\.(svg|png|jpg)$/
      }
    ]
  }
, output: {
    filename: '[name].bundle.js'
  , path: env.NODE_ENV === 'production'
      ? './dist'
      : './dist-develop'
  }
, plugins
, resolve: {
    "extensions": [
      ''
    , '.js'
    , '.jsx'
    , '.json'
    ]
  }
}
