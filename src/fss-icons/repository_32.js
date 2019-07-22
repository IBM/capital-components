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
    d: "M29 10V8h-2V6H5v2H3v2H1v16h30V10h-2zM6 7h20v1H6V7zm23 17H3V12h26v12z"
  }), _react.default.createElement("path", {
    d: "M19 19h1v-2h-1v1h-6v-1h-1v2h1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;