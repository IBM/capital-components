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
    d: "M32 46c7.73 0 14-6.269 14-14V16c0-7.731-6.27-14-14-14-7.731 0-14 6.269-14 14v16c0 7.731 6.269 14 14 14zm-6-18h-6v-2h6a2 2 0 0 0 0-4h-6v-2h6a2 2 0 0 0 0-4h-6c0-6.617 5.383-12 12-12s12 5.383 12 12h-6a2 2 0 1 0 0 4h6v2h-6a2 2 0 1 0 0 4h6v2h-6a2 2 0 1 0 0 4h6c0 6.617-5.383 12-12 12s-12-5.383-12-12h6a2 2 0 0 0 0-4z"
  }), _react.default.createElement("path", {
    d: "M51 32h-2c0 9.374-7.626 17-17 17s-17-7.626-17-17h-2c0 10.139 7.989 18.424 18 18.949V60h-7v2h16v-2h-7v-9.051c10.011-.525 18-8.81 18-18.949z"
  }));
};

var _default = SvgComponent;
exports.default = _default;