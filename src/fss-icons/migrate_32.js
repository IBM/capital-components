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
    d: "M25 16.293l-1.414 1.414L26.879 21h-5.586V9l-8-8h-12v30h20v-8h5.586l-3.293 3.293L25 27.707 30.707 22 25 16.293zM19.293 29h-16V3h9v7h7v11h-7v2h7v6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;