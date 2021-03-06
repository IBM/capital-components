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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M20.971 5.649l-.036-.048a11.058 11.058 0 0 0-2.536-2.536c-.016-.012-.032-.025-.049-.036A10.934 10.934 0 0 0 12 1C5.925 1 1 5.924 1 12c0 2.368.755 4.556 2.029 6.351l.037.049a11.03 11.03 0 0 0 2.535 2.535l.049.037A10.934 10.934 0 0 0 12 23c6.075 0 11-4.925 11-11a10.94 10.94 0 0 0-2.029-6.351zM18.5 7.5c0 2.779-1.044 5.312-2.749 7.251L13 12l5.452-5.452c.03.314.048.631.048.952zm-13 9c0-2.779 1.044-5.312 2.749-7.251L11 12l-5.452 5.452A9.996 9.996 0 0 1 5.5 16.5zM12 11L9.249 8.249A10.946 10.946 0 0 1 16.5 5.5c.321 0 .638.018.952.048L12 11zm0 2l2.751 2.751A10.946 10.946 0 0 1 7.5 18.5c-.321 0-.638-.018-.952-.048L12 13zm5-8.969c-.167-.007-.331-.031-.5-.031-3.197 0-6.105 1.21-8.315 3.185L5.868 4.868C7.519 3.445 9.655 2.571 12 2.571c1.84 0 3.547.546 5 1.46zM4.868 5.868l2.317 2.317A12.435 12.435 0 0 0 4 16.5c0 .17.024.334.031.502A9.354 9.354 0 0 1 2.571 12c0-2.345.874-4.481 2.297-6.132zM7 19.969c.167.007.331.031.5.031 3.197 0 6.105-1.21 8.315-3.185l2.317 2.317c-1.651 1.423-3.786 2.297-6.132 2.297a9.356 9.356 0 0 1-5-1.46zm12.132-1.837l-2.317-2.317A12.435 12.435 0 0 0 20 7.5c0-.17-.024-.334-.031-.502A9.352 9.352 0 0 1 21.429 12c0 2.345-.874 4.481-2.297 6.132z"
  }));
};

var _default = SvgComponent;
exports.default = _default;