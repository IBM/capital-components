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
    d: "M48 18a13.944 13.944 0 0 0-9.789 4h-2.766c-.693-1.19-1.969-2-3.445-2-1.477 0-2.752.81-3.445 2h-2.766A13.944 13.944 0 0 0 16 18C8.266 18 2 24.271 2 32s6.266 14 14 14 14-6.271 14-14h4c0 7.729 6.266 14 14 14s14-6.271 14-14-6.266-14-14-14zM16 42c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm32 0c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"
  }));
};

var _default = SvgComponent;
exports.default = _default;