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
    d: "M4 16v96h120V16H4zm116 92H8V36h112v72z"
  }), _react.default.createElement("path", {
    d: "M64 96c17.937 0 31.602-9.67 40-24-8.398-14.33-22.063-24-40-24-17.938 0-31.602 9.67-40 24 8.398 14.33 22.062 24 40 24zm0-44c14.506 0 26.961 7.08 35.305 20C90.961 84.92 78.506 92 64 92s-26.961-7.08-35.305-20C37.039 59.08 49.494 52 64 52z"
  }), _react.default.createElement("path", {
    d: "M64 86c7.734 0 14-6.266 14-14s-6.266-14-14-14c-7.727 0-14 6.266-14 14s6.273 14 14 14zm0-18.668c2.586 0 4.664 2.09 4.664 4.668S66.586 76.668 64 76.668s-4.664-2.09-4.664-4.668 2.078-4.668 4.664-4.668z"
  }));
};

var _default = SvgComponent;
exports.default = _default;