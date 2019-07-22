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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M107.892 47.342c0-24.418-19.815-44.032-44.032-44.032S19.827 23.124 19.827 47.342c0 16.812 10.208 31.623 24.018 39.029l-4.003 37.027 24.018-16.012 24.018 16.012-4.003-37.027c14.01-7.406 24.017-22.217 24.017-39.029zM63.86 87.371c-22.216 0-40.029-18.013-40.029-40.029 0-22.216 18.013-40.029 40.029-40.029s40.029 18.013 40.029 40.029A39.89 39.89 0 0 1 63.86 87.371zM81.873 30.93l6.004 6.004-27.02 27.02-15.011-15.011 6.004-6.004 9.007 9.007L81.873 30.93z"
  }));
};

var _default = SvgComponent;
exports.default = _default;