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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M5 1v30h22V1H5zm20 28H7V3h18v26z"
  }), _react.default.createElement("path", {
    d: "M16 27a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-9a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 18z"
  }), _react.default.createElement("circle", {
    cx: 16,
    cy: 8,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;