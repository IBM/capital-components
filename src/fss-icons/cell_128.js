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
    d: "M3.912 15.885v96.141h120.177V15.885H3.912zm84.123 18.027v20.029H66.003V33.912h22.032zm30.045 46.067H94.044V59.95h24.035v20.029zM9.92 59.95h50.074v20.029H9.92V59.95zm50.074-26.038v20.029H9.92V33.912h50.074zM9.92 106.018v-20.03h50.074v20.029H9.92zm56.083 0v-20.03h22.032v20.029H66.003zm28.041 0v-20.03h24.035v20.029H94.044zm24.036-52.077H94.044V33.912h24.035v20.029z"
  }));
};

var _default = SvgComponent;
exports.default = _default;