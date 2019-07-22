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
    d: "M16 46c5.523 0 10-4.477 10-10s-4.477-10-10-10S6 30.477 6 36s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm22 8c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10zm10-8c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-6-14c0-5.523-4.477-10-10-10S22 8.477 22 14s4.477 10 10 10 10-4.477 10-10zm-10 8c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-8 28H8a4 4 0 0 0-4 4v6h24v-6a4 4 0 0 0-4-4zm32 0H40a4 4 0 0 0-4 4v6h24v-6a4 4 0 0 0-4-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;