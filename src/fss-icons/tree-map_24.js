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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M14.197 6.142H3.213v5.126h10.984V6.142zm-1.099 4.027H4.311V7.24h8.787v2.929zm7.689 1.099h-5.492V6.142h5.492v5.126zm-10.984 6.59h10.984v-5.492H9.803v5.492zm1.099-4.393h8.787v3.295h-8.787v-3.295zm-2.197 4.393H3.213v-5.492h5.492v5.492zM1.016 3.945v16.11h21.969V3.945H1.016zm20.87 15.012H2.114V5.043h19.772v13.914z"
  }));
};

var _default = SvgComponent;
exports.default = _default;