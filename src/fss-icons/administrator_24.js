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
    d: "M18 18H5.867C4.247 18 3 19.38 3 21v2h18v-2c0-1.62-1.38-3-3-3zM12 1a8 8 0 0 0-8 8c0 4.419 3.581 8 8 8s8-3.581 8-8a8 8 0 0 0-8-8zm-1 12L7.5 9.5 9 8l2 2 4-4 1.5 1.5L11 13z",
    fill: "#231f20"
  }));
};

var _default = SvgComponent;
exports.default = _default;