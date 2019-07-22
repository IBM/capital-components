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
    d: "M3 2.5H1v1h1v3H1v1h3v-1H3zm0 8h1v1H3zm-1 1h1v1H2zm-1 2.167v.833h3v-1H2v-1H1zM1 9.5h2v1H1zm2 8h1v1H3zm-1 1h1v1H2zm1 1h1v1H3zm-2 1h2v1H1zm0-4h2v1H1zm7 1h15v2H8zm0-7h15v2H8zm0-7h15v2H8z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;