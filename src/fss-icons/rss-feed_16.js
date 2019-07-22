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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M.5.5v3c6.617 0 12 5.383 12 12h3c0-8.284-6.716-15-15-15z"
  }), _react.default.createElement("path", {
    d: "M.5 6.5v3c3.474 0 6 2.526 6 6h3a9 9 0 0 0-9-9z"
  }));
};

var _default = SvgComponent;
exports.default = _default;