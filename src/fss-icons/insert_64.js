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
    d: "M58.879 45.172l-8.586 8.585V26.586c0-13.234-10.767-24-24-24s-24 10.766-24 24h4c0-11.028 8.972-20 20-20s20 8.972 20 20v27.171l-8.586-8.585L34.879 48l13.414 13.414L61.707 48l-2.828-2.828z"
  }));
};

var _default = SvgComponent;
exports.default = _default;