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
    d: "M62 26l-22-2-8-22-8 22-22 2 18 14-6 22 18-14 18 14-6-22 18-14zM46.492 56.738L33.228 46.421 32 45.466l-1.228.955-13.264 10.317 4.421-16.211.351-1.287-1.052-.818L7.229 27.533l16.953-1.541 1.265-.115.434-1.193L32 7.852l6.121 16.831.434 1.193 1.265.115 16.953 1.541-14 10.889-1.053.819.351 1.287 4.421 16.211z"
  }));
};

var _default = SvgComponent;
exports.default = _default;