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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M32 12c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20 11.046 0 20-8.954 20-20 0-11.044-8.954-20-20-20zm4 24l-16 8 8-16 16-8-8 16z"
  }), _react.default.createElement("path", {
    d: "M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 54C17.664 58 6 46.336 6 32S17.664 6 32 6s26 11.664 26 26-11.664 26-26 26z"
  }), _react.default.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;