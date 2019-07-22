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
    d: "M1 4.17v23.571h29.464V4.17H1zm20.625 4.42v4.91h-5.402V8.59h5.402zm7.366 11.294h-5.893v-4.911h5.893v4.911zm-26.518-4.91H14.75v4.911H2.473v-4.911zM14.75 8.59v4.91H2.473V8.59H14.75zM2.473 26.268v-4.911H14.75v4.911H2.473zm13.75 0v-4.911h5.402v4.911h-5.402zm6.875 0v-4.911h5.893v4.911h-5.893zM28.991 13.5h-5.893V8.59h5.893v4.91z"
  }));
};

var _default = SvgComponent;
exports.default = _default;