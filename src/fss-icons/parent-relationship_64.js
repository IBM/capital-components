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
    d: "M62.149 14.685V1.988H49.451v4.617H29.828v24.24H14.822v-4.617H2.125v12.697h12.697v-4.617h15.006v23.086h19.623v4.617h12.697V49.315H49.451v4.617h-16.16V34.309h16.16v4.617h12.697V26.228H49.451v4.617h-16.16V10.068h16.16v4.617h12.698zm-9.235-9.234h5.772v5.772h-5.772V5.451zm0 47.326h5.772v5.772h-5.772v-5.772zm0-23.086h5.772v5.772h-5.772v-5.772z"
  }));
};

var _default = SvgComponent;
exports.default = _default;