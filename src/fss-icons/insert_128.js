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
    d: "M117.758 90.343l-17.172 17.172V53.172c0-26.467-21.532-48-48-48s-48 21.533-48 48h8c0-22.056 17.944-40 40-40s40 17.944 40 40v54.343L75.414 90.343 69.758 96l26.828 26.828L123.414 96l-5.656-5.657z"
  }));
};

var _default = SvgComponent;
exports.default = _default;