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
    d: "M3 3v26h22l4-4V3H3zm24 21.171L24.172 27H22v-2H10v2H5V5h22v19.171z"
  }), _react.default.createElement("path", {
    d: "M16 22a6 6 0 1 0-.002-12.002A6 6 0 0 0 16 22zm0-8a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 14z"
  }));
};

var _default = SvgComponent;
exports.default = _default;