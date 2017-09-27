'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _Routes = require('./public/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reducers = require('./public/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _config = require('../config.json');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

var app = (0, _express2.default)();

app.use('/', _express2.default.static(_path2.default.resolve(__dirname, 'public')));

app.get('*', function (req, res) {

  var context = {};

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      {
        location: req.url,
        context: context
      },
      _react2.default.createElement(_Routes2.default, null)
    )
  ));

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(new _Document2.default({ html: html, scripts: config.scripts, title: config.title }).get());
    res.end();
  }
});

app.listen(config.port, function () {
  console.log('Listening on port ' + config.port + '...');
});