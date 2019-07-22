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
    d: "M54.029 24.157c0-12.216-9.913-22.029-22.029-22.029S9.971 12.041 9.971 24.157c0 8.411 5.107 15.821 12.016 19.525l-2.003 18.524L32 54.196l12.016 8.01-2.003-18.524c7.009-3.705 12.016-11.114 12.016-19.525zM32 44.183c-11.114 0-20.026-9.012-20.026-20.026 0-11.114 9.012-20.026 20.026-20.026s20.026 9.012 20.026 20.026A19.957 19.957 0 0 1 32 44.183zm9.012-28.237l3.004 3.004-13.518 13.518-7.51-7.51 3.004-3.004 4.506 4.506 10.514-10.514z"
  }));
};

var _default = SvgComponent;
exports.default = _default;