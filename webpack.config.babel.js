import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {

  entry: {
   app: path.join(__dirname, '/src/public'),
   vendor: ['react', 'react-router-dom']
  },

  output: {
   filename: 'bundle.js',
   path: path.join(__dirname, '/lib/public')
  },

  module: {

    rules: [

       {
         test: /\.(js)$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
       },

       {
         test: /\.(scss|css)$/,
         use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
       },
     ]
  },

  plugins: [

    new ExtractTextPlugin({
      filename: 'style.css'
    }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].js',
      }),

      new htmlWebpackPlugin({
        title: 'sacasy',
        favicon: path.join(__dirname, '/src/public/static/images/favicon.ico')
      })
    ,

      new copyWebpackPlugin([{
        from: path.join(__dirname, '/src/public/static'),
        to: path.join(__dirname, '/lib/public/static')
      }])

  ]

}
