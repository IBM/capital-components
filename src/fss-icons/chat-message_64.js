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
    d: "M48.969 9.03C44.627 4.687 38.627 2 32 2S19.373 4.687 15.031 9.03C10.687 13.373 8 19.373 8 26s2.687 12.627 7.031 16.97A23.921 23.921 0 0 0 32 50v12l16.969-18.032C53.312 39.37 56 33.017 56 26a23.926 23.926 0 0 0-7.031-16.97zm-1.457 33.567L34 56.956V48h-2a21.85 21.85 0 0 1-15.555-6.445C12.289 37.4 10 31.875 10 26s2.289-11.4 6.445-15.556C20.6 6.289 26.123 4 32 4s11.4 2.289 15.555 6.445A21.853 21.853 0 0 1 54 26c0 6.274-2.303 12.168-6.488 16.597z"
  }), _react.default.createElement("circle", {
    cx: 32,
    cy: 26,
    r: 3
  }), _react.default.createElement("circle", {
    cx: 42,
    cy: 26,
    r: 3
  }), _react.default.createElement("circle", {
    cx: 22,
    cy: 26,
    r: 3
  }));
};

var _default = SvgComponent;
exports.default = _default;