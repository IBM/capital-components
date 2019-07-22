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
    d: "M3 3v26h26V3H3zm2 2h22v18H5V5z"
  }), _react.default.createElement("path", {
    d: "M13 9v7.779A2.978 2.978 0 0 0 11 16c-1.655 0-3 1.344-3 3s1.345 3 3 3 3-1.344 3-3v-8.182l9-1.637v5.598A2.978 2.978 0 0 0 21 14c-1.655 0-3 1.344-3 3s1.345 3 3 3 3-1.344 3-3V6L13 8v1zm-2 12c-1.102 0-2-.897-2-2s.898-2 2-2 2 .897 2 2-.898 2-2 2zm10-2c-1.103 0-2-.897-2-2s.897-2 2-2 2 .898 2 2-.897 2-2 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;