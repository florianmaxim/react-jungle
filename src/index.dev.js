const DEFAULT = {
  _PORT: 8080
}

const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.dev');

const WebpackDevServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};

const app = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);

app.listen(DEFAULT._PORT, ()=>{
  console.log(`Listening on port ${DEFAULT._PORT}...`)
})
