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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M16 3.391V.011h-3.38V1.24H7.396v6.453H3.402V6.464H.022v3.38h3.38V8.615h3.995v6.146h5.224v1.229H16v-3.38h-3.38v1.229H8.318V8.615h4.302v1.229H16v-3.38h-3.38v1.229H8.318V2.162h4.302v1.229H16zM13.542.933h1.536v1.536h-1.536V.933zm0 12.598h1.536v1.536h-1.536v-1.536zm0-6.146h1.536v1.536h-1.536V7.385z"
  }));
};

var _default = SvgComponent;
exports.default = _default;