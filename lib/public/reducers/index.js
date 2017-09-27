'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducerArticles = require('./reducer-articles');

var _reducerArticles2 = _interopRequireDefault(_reducerArticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({

    articles: _reducerArticles2.default

});

exports.default = reducer;