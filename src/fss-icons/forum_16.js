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
    d: "M14.096 1.904A6.48 6.48 0 0 0 9.5 0a6.48 6.48 0 0 0-4.596 1.904 6.464 6.464 0 0 0-1.886 4.227 3.957 3.957 0 0 0-1.869 1.041c-1.562 1.562-1.502 4.036 0 5.657C1.931 13.672 3.977 16 3.977 16v-2c1.023 0 2.047-.39 2.828-1.171.1-.1.175-.214.262-.321.624.25 1.273.417 1.933.468V16l5.096-4.904a6.498 6.498 0 0 0 0-9.192zm-1.414 7.778A4.47 4.47 0 0 1 9.5 11a4.49 4.49 0 0 1-1.59-.3 3.989 3.989 0 0 0-1.104-3.528A3.955 3.955 0 0 0 5.033 6.16 4.457 4.457 0 0 1 9.5 2a4.47 4.47 0 0 1 3.182 1.318A4.47 4.47 0 0 1 14 6.5a4.47 4.47 0 0 1-1.318 3.182z"
  }));
};

var _default = SvgComponent;
exports.default = _default;