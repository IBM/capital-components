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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M32 2c-12.152 0-22 9.849-22 22s9.848 22 22 22 22-9.849 22-22S44.152 2 32 2zm0 42c-11.028 0-20-8.972-20-20S20.972 4 32 4s20 8.972 20 20-8.972 20-20 20zm-8 4h16v8H24zm8 14a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4z"
  }), _react.default.createElement("path", {
    d: "M32 38l8-12H24l8 12zm0-3.605L27.737 28h8.525L32 34.395z"
  }));
};

var _default = SvgComponent;
exports.default = _default;