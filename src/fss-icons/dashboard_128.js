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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M49.859 86.14A19.863 19.863 0 0 1 44 72c0-11.028 8.972-20 20-20s20 8.972 20 20a19.863 19.863 0 0 1-5.859 14.14l5.656 5.658C89.087 86.51 92 79.479 92 72c0-15.439-12.561-28-28-28-15.44 0-28 12.561-28 28 0 7.479 2.913 14.51 8.203 19.798l5.656-5.658z"
  }), _react.default.createElement("path", {
    d: "M60 100h8l-4-36z"
  }), _react.default.createElement("path", {
    d: "M4 16v96h120V16H4zm116 92H8V36h112v72z"
  }));
};

var _default = SvgComponent;
exports.default = _default;