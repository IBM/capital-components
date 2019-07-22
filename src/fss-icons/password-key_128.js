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
    d: "M100 4L50.445 53.553A35.947 35.947 0 0 0 40 52C20.117 52 4 68.117 4 88s16.117 36 36 36 36-16.117 36-36c0-3.635-.551-7.141-1.555-10.447L84 68v-8h8l32-32V4h-24zm20 22.343L90.344 56H80v10.343l-8.383 8.381-1.696 1.696.697 2.295A31.945 31.945 0 0 1 72 88c0 17.645-14.356 32-32 32-17.645 0-32-14.355-32-32s14.355-32 32-32c3.139 0 6.264.464 9.285 1.381l2.293.695 1.695-1.695L101.656 8H120v18.343z"
  }), _react.default.createElement("circle", {
    cx: 32,
    cy: 96,
    r: 8
  }), _react.default.createElement("path", {
    d: "M82.585 42.586l24-24 2.828 2.83-24 23.999z"
  }));
};

var _default = SvgComponent;
exports.default = _default;