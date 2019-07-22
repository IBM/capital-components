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
    d: "M15.989 3.388V.005h-3.382v1.23H7.38v6.457H3.382v-1.23H0v3.382h3.382v-1.23H7.38v6.15h5.227v1.23h3.382v-3.382h-3.382v1.23H8.302V8.615h4.305v1.23h3.382V6.463h-3.382v1.23H8.302V2.158h4.305v1.23h3.382zM2.46 8.922H.922V7.385H2.46v1.537z"
  }));
};

var _default = SvgComponent;
exports.default = _default;