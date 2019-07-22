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
    d: "M16 5V1H3v18h5v4h13V5h-5zm3 16h-9V7h9v14z",
    fill: "#323232"
  }), _react.default.createElement("path", {
    fill: "#323232",
    d: "M11 10h7v2h-7zm0 4h5v2h-5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;