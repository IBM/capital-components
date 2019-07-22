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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M20 10h-7V6.817A2.99 2.99 0 0 0 15 4c0-1.656-1.339-3-2.999-3A3.001 3.001 0 0 0 9 4c0 1.303.838 2.402 2 2.816v3.276a1.496 1.496 0 0 0-.908.908H6.817a2.989 2.989 0 0 0-2.816-2A3.001 3.001 0 0 0 1 12c0 1.656 1.344 3 3.001 3a2.989 2.989 0 0 0 2.816-2H10v7l3 3V13h10l-3-3zM4 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;