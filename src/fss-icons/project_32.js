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
    d: "M25 1l-7.646 7.646-.707.707-1.293 1.293-.707.707-1.293 1.293-.707.707-1.293 1.293-.707.707-1.293 1.293-.707.707-1.293 1.293-.707.707L4 22l-3 3 6 6 3-3L31 7l-6-6zM8.586 26.586l-3.172-3.172 2.646-2.647 1.586 1.586.707-.707-1.585-1.586 1.293-1.293 1.586 1.586.707-.707-1.586-1.586 1.293-1.293 1.586 1.586.707-.707-1.586-1.586 1.293-1.293 1.586 1.586.707-.707-1.586-1.586 1.293-1.293 1.586 1.586.707-.707-1.586-1.586 1.293-1.293 1.586 1.586.707-.707-1.586-1.586L25 3.829 28.172 7 8.586 26.586z"
  }), _react.default.createElement("circle", {
    cx: 25,
    cy: 7,
    r: 1
  }));
};

var _default = SvgComponent;
exports.default = _default;