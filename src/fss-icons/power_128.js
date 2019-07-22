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
    d: "M72 28.676V4H56v24.676C33.296 32.485 16 52.215 16 76c0 26.512 21.484 48 48 48s48-21.488 48-48c0-23.785-17.296-43.515-40-47.324zM64 120c-24.262 0-44-19.738-44-44 0-21.529 15.546-39.483 36-43.258V76h16V32.742C92.454 36.517 108 54.471 108 76c0 24.262-19.738 44-44 44z"
  }));
};

var _default = SvgComponent;
exports.default = _default;