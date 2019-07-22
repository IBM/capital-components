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
    d: "M20 10h-3V6l3-3h-3V1H7v2H4l3 3v4H4l3 3v4H4l3 3v3h10v-3l3-3h-3v-4l3-3zm-8 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 21zm0-7a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14zm0-7a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;