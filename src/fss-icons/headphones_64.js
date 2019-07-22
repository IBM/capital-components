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
    d: "M54 31.5v8h4v-8h-2v-3c0-13.233-10.767-24-24-24S8 15.267 8 28.5v3H6v8h4v-11c0-12.131 9.869-22 22-22s22 9.869 22 22v3zm-52 10h8v18H2zm52 0h8v18h-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;