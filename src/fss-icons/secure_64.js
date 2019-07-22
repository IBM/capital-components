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
    d: "M29 43.171l-4.586-4.585-2.828 2.828L29 48.829l13.414-13.415-2.828-2.828z"
  }), _react.default.createElement("path", {
    d: "M48 24.91V18c0-8.837-7.163-16-16-16S16 9.163 16 18v6.911c-3.717 3.94-6 9.247-6 15.089 0 12.147 9.853 22 22 22 12.151 0 22-9.853 22-22 0-5.843-2.283-11.15-6-15.09zM20 18c0-6.617 5.383-12 12-12s12 5.383 12 12v3.565A21.885 21.885 0 0 0 32 18a21.889 21.889 0 0 0-12 3.566V18zm12 42c-11.045 0-20-8.955-20-20s8.955-20 20-20 20 8.955 20 20-8.955 20-20 20z"
  }));
};

var _default = SvgComponent;
exports.default = _default;