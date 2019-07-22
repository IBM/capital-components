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
    d: "M123.414 32L96.586 5.172 69.757 32l5.657 5.657 17.171-17.172v54.343c0 22.056-17.944 40-40 40s-40-17.944-40-40c0-10.683 4.161-20.728 11.715-28.285l-5.657-5.656C9.578 49.955 4.586 62.009 4.586 74.828c0 26.467 21.533 48 48 48s48-21.533 48-48V20.485l17.171 17.172L123.414 32z"
  }), _react.default.createElement("circle", {
    cx: 52.586,
    cy: 74.828,
    r: 12
  }));
};

var _default = SvgComponent;
exports.default = _default;