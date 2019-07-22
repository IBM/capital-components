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
  }, props), _react.default.createElement("circle", {
    cx: 12,
    cy: 8.001,
    r: 7
  }), _react.default.createElement("path", {
    d: "M18 17H6c-1.616 0-3 1.382-3 3v3h18v-3c0-1.618-1.383-3-3-3z"
  }));
};

var _default = SvgComponent;
exports.default = _default;