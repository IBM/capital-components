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
    d: "M24 2C11.852 2 2 11.852 2 24c0 12.147 9.852 22 22 22s22-9.853 22-22c0-12.148-9.852-22-22-22zm0 42C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20zm18 4l6-6 14 14-6 6z"
  }), _react.default.createElement("circle", {
    cx: 42,
    cy: 42,
    r: 2
  }), _react.default.createElement("path", {
    d: "M26 12h-4v10H12v4h10v10h4V26h10v-4H26z"
  }));
};

var _default = SvgComponent;
exports.default = _default;