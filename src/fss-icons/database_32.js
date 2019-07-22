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
    d: "M3 3v26h26V3H3zm24 24H5v-6h22v6zm0-8H5v-6h22v6zM24 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
  }), _react.default.createElement("circle", {
    cx: 24,
    cy: 16,
    r: 1
  }), _react.default.createElement("circle", {
    cx: 24,
    cy: 24,
    r: 1
  }));
};

var _default = SvgComponent;
exports.default = _default;