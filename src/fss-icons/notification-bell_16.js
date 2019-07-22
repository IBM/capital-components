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
  }, props), _react.default.createElement("circle", {
    cx: 8,
    cy: 14,
    r: 2
  }), _react.default.createElement("path", {
    d: "M15 11s-1.2-4-2.3-6.6C11.6 1.8 10.6 0 8 0S4.4 1.8 3.3 4.4C2.2 7 1 11 1 11h14z"
  }));
};

var _default = SvgComponent;
exports.default = _default;