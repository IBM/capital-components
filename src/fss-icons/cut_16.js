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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M13 6H9V4.789a2.5 2.5 0 1 0-2 0V6h-.005A.996.996 0 0 0 6 6.995V7H4.789A2.498 2.498 0 0 0 0 8a2.5 2.5 0 0 0 4.789 1H6v4l3 3V9h7l-3-3zM6.5 2.5C6.5 1.673 7.173 1 8 1s1.5.673 1.5 1.5S8.827 4 8 4s-1.5-.673-1.5-1.5zm-4 7C1.673 9.5 1 8.827 1 8s.673-1.5 1.5-1.5S4 7.173 4 8s-.673 1.5-1.5 1.5z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;