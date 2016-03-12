const path = require('path');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const DefinePlugin = require('webpack').DefinePlugin;
const entry = './src/entry.js';

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, '../server/public'), //path.resolve([from ...], to): resolve to an abs path
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ //DO NOT USE 'PLUGIN'. THE 'S' is important!
      template: './src/index.html'
    }),
    new DefinePlugin({
      BASE_URL : JSON.stringify( process.env.BASE_URL || '' )
    })
    ],
  module: {
    preloaders: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
          query: {
          presets: ['es2015'],
          cacheDirectory: true,
          plugins: [ 'transform-runtime' ]//https://www.npmjs.com/package/babel-plugin-transform-runtime
          }
      },{
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  sassLoader: {
    includePaths: [ path.resolve(__dirname, './src/scss'), path.resolve(__dirname, './src/scss/components') ] //, './src/scss/colors'
  }
}
