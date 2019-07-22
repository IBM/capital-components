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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M25 1L12.611 13.388A9 9 0 0 0 1 22a9 9 0 0 0 9 9 9 9 0 0 0 8.611-11.612L21 17v-2h2l8-8V1h-6zm4 5.171L22.172 13H19v3.171l-1.803 1.802-.848.848.348 1.147c.201.662.303 1.345.303 2.032 0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7c.686 0 1.37.102 2.031.302l1.146.348.848-.848L25.828 3H29v3.171z"
  }), _react.default.createElement("circle", {
    cx: 8,
    cy: 24,
    r: 2
  }), _react.default.createElement("path", {
    d: "M20.646 10.647l6-6 .707.707-6 6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;