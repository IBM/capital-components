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
    d: "M105.809 50.421C104.019 33.326 89.568 20 72 20c-16.856 0-30.811 12.28-33.496 28.374C37.031 48.151 35.535 48 34 48 17.432 48 4 61.432 4 78s13.432 30 30 30h60c16.568 0 30-13.432 30-30 0-12.374-7.496-22.993-18.191-27.579zM94 102H34c-13.233 0-24-10.767-24-24s10.767-24 24-24c1.077 0 2.224.098 3.607.307l5.842.883.973-5.828A27.875 27.875 0 0 1 72 26c14.378 0 26.347 10.768 27.841 25.045l.367 3.503 3.236 1.388A23.984 23.984 0 0 1 118 78c0 13.233-10.767 24-24 24z"
  }));
};

var _default = SvgComponent;
exports.default = _default;