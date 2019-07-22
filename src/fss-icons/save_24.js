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
  }, props), _react.default.createElement("g", {
    fill: "#323232"
  }, _react.default.createElement("path", {
    d: "M1 1v22h6v-2h10v2h2l4-4V1H1zm11 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
  }), _react.default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2
  })));
};

var _default = SvgComponent;
exports.default = _default;