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
    d: "M76.005 31.987H15.981v28.011h60.024V31.987zm-6.003 22.009H21.983V37.99h48.019v16.006zm42.017 6.002H82.007V31.987h30.012v28.011zM51.995 96.013h60.024V66.001H51.995v30.012zm6.003-24.01h48.019V90.01H57.998V72.003zm-12.005 24.01H15.981V66.001h30.012v30.012zM3.976 19.982v88.035h120.048V19.982H3.976zm114.045 82.033H9.979v-76.03h108.043v76.03z"
  }));
};

var _default = SvgComponent;
exports.default = _default;