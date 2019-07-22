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
    d: "M16 3L1 29h30L16 3zm0 4.002L27.537 27H4.463L16 7.002z"
  }), _react.default.createElement("path", {
    d: "M15 14v2l.5 5h1l.5-5v-2z"
  }), _react.default.createElement("circle", {
    cx: 16,
    cy: 23,
    r: 1
  }));
};

var _default = SvgComponent;
exports.default = _default;