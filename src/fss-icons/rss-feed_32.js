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
    d: "M4 2v5c11.598 0 21 9.402 21 21h5C30 13.641 18.359 2 4 2z"
  }), _react.default.createElement("path", {
    d: "M4 12v5c6.076 0 11 4.924 11 11h5c0-8.837-7.163-16-16-16z"
  }), _react.default.createElement("circle", {
    cx: 5.5,
    cy: 26.5,
    r: 3.5
  }));
};

var _default = SvgComponent;
exports.default = _default;