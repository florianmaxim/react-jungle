'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchArticles = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _config = require('../../../config.json');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pseudo = [{
  _id: "1",
  title: "lala",
  text: "lolo."
}, {
  _id: "1",
  title: "lele",
  text: "lulu"
}];

var fetchArticles = exports.fetchArticles = function fetchArticles() {

  return function (dispatch) {

    _axios2.default.get(config.api.url + '/blog').then(function (response) {
      dispatch({ type: "RECEIVE_ARTICLES", payload: response.data });
    }).catch(function (err) {
      dispatch({ type: "RECEIVE_ARTICLES_ERROR", payload: err });
    });

    // dispatch({type: "RECEIVE_ARTICLES", payload: pseudo})
  };
};