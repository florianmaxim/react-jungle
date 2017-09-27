'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('../config.json');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _DEFAULT = {
  TITLE: config.title,
  HTML: 'No html.',
  CSS: '/style.css',
  VENDOR: '/vendor.js',
  BUNDLE: '/bundle.js',
  SCRIPTS: config.scripts
};

var Document = function () {
  function Document(props) {
    _classCallCheck(this, Document);

    var _title = props !== undefined && props.title !== undefined ? props.title : _DEFAULT.TITLE;
    var _html = props !== undefined && props.html !== undefined ? props.html : _DEFAULT.HTML;

    var _css = props !== undefined && props.css !== undefined ? props.css : _DEFAULT.CSS;
    var _vendor = props !== undefined && props.vendor !== undefined ? props.vendor : _DEFAULT.VENDOR;
    var _bundle = props !== undefined && props.bundle !== undefined ? props.bundle : _DEFAULT.BUNDLE;

    var _scripts = props !== undefined && props.scripts !== undefined ? props.scripts : _DEFAULT.SCRIPTS;
    var _scriptsString = '';

    _scripts.map(function (script) {
      return _scriptsString += script;
    });

    this.doc = '<!doctype html>\n      <html>\n      <head>\n      <meta charset="utf-8"/>\n      <link rel="stylesheet" type="text/css" href="' + _css + '"/>\n      <script>\n      ' + _scriptsString + '\n      </script>\n      </head>\n      <body>\n      <div id="app">' + _html + '</div>\n      <script src="' + _vendor + '"></script>\n      <script src="' + _bundle + '"></script>\n      </body>\n      </html>';

    return this;
  }

  _createClass(Document, [{
    key: 'get',
    value: function get() {
      return this.doc;
    }
  }]);

  return Document;
}();

exports.default = Document;