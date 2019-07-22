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
    d: "M11.692 1C10.123 1 8.753 1.946 8 3.182 7.247 1.946 5.877 1 4.308 1 1.928 1 0 2.899 0 5.242c0 1.173.468 2.246 1.231 3.031C2.963 10.054 8 15 8 15s5.037-4.946 6.769-6.727A4.341 4.341 0 0 0 16 5.242C16 2.899 14.072 1 11.692 1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;