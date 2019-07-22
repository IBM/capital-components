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
    d: "M18.363 3.578A9.067 9.067 0 0 0 12 1a9.067 9.067 0 0 0-6.363 2.578A8.671 8.671 0 0 0 3 9.8a9.475 9.475 0 0 0 2.637 6.591L12 23l6.363-6.609A9.475 9.475 0 0 0 21 9.8a8.671 8.671 0 0 0-2.637-6.222zM12 13c-1.661 0-3-1.34-3-3.001A2.995 2.995 0 0 1 12 7c1.661 0 3 1.34 3 2.999A2.996 2.996 0 0 1 12 13z"
  }));
};

var _default = SvgComponent;
exports.default = _default;