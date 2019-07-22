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
    width: 16,
    height: 16
  }, props), _react.default.createElement("path", {
    d: "M14.5 12V7h-6V4H10V0H6v4h1.5v3h-6v5H0v4h4v-4H2.5V8h5v4H6v4h4v-4H8.5V8h5v4H12v4h4v-4h-1.5zM7 3V1h2v2H7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;