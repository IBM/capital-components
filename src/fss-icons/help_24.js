"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgComponent = function SvgComponent(props) {
  return _react.default.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M12 1C5.924 1 1 5.924 1 12s4.924 11 11 11c6.074 0 11-4.924 11-11S18.074 1 12 1zm9 11a8.925 8.925 0 0 1-1.271 4.587l-2.219-2.218a5.978 5.978 0 0 0 .001-4.738l2.219-2.218A8.934 8.934 0 0 1 21 12zM4.27 16.587C3.469 15.242 3 13.676 3 12s.469-3.242 1.27-4.587l2.219 2.219C6.175 10.359 6 11.159 6 12s.175 1.641.489 2.368L4.27 16.587zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm8.587-7.729L14.368 6.49A5.94 5.94 0 0 0 12 6c-.841 0-1.641.175-2.368.489L7.413 4.271A8.928 8.928 0 0 1 12 3c1.677 0 3.241.469 4.587 1.271zM7.413 19.729l2.219-2.219A5.94 5.94 0 0 0 12 18c.841 0 1.641-.175 2.368-.489l2.219 2.218A8.928 8.928 0 0 1 12 21a8.928 8.928 0 0 1-4.587-1.271z"
  }));
};

var _default = SvgComponent;
exports.default = _default;