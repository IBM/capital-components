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
    d: "M20 4v120h88V4H20zm84 116H24V8h80v112z"
  }), _react.default.createElement("path", {
    d: "M64 108c15.465 0 28-12.535 28-28 0-15.461-12.535-28-28-28S36 64.539 36 80c0 15.465 12.535 28 28 28zm0-36a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
  }), _react.default.createElement("circle", {
    cx: 64,
    cy: 32,
    r: 8
  }));
};

var _default = SvgComponent;
exports.default = _default;