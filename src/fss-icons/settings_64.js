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
    d: "M60.732 11.752l-8.49 8.491A5.983 5.983 0 0 1 48 22a5.999 5.999 0 0 1-4.243-10.242l8.49-8.491A15.943 15.943 0 0 0 46 2c-8.837 0-16 7.163-16 16 0 1.828.322 3.577.887 5.213L4.05 50.05a7 7 0 0 0 .001 9.899C5.418 61.316 7.209 62 9 62s3.582-.684 4.949-2.05l26.836-26.837c1.637.565 3.387.887 5.215.887 8.837 0 16-7.163 16-16a15.93 15.93 0 0 0-1.268-6.248zM46 32c-1.533 0-3.068-.262-4.561-.777l-1.183-.409-.885.885-26.836 26.837C11.591 59.48 10.335 60 9 60s-2.591-.52-3.535-1.465a5.006 5.006 0 0 1-.001-7.071l26.837-26.837.885-.884-.408-1.182A13.96 13.96 0 0 1 32 18c0-7.72 6.28-14 14-14 .836 0 1.66.072 2.469.216l-6.126 6.127c-3.119 3.12-3.118 8.195.001 11.313C43.855 23.168 45.863 24 48 24s4.146-.832 5.656-2.343l6.127-6.127c.145.809.217 1.634.217 2.47 0 7.72-6.28 14-14 14z"
  }), _react.default.createElement("circle", {
    cx: 9,
    cy: 55,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;