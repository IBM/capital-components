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
  }, props), _react.default.createElement("circle", {
    cx: 12,
    cy: 20,
    r: 3
  }), _react.default.createElement("path", {
    d: "M22 16s-1.8-5.5-3.3-9c-1.6-3.5-3-6-6.7-6S6.9 3.5 5.3 7C3.8 10.5 2 16 2 16h20z"
  }));
};

var _default = SvgComponent;
exports.default = _default;