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
    d: "M61.976 14.682v-12.7h-12.7V6.6H29.65v24.245H14.641v-4.618h-12.7v12.7h12.7v-4.618H29.65v23.09h19.627v4.618h12.7v-12.7h-12.7v4.618H33.113V34.309h16.163v4.618h12.7v-12.7h-12.7v4.618H33.113V10.064h16.163v4.618h12.7zM11.177 35.464H5.405v-5.773h5.773v5.773z"
  }));
};

var _default = SvgComponent;
exports.default = _default;