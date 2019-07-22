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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M2 2v20h20V2H2zm12 2v4h-4V4h4zm0 6v4h-4v-4h4zM4 4h4v4H4V4zm0 6h4v4H4v-4zm0 10v-4h4v4H4zm6 0v-4h4v4h-4zm10 0h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;