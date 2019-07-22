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
    d: "M64 24c-22.088 0-40 17.912-40 40 0 22.092 17.912 40 40 40 22.092 0 40-17.908 40-40 0-22.088-17.908-40-40-40zm8 48L40 88l16-32 32-16-16 32z"
  }), _react.default.createElement("path", {
    d: "M64 8C33.072 8 8 33.072 8 64s25.072 56 56 56 56-25.072 56-56S94.928 8 64 8zm0 108c-28.673 0-52-23.327-52-52s23.327-52 52-52 52 23.327 52 52-23.327 52-52 52z"
  }), _react.default.createElement("circle", {
    cx: 64,
    cy: 64,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;