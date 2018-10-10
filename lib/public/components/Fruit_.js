"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    margin: 25px;\n   \n    border: 0px solid gold;\n\n    color: gold;\n\n    > h1 {\n        margin:0;\n        color: LIGHTYELLOW;\n        font-size: 43px;\n        font-family: Cinzel;\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents.default.div(_templateObject());

exports.Heading = Heading;