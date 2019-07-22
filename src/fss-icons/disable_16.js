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
    d: "M8 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8zM2 8a6 6 0 0 1 9.47-4.89l-8.36 8.36A6 6 0 0 1 2 8zm6 6a6 6 0 0 1-3.47-1.11l8.36-8.36A6 6 0 0 1 8 14z"
  }));
};

var _default = SvgComponent;
exports.default = _default;