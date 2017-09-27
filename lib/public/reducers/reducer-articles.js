"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments[1];


  switch (action.type) {

    case "RECEIVE_ARTICLES":
      return action.payload;
      break;

  }
  return state;
};

var init = null;