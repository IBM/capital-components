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
    d: "M15 11l-2 2V6.5a6.5 6.5 0 1 0-13 0V7h2v-.5C2 4.019 4.019 2 6.5 2S11 4.019 11 6.5V13l-2-2-1 1 4 4 4-3.979L15 11z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;