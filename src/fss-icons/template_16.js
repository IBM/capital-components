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
    d: "M9 0h7v16H9zM0 9h7v7H0zm0-9v7h7V0H0zm5 1L3.5 2.5 2 1h3zm1 4L4.5 3.5 6 2v3zM2 6l1.5-1.5L5 6H2zM1 2l1.5 1.5L1 5V2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;