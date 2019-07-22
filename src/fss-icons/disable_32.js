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
    d: "M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zM4 16a12 12 0 0 1 19.74-9.15L6.85 23.74A11.94 11.94 0 0 1 4 16zm12 12a11.94 11.94 0 0 1-7.74-2.85l16.9-16.9A12 12 0 0 1 16 28z"
  }));
};

var _default = SvgComponent;
exports.default = _default;