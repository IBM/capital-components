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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M8 0a8.001 8.001 0 1 0 .002 16.002A8.001 8.001 0 0 0 8 0zm1.5 9.5L3 13l3.5-6.5L13 3 9.5 9.5z"
  }), _react.default.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 1
  }));
};

var _default = SvgComponent;
exports.default = _default;