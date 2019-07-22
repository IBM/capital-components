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
    d: "M1.934 7.947v48.105h60.131V7.947H1.934zm57.125 32.071H47.033V29.996h12.026v10.022zM4.941 29.996h25.055v10.022H4.941V29.996zm25.055-13.029v10.022H4.941V16.967h25.055zM4.941 53.046V43.024h25.055v10.022H4.941zm42.092 0V43.024h12.026v10.022H47.033zm12.026-26.057H47.033V16.967h12.026v10.022z"
  }));
};

var _default = SvgComponent;
exports.default = _default;