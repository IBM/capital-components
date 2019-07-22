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
    d: "M3.293 23.414L11.878 32l-8.585 8.586 2.828 2.828L17.536 32 6.121 20.586zM20.707 12h4v40h-4zm8 6h24v4h-24zm0 8h16v4h-16zm0 8h32v4h-32zm0 8h16v4h-16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;