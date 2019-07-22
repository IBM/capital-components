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
    d: "M2.125 1.988V48.16l13.852 13.852h46.172V1.988H2.125zm56.561 56.561H18.285V45.852H5.588V5.451h53.098v53.098zM29.828 29.691v-8.08h4.617v8.08h8.08v4.617h-8.08v19.623h19.623V34.309h-8.08v-4.617h8.08V10.068H34.445v8.08h-4.617v-8.08H10.205v19.623h19.623zm20.778 20.778H37.908V37.772h12.697v12.697zM37.908 13.531h12.697v12.697H37.908V13.531zm-24.24 0h12.697v12.697H13.668V13.531z"
  }));
};

var _default = SvgComponent;
exports.default = _default;