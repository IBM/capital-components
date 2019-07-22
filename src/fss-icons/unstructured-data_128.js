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
    d: "M22.445 3.976c-10.158 0-18.469 8.311-18.469 18.469s8.311 18.469 18.469 18.469 18.469-8.311 18.469-18.469S32.603 3.976 22.445 3.976zm0 30.012c-6.002 0-11.543-5.541-11.543-11.543s5.541-11.543 11.543-11.543 11.543 5.541 11.543 11.543-5.541 11.543-11.543 11.543zM82.469 64c0 10.158-8.311 18.469-18.469 18.469S45.531 74.158 45.531 64 53.842 45.531 64 45.531 82.469 53.842 82.469 64zM22.445 87.086c-10.158 0-18.469 8.311-18.469 18.469s8.311 18.469 18.469 18.469 18.469-8.311 18.469-18.469-8.311-18.469-18.469-18.469zm0 30.012c-6.002 0-11.543-5.541-11.543-11.543 0-6.002 5.541-11.543 11.543-11.543s11.543 5.541 11.543 11.543c0 6.002-5.541 11.543-11.543 11.543zm83.11-76.184c10.158 0 18.469-8.311 18.469-18.469s-8.311-18.469-18.469-18.469-18.469 8.311-18.469 18.469 8.311 18.469 18.469 18.469zm0-30.012c6.002 0 11.543 5.541 11.543 11.543s-5.541 11.543-11.543 11.543c-6.002 0-11.543-5.541-11.543-11.543s5.541-11.543 11.543-11.543zm0 76.184c-10.158 0-18.469 8.311-18.469 18.469s8.311 18.469 18.469 18.469 18.469-8.311 18.469-18.469-8.311-18.469-18.469-18.469zm0 30.012c-6.002 0-11.543-5.541-11.543-11.543 0-6.002 5.541-11.543 11.543-11.543 6.002 0 11.543 5.541 11.543 11.543 0 6.002-5.541 11.543-11.543 11.543z"
  }));
};

var _default = SvgComponent;
exports.default = _default;