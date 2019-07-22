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
    d: "M48 38c-5.186 0-9.447 3.946-9.949 9H25.949a9.95 9.95 0 0 0-2.207-5.328l17.93-17.931A9.957 9.957 0 0 0 48 26c5.523 0 10-4.477 10-10S53.523 6 48 6c-5.186 0-9.447 3.946-9.949 9H25.949C25.447 9.946 21.185 6 16 6 10.477 6 6 10.477 6 16s4.477 10 10 10c5.185 0 9.447-3.946 9.949-9h12.102a9.95 9.95 0 0 0 2.207 5.328l-17.93 17.931A9.96 9.96 0 0 0 16 38c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.185 0 9.447-3.946 9.949-9h12.102c.502 5.054 4.764 9 9.949 9 5.523 0 10-4.477 10-10s-4.477-10-10-10zM16 24a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm24-8a8 8 0 1 1 16 0 8 8 0 0 1-16 0zM16 56a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;