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
    d: "M18.853 4.793c-6.617 0-12 5.383-12 12v6.586L2.56 19.086 1.146 20.5l6.707 6.707L14.56 20.5l-1.414-1.414-4.293 4.293v-6.586c0-5.514 4.486-10 10-10s10 4.486 10 10a9.934 9.934 0 0 1-2.929 7.071l1.414 1.414a11.92 11.92 0 0 0 3.515-8.485c0-6.617-5.383-12-12-12z"
  }));
};

var _default = SvgComponent;
exports.default = _default;