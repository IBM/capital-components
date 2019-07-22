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
    d: "M32 6L2 58h60L32 6zm0 4.002L58.537 56H5.463L32 10.002z"
  }), _react.default.createElement("path", {
    d: "M30 28v4l1 10h2l1-10v-4z"
  }), _react.default.createElement("circle", {
    cx: 32,
    cy: 46,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;