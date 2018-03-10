const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.dev.bael');

const WebpackDevServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};

const app = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);

app.listen(config.port, () => {

    console.log(`
        [${chalk.hex('#FFD700').bold(config.info.name)} ${chalk.red(`(${config.version.number})`)} "${chalk.blue(config.version.name)}"]
        - Listening on port ${chalk.yellow(config.port)}
    `);

});