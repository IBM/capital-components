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
    d: "M48 20v72.037C44.352 87.166 38.552 84 32 84c-11.043 0-20 8.953-20 20s8.957 20 20 20 20-8.953 20-20V39.059l60-14.117v51.096C108.352 71.166 102.552 68 96 68c-11.043 0-20 8.953-20 20s8.957 20 20 20 20-8.953 20-20V4L48 20zM32 120c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zm64-16c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;