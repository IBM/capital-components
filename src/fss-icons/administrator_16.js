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
    d: "M13 13H3c-1.178 0-2 .822-2 2v1h14v-1c0-1.178-.822-2-2-2zM8 0a6 6 0 1 0 0 12A6 6 0 0 0 8 0zm-.75 8.75L5 6.5l1-1 1.25 1.25 3-3 1 1-4 4z",
    fill: "#231f20"
  }));
};

var _default = SvgComponent;
exports.default = _default;