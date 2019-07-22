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
    cx: 10.5,
    cy: 8.5,
    r: 2
  }), _react.default.createElement("path", {
    d: "M5 3V2H2v1H0v11h16V3H5zm5.5 9C8.57 12 7 10.43 7 8.5S8.57 5 10.5 5 14 6.57 14 8.5 12.43 12 10.5 12z"
  }));
};

var _default = SvgComponent;
exports.default = _default;