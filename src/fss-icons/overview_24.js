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
    d: "M17.867 7a4.96 4.96 0 0 0-2.973 1h-1.476c-.197-.598-.754-1-1.418-1s-1.221.402-1.419 1H9.106a4.96 4.96 0 0 0-2.973-1 5 5 0 1 0 4.899 6h1.935a5 5 0 1 0 4.9-6zM6.133 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm11.734 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
  }));
};

var _default = SvgComponent;
exports.default = _default;