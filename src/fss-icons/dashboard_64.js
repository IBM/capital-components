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
    d: "M24.93 43.07A9.927 9.927 0 0 1 22 36c0-5.514 4.486-10 10-10s10 4.486 10 10a9.927 9.927 0 0 1-2.93 7.07l2.828 2.829A13.904 13.904 0 0 0 46 36c0-7.72-6.28-14-14-14s-14 6.28-14 14c0 3.74 1.457 7.255 4.102 9.899l2.828-2.829z"
  }), _react.default.createElement("path", {
    d: "M30 50h4l-2-18z"
  }), _react.default.createElement("path", {
    d: "M2 8v48h60V8H2zm58 46H4V18h56v36z"
  }));
};

var _default = SvgComponent;
exports.default = _default;