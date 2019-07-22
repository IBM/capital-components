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
    d: "M7 15l-3-3 3-3-1.5-1.5L1 12l4.5 4.5zM8 4h2v16H8zm3 1h9v2h-9zm0 4h6v2h-6zm0 4h12v2H11zm0 4h6v2h-6z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;