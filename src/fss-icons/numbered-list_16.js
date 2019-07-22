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
    d: "M2 0H0v1h1v2H0v1h3V3H2zM0 6v1h2v1h1V6H2zm0 9h2v1H0zm0-2h1v1h1v-1h1v-1H0zm5 0h11v2H5zm0-6h11v2H5zm0-6h11v2H5zM1 9l-1 .167V10h3V9H2V8H1zm1 5h1v1H2z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;