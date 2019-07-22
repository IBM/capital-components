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
    d: "M44 28v-8H20v8H4v80h120V28H44zm76 76H8V32h112v72z"
  }), _react.default.createElement("path", {
    d: "M84 94c14.367 0 26-11.633 26-26S98.367 42 84 42c-14.348 0-26 11.633-26 26s11.652 26 26 26zm0-48c12.131 0 22 9.869 22 22s-9.869 22-22 22-22-9.869-22-22 9.869-22 22-22z"
  }), _react.default.createElement("path", {
    d: "M84 82c7.734 0 14-6.266 14-14s-6.266-14-14-14c-7.727 0-14 6.266-14 14s6.273 14 14 14zm0-18a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;