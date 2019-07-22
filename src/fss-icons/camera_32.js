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
    d: "M11 7V5H5v2H1v20h30V7H11zm18 18H3V9h26v16z"
  }), _react.default.createElement("path", {
    d: "M21 23.5c3.592 0 6.5-2.908 6.5-6.5s-2.908-6.5-6.5-6.5a6.5 6.5 0 0 0 0 13zm0-12c3.033 0 5.5 2.467 5.5 5.5s-2.467 5.5-5.5 5.5-5.5-2.467-5.5-5.5 2.467-5.5 5.5-5.5z"
  }), _react.default.createElement("path", {
    d: "M21 20.5c1.934 0 3.5-1.566 3.5-3.5s-1.566-3.5-3.5-3.5a3.5 3.5 0 1 0 0 7zm0-4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;