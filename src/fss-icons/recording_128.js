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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M64 92c15.461 0 28-12.537 28-28V32C92 16.537 79.461 4 64 4S36 16.537 36 32v32c0 15.463 12.539 28 28 28zM52 56H40v-4h12c2.211 0 4-1.791 4-4s-1.789-4-4-4H40v-4h12c2.211 0 4-1.791 4-4s-1.789-4-4-4H40C40 18.766 50.767 8 64 8s24 10.766 24 24H76c-2.211 0-4 1.791-4 4s1.789 4 4 4h12v4H76c-2.211 0-4 1.791-4 4s1.789 4 4 4h12v4H76c-2.211 0-4 1.791-4 4s1.789 4 4 4h12c0 13.233-10.767 24-24 24S40 77.233 40 64h12c2.211 0 4-1.791 4-4s-1.789-4-4-4z"
  }), _react.default.createElement("path", {
    d: "M102 64h-4c0 18.748-15.252 34-34 34S30 82.748 30 64h-4c0 20.282 15.973 36.903 36 37.947V120H48v4h32v-4H66v-18.053c20.027-1.044 36-17.665 36-37.947z"
  }));
};

var _default = SvgComponent;
exports.default = _default;