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
    d: "M36 2L8 30l-6 6 26 26 6-6 28-28V2H36zm24 25.172L32.586 54.586 9.414 31.414 36.829 4H60v23.172z"
  }), _react.default.createElement("circle", {
    cx: 48,
    cy: 16,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;