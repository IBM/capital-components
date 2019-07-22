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
    d: "M14 14v100h100V14H14zm96 96H18V82h92v28zm0-32H18V50h92v28zM96 26a6 6 0 1 1-.002 12.002A6 6 0 0 1 96 26z"
  }), _react.default.createElement("circle", {
    cx: 96,
    cy: 64,
    r: 6
  }), _react.default.createElement("circle", {
    cx: 96,
    cy: 96,
    r: 6
  }));
};

var _default = SvgComponent;
exports.default = _default;