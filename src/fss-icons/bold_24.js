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
    d: "M17.385 12c1.636-.96 3.077-2.565 3.077-4.499C20.462 4.508 18.283 2 15.077 2H3.538v20h11.538c3.206 0 5.385-2.508 5.385-5.501.001-1.934-1.441-3.539-3.076-4.499zm-5.5 8H8.462v-7h3.423c2.086 0 3.5 1.544 3.5 3.536 0 1.994-1.414 3.464-3.5 3.464zm0-9H8.462V4h3.423c2.086 0 3.5 1.544 3.5 3.536 0 1.994-1.414 3.464-3.5 3.464z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;