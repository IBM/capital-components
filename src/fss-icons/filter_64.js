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
    d: "M62 2H2v8l24 24v28l12-12v-6.72A7.97 7.97 0 0 0 44 46c4.42 0 8-3.58 8-8a7.998 7.998 0 0 0-10.353-7.647L62 10V2zM50 38c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm-13.414-5.414l-.586.585v16l-8 8v-24l-.586-.585L4.829 10h54.343L36.586 32.586z"
  }));
};

var _default = SvgComponent;
exports.default = _default;