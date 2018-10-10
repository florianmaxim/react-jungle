"use strict";

var config = _interopRequireWildcard(require("../config.json"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var webpack = require('webpack');

var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('../.webpack.config.dev.babel');

var WebpackDevServerConfig = {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
};
var app = new WebpackDevServer(webpack(webpackConfig), WebpackDevServerConfig);
app.listen(config.port_dev, function () {
  console.log("\n        [".concat(_chalk.default.hex('#FFD700').bold(config.info.name), " ").concat(_chalk.default.red("(".concat(config.version.number, ")")), " \"").concat(_chalk.default.blue(config.version.name), "\"]\n        - Listening on port ").concat(_chalk.default.yellow(config.port_dev), "\n    "));
});