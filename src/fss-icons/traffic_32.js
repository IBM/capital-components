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
  }, props), _react.default.createElement("circle", {
    cx: 16,
    cy: 8,
    r: 3
  }), _react.default.createElement("path", {
    d: "M16 19a3.001 3.001 0 0 0 0-6 3.001 3.001 0 0 0 0 6zm0-5c1.103 0 2 .896 2 2s-.897 2-2 2-2-.896-2-2 .898-2 2-2zm0 13a3.001 3.001 0 0 0 0-6 3.001 3.001 0 0 0 0 6zm0-5c1.103 0 2 .896 2 2s-.897 2-2 2-2-.896-2-2 .898-2 2-2z"
  }), _react.default.createElement("path", {
    d: "M27 13h-4v-2l4-6h-4V1H9v4H5l4 6v2H5l4 6v2H5l4 6v4h14v-4l4-6h-4v-2l4-6zm-6 16H11V3h10v26z"
  }));
};

var _default = SvgComponent;
exports.default = _default;