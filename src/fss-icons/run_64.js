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
    d: "M22 22c-5.523 0-10 4.478-10 10s4.477 10 10 10c5.522 0 10-4.478 10-10s-4.478-10-10-10zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
  }), _react.default.createElement("path", {
    d: "M60.242 13.758A5.99 5.99 0 0 0 56 12H22C10.953 12 2 20.953 2 32s8.953 20 20 20a19.938 19.938 0 0 0 14.152-5.868c6.022-5.998 24.09-23.89 24.09-23.89C61.329 21.158 62 19.658 62 18s-.671-3.158-1.758-4.242zM22 50c-9.925 0-18-8.075-18-18s8.075-18 18-18 18 8.075 18 18-8.075 18-18 18zm18.843-11.347A19.925 19.925 0 0 0 42 32c0-7.934-4.63-14.767-11.325-18h20.861A5.972 5.972 0 0 0 50 18a5.994 5.994 0 0 0 5.644 5.982c-3.665 3.63-9.813 9.721-14.801 14.671zM56 22c-2.208 0-4-1.792-4-4s1.792-4 4-4c2.207 0 4 1.792 4 4s-1.793 4-4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;