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
    d: "M60 36h8v56h-8z"
  }), _react.default.createElement("path", {
    d: "M64 8C33.074 8 8 33.074 8 64s25.074 56 56 56 56-25.074 56-56S94.926 8 64 8zm0 108c-28.673 0-52-23.327-52-52s23.327-52 52-52 52 23.327 52 52-23.327 52-52 52z"
  }));
};

var _default = SvgComponent;
exports.default = _default;