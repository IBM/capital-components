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
    d: "M88 16c-10.203 0-19.106 5.477-24 13.631C59.105 21.477 50.203 16 40 16c-15.465 0-28 12.535-28 28a28.891 28.891 0 0 0 8 20c11.26 11.758 44 48 44 48s32.74-36.242 44-48a28.891 28.891 0 0 0 8-20c0-15.465-12.535-28-28-28zm17.111 45.233C95.94 70.81 72.338 96.829 64 106.038c-8.338-9.209-31.94-35.228-41.111-44.804C18.446 56.595 16 50.475 16 44c0-13.233 10.767-24 24-24 8.487 0 16.177 4.37 20.57 11.69L64 37.403l3.43-5.714C71.823 24.37 79.513 20 88 20c13.233 0 24 10.767 24 24 0 6.475-2.446 12.595-6.889 17.233z"
  }));
};

var _default = SvgComponent;
exports.default = _default;