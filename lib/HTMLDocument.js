"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HTMLDocument =
/*#__PURE__*/
function () {
  function HTMLDocument(props) {
    _classCallCheck(this, HTMLDocument);

    this.document = "<!doctype html>";
    this.document = "<html>";
    this.document += "<head>";
    this.document += "<meta charset=\"utf-8\"/>";
    this.document += "<title>".concat(props.head.title, "</title>");
    this.document += "".concat(props.head.styles);
    this.document += "<link rel=\"icon\" type=\"image/png\" href=\"static/favicon.png\">";
    this.document += "<meta name=\"apple-mobile-web-app-title\" content=\"".concat(props.head.title, "\">");
    this.document += "<link rel=\"apple-touch-icon\" href=\"static/favicon.png\">";
    this.document += "<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"static/favicon-152.png\">";
    this.document += "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"static/favicon-180.png\">";
    this.document += "<link rel=\"apple-touch-icon\" sizes=\"167x167\" href=\"static/favicon-167.png\">";
    this.document += "</head>";
    this.document += "<body>";
    this.document += "<div id=\"root\">".concat(props.body.root, "</div>");
    this.document += "<script src=\"/bundle.js\"></script>";
    this.document += "</body>";
    this.document += "</html>";
    return this;
  }

  _createClass(HTMLDocument, [{
    key: "getDocument",
    value: function getDocument() {
      return this.document;
    }
  }]);

  return HTMLDocument;
}();

exports.default = HTMLDocument;