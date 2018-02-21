"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\n    margin: 25px;\n   \n    border: 0px solid gold;\n\n    > h1 {\n        margin:0;\n        color: PALEVIOLETRED;\n        font-size: 43px;\n        font-family: Cinzel;\n    }\n\n    > p {\n        margin:0;\n        font-size: 25pt;\n        font-family: Open Sans;\n        color: PALEVIOLETRED;\n    }\n"], ["\n\n    margin: 25px;\n   \n    border: 0px solid gold;\n\n    > h1 {\n        margin:0;\n        color: PALEVIOLETRED;\n        font-size: 43px;\n        font-family: Cinzel;\n    }\n\n    > p {\n        margin:0;\n        font-size: 25pt;\n        font-family: Open Sans;\n        color: PALEVIOLETRED;\n    }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents.default.div(_templateObject);

exports.Heading = Heading;