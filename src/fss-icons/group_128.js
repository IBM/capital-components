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
    d: "M32 92c11.047 0 20-8.953 20-20s-8.953-20-20-20-20 8.953-20 20 8.953 20 20 20zm0-36c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16zm44 16c0 11.047 8.953 20 20 20s20-8.953 20-20-8.953-20-20-20-20 8.953-20 20zm20-16c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16zM84 28c0-11.047-8.953-20-20-20s-20 8.953-20 20 8.953 20 20 20 20-8.953 20-20zM64 44c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zm-16 56H16a8 8 0 0 0-8 8v12h48v-12a8 8 0 0 0-8-8zm64 0H80a8 8 0 0 0-8 8v12h48v-12a8 8 0 0 0-8-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;