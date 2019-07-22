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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M52.904 25.211C52.01 16.663 44.784 10 36 10c-8.428 0-15.405 6.141-16.748 14.188A14.917 14.917 0 0 0 17 24C8.716 24 2 30.716 2 39s6.716 15 15 15h30c8.284 0 15-6.716 15-15 0-6.188-3.748-11.496-9.096-13.789zM47 50H17c-6.065 0-11-4.935-11-11s4.935-11 11-11c.487 0 1.013.045 1.654.143l3.895.588.648-3.885A12.94 12.94 0 0 1 36 14a12.959 12.959 0 0 1 12.926 11.627l.245 2.334 2.158.926A10.994 10.994 0 0 1 58 39c0 6.065-4.935 11-11 11z"
  }));
};

var _default = SvgComponent;
exports.default = _default;