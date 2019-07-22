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
    d: "M67.172 115.414c-22.056 0-40-17.944-40-40s17.944-40 40-40h26.343L76.343 52.586 82 58.243l26.828-26.829L82 4.586l-5.657 5.657 17.172 17.171H67.172c-26.467 0-48 21.533-48 48s21.533 48 48 48c12.82 0 24.873-4.993 33.941-14.058l-5.656-5.657c-7.557 7.555-17.602 11.715-28.285 11.715z"
  }));
};

var _default = SvgComponent;
exports.default = _default;