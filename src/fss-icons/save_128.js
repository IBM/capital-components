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
    d: "M12 12v104h88l16-16V12H12zm100 86.343L98.343 112H88v-12H39.999v12H16V16h96v82.343z"
  }), _react.default.createElement("path", {
    d: "M64 88c13.254 0 24-10.746 24-24S77.254 40 64 40 39.999 50.746 39.999 64 50.746 88 64 88zm0-32c4.414 0 8 3.582 8 8s-3.586 8-8 8-8-3.582-8-8 3.586-8 8-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;