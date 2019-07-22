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
    d: "M51.862 30C50.875 22.11 44.157 16 36 16s-14.876 6.11-15.862 14H4v4h16.138c.986 7.89 7.705 14 15.862 14s14.875-6.11 15.862-14H124v-4H51.862zM36 36a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm56 12c-8.157 0-14.876 6.11-15.862 14H4v4h72.138c.986 7.89 7.705 14 15.862 14s14.875-6.11 15.862-14H124v-4h-16.138c-.987-7.89-7.705-14-15.862-14zm0 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM36 80c-8.157 0-14.876 6.11-15.862 14H4v4h16.138c.986 7.89 7.705 14 15.862 14s14.875-6.11 15.862-14H124v-4H51.862C50.875 86.11 44.157 80 36 80zm0 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;