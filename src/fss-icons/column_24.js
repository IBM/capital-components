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
    d: "M1.016 3.213v17.575h21.969V3.213H1.016zm20.87 11.716h-4.394v-3.661h4.394v3.661zM2.114 11.268h9.154v3.661H2.114v-3.661zm9.154-4.76v3.661H2.114V6.508h9.154zM2.114 19.689v-3.661h9.154v3.661H2.114zm15.378 0v-3.661h4.394v3.661h-4.394zm4.394-9.52h-4.394V6.508h4.394v3.661z"
  }));
};

var _default = SvgComponent;
exports.default = _default;