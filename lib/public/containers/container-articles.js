'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actionsArticles = require('../actions/actions-articles');

var articles = _interopRequireWildcard(_actionsArticles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerArticles = function (_Component) {
  _inherits(ContainerArticles, _Component);

  function ContainerArticles(props) {
    _classCallCheck(this, ContainerArticles);

    return _possibleConstructorReturn(this, (ContainerArticles.__proto__ || Object.getPrototypeOf(ContainerArticles)).call(this, props));
  }

  _createClass(ContainerArticles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      addEventListener('click', function (e) {
        return _this2.props.fetchArticles();
      });
    }
  }, {
    key: 'render',
    value: function render() {

      if (!this.props.articles) {
        return _react2.default.createElement(
          'div',
          { className: 'container-articles' },
          'No Articles loaded.'
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'container-articles' },
        this.props.articles.map(function (article, index) {

          return _react2.default.createElement(
            'div',
            { key: index, className: 'container-articles-item' },
            _react2.default.createElement(
              'h1',
              null,
              article.title
            ),
            _react2.default.createElement(
              'h2',
              null,
              article.text
            )
          );
        })
      );
    }
  }]);

  return ContainerArticles;
}(_react.Component);

function props(state) {

  return {
    articles: state.articles
  };
}

function actions(dispatch) {

  return (0, _redux.bindActionCreators)({

    fetchArticles: articles.fetchArticles

  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(props, actions)(ContainerArticles);