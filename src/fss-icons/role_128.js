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
    d: "M72 20V4H56v16H24v104h80V20H72zM64 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm36 112H28V24h28v12h16V24h28v96z"
  }), _react.default.createElement("path", {
    d: "M64 44c-11.047 0-20 8.953-20 20s8.953 20 20 20 20-8.953 20-20-8.953-20-20-20zm0 36c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zM48 92a8 8 0 0 0-8 8v8h48v-8a8 8 0 0 0-8-8H48z"
  }));
};

var _default = SvgComponent;
exports.default = _default;