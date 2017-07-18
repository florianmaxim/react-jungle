const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    app: path.join(__dirname, '/src/public'),
    vendor: ['react', ]
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/lib/public')
  },

  module: {

    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]

  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].js',
    }),
    new HtmlWebpackPlugin({
      title: 'app',
      inject: 'body'
    })
  ]
}
