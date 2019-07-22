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
    d: "M48.969 9.03C44.627 4.687 38.627 2 32 2S19.373 4.687 15.031 9.03A23.922 23.922 0 0 0 8 26c0 7.017 2.687 13.37 7.031 17.968L32 62l16.969-18.032C53.312 39.37 56 33.017 56 26a23.926 23.926 0 0 0-7.031-16.97zm-1.457 33.567L32 59.082 16.485 42.594C12.303 38.168 10 32.274 10 26c0-5.875 2.289-11.4 6.446-15.556A21.849 21.849 0 0 1 32 4c5.876 0 11.4 2.289 15.555 6.445A21.853 21.853 0 0 1 54 26c0 6.274-2.303 12.168-6.488 16.597z"
  }), _react.default.createElement("circle", {
    cx: 32,
    cy: 26,
    r: 8
  }));
};

var _default = SvgComponent;
exports.default = _default;