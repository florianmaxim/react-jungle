const path              = require('path');

const webpack           = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const UglifyJsPlugin    = require('uglifyjs-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: {
    app: path.join(__dirname, './src/public')
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './lib/public'),
  },

  module: {

    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]

  },

  plugins: [

    new CopyWebpackPlugin([{
      from: path.join(__dirname, '/src/public/static'),
      to: path.join(__dirname, '/lib/public/static')
    }]),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/public/index.html'),
      filename: 'index.html'
    }),
    
    new webpack.optimize.UglifyJsPlugin()

  ]

};
