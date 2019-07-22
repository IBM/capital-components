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
    d: "M96 36c-7.629 0-14.539 3.054-19.588 8h-5.491c-1.384-2.389-3.962-4-6.921-4s-5.537 1.611-6.921 4h-5.491C46.539 39.054 39.629 36 32 36 16.531 36 4 48.541 4 64s12.531 28 28 28 28-12.541 28-28h8c0 15.459 12.531 28 28 28s28-12.541 28-28-12.531-28-28-28zM32 84c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm64 0c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"
  }));
};

var _default = SvgComponent;
exports.default = _default;