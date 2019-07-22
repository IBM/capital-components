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
    d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 3a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 7.5 3zM9 12h1v1H6v-1h1V8H6V7h3v5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;