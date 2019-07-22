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
    d: "M2 12v40h60V12H2zm58 38H4V14h56v36z"
  }), _react.default.createElement("path", {
    d: "M56 18H34v12h22V18zm-2 10H36v-8h18v8zM8 18h22v12H8zm22 16H8v12h22V34zm-2 10H10v-8h18v8zm28-10H34v12h22V34zm-2 10H36v-8h18v8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;