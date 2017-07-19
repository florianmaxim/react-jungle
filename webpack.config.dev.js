const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: [
     'webpack-dev-server/client?http://0.0.0.0:8080',
     'webpack/hot/only-dev-server',
     './src/public/index'
   ],

    output: {
      filename: '[name].js',
      path: path.join(__dirname, './lib/public'),
      //Needed for absolute path, which are required if using routes
      publicPath:'/'
    },

    module: {

      loaders: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.(scss|css)$/,
            loaders:
              [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
        },
      ],
    },

    plugins: [

      new CopyWebpackPlugin(
        [
          {
            from: path.join(__dirname, './src/public/static'),
            to: path.join(__dirname, './lib/public/static')
          }
        ]
      ),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].js',
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/public/index.html'),
        filename: 'index.html'
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          context: __dirname,
          postcss: [Autoprefixer({ browsers: ['last 3 versions'] })],
        },
      }),

      new webpack.HotModuleReplacementPlugin(),

      new webpack.NamedModulesPlugin()

    ]

};
