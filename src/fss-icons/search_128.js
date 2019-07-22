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
    d: "M48 4C23.703 4 4 23.703 4 48c0 24.295 19.703 44 44 44s44-19.705 44-44C92 23.703 72.297 4 48 4zm0 84C25.944 88 8 70.056 8 48S25.944 8 48 8s40 17.944 40 40-17.944 40-40 40zm35.999 8l12-12 28 28-12 12z"
  }), _react.default.createElement("circle", {
    cx: 84,
    cy: 84,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;