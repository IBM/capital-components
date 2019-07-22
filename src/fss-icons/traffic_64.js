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
  }, props), _react.default.createElement("circle", {
    cx: 32,
    cy: 16,
    r: 6
  }), _react.default.createElement("path", {
    d: "M32 38c3.312 0 6-2.687 6-6s-2.688-6-6-6a6 6 0 0 0 0 12zm0-10c2.205 0 4 1.795 4 4s-1.795 4-4 4-4-1.795-4-4 1.795-4 4-4zm0 26c3.312 0 6-2.687 6-6s-2.688-6-6-6a6 6 0 0 0 0 12zm0-10c2.205 0 4 1.795 4 4s-1.795 4-4 4-4-1.795-4-4 1.795-4 4-4z"
  }), _react.default.createElement("path", {
    d: "M54 26h-8v-4l8-12h-8V2H18v8h-8l8 12v4h-8l8 12v4h-8l8 12v8h28v-8l8-12h-8v-4l8-12zM44 60H20V4h24v56z"
  }));
};

var _default = SvgComponent;
exports.default = _default;