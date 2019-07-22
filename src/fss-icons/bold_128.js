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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M92 64c8.506-4.992 16-13.34 16-23.395C108 25.039 96.672 12 80 12H20v104h60c16.672 0 28-13.039 28-28.605C108 77.34 100.506 68.992 92 64zm-32 44H44V68h16c11.922 0 20 8.82 20 20.207C80 99.598 71.922 108 60 108zm0-48H44V20h16c11.922 0 20 8.82 20 20.207C80 51.598 71.922 60 60 60z"
  }));
};

var _default = SvgComponent;
exports.default = _default;