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
    d: "M36 14.338V2h-8v12.338C16.648 16.243 8 26.107 8 38c0 13.256 10.742 24 24 24s24-10.744 24-24c0-11.893-8.648-21.757-20-23.662zM32 60c-12.131 0-22-9.869-22-22 0-10.765 7.773-19.742 18-21.629V38h8V16.371C46.227 18.258 54 27.235 54 38c0 12.131-9.869 22-22 22z"
  }));
};

var _default = SvgComponent;
exports.default = _default;