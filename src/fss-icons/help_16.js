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
    d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.117 2.883L9.64 4.36C9.139 4.133 8.586 4 8 4s-1.139.133-1.64.36L4.883 2.883C5.793 2.327 6.858 2 8 2s2.207.327 3.117.883zM6 8c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zM2.883 4.883L4.36 6.36C4.133 6.861 4 7.414 4 8s.133 1.139.36 1.64l-1.477 1.477C2.327 10.207 2 9.142 2 8s.327-2.207.883-3.117zm2 8.234L6.36 11.64c.501.227 1.054.36 1.64.36s1.139-.133 1.64-.36l1.477 1.477C10.207 13.673 9.142 14 8 14s-2.207-.327-3.117-.883zm8.234-2L11.64 9.64c.227-.501.36-1.054.36-1.64s-.133-1.139-.36-1.64l1.477-1.477C13.673 5.793 14 6.858 14 8s-.327 2.207-.883 3.117z"
  }));
};

var _default = SvgComponent;
exports.default = _default;