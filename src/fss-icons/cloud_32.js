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
    d: "M26.446 12.604A8.44 8.44 0 0 0 18 5c-4.162 0-7.691 3.083-8.374 7.086A7.45 7.45 0 0 0 8.5 12C4.364 12 1 15.364 1 19.5S4.364 27 8.5 27h15c4.136 0 7.5-3.364 7.5-7.5a7.472 7.472 0 0 0-4.554-6.896zM23.5 25h-15C5.467 25 3 22.533 3 19.5S5.467 14 8.5 14c.575 0 1.146.092 1.699.271l1.277.416.032-1.344C11.592 9.846 14.504 7 18 7a6.458 6.458 0 0 1 6.491 6.338l.017.711.676.217A5.481 5.481 0 0 1 29 19.5c0 3.033-2.467 5.5-5.5 5.5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;