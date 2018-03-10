var path = require('path');

var webpack = require('webpack');

var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('../webpack.config.dev.bael');

var WebpackDevServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};
var app = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);
app.listen(config.port, function () {
  console.log("\n        [".concat(chalk.hex('#FFD700').bold(config.info.name), " ").concat(chalk.red("(".concat(config.version.number, ")")), " \"").concat(chalk.blue(config.version.name), "\"]\n        - Listening on port ").concat(chalk.yellow(config.port), "\n    "));
});