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
    d: "M124.024 29.371V3.976H98.629v9.234H59.383v48.481H29.371v-9.234H3.976v25.395h25.395v-9.234h30.012v46.172h39.246v9.234h25.395V98.629H98.629v9.234h-32.32V68.617H98.63v9.234h25.395V52.457H98.629v9.234h-32.32V20.136H98.63v9.234h25.394zm-18.469-18.469h11.543v11.543h-11.543V10.902zm0 94.653h11.543v11.543h-11.543v-11.543zm0-46.172h11.543v11.543h-11.543V59.383z"
  }));
};

var _default = SvgComponent;
exports.default = _default;