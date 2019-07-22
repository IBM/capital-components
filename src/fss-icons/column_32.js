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
    d: "M1.173 4.138v23.723h29.654V4.138H1.173zm28.171 15.816h-5.931v-4.942h5.931v4.942zM2.656 15.012h12.356v4.942H2.656v-4.942zm12.356-6.426v4.942H2.656V8.586h12.356zM2.656 26.379v-4.942h12.356v4.942H2.656zm20.758 0v-4.942h5.931v4.942h-5.931zm5.93-12.85h-5.931V8.586h5.931v4.943z"
  }));
};

var _default = SvgComponent;
exports.default = _default;