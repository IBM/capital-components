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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M9.6 3.733h-8v3.733h8V3.733zm-.8 2.934H2.4V4.533h6.4v2.134zm5.6.8h-4V3.733h4v3.734zm-8 4.8h8v-4h-8v4zm.8-3.2h6.4v2.4H7.2v-2.4zm-1.6 3.2h-4v-4h4v4zM0 2.133v11.733h16V2.133H0zm15.2 10.934H.8V2.933h14.4v10.134z"
  }));
};

var _default = SvgComponent;
exports.default = _default;