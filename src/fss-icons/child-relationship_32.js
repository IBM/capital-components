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
    d: "M30.827 7.446V1.173h-6.273v2.281h-9.695V15.43H7.446v-2.281H1.173v6.273h6.273v-2.281h7.414v11.405h9.695v2.281h6.273v-6.273h-6.273v2.281H16.57V17.14h7.984v2.281h6.273v-6.273h-6.273v2.281H16.57V5.165h7.984v2.281h6.273zM5.735 17.711H2.884V14.86h2.851v2.851z"
  }));
};

var _default = SvgComponent;
exports.default = _default;