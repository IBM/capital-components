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
    d: "M8 23c2.762 0 5-2.238 5-5s-2.238-5-5-5-5 2.238-5 5 2.238 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm11 3c0 2.762 2.238 5 5 5s5-2.238 5-5-2.238-5-5-5-5 2.238-5 5zm5-3c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-3-8c0-2.762-2.238-5-5-5s-5 2.238-5 5 2.238 5 5 5 5-2.238 5-5zm-5 3c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4 15H4a2 2 0 0 0-2 2v3h12v-3a2 2 0 0 0-2-2zm16 0h-8a2 2 0 0 0-2 2v3h12v-3a2 2 0 0 0-2-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;