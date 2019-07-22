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
    d: "M13 5a1.415 1.415 0 0 1-2-2L13.507.493A4.446 4.446 0 0 0 11.5 0 4.5 4.5 0 0 0 7 4.5c0 .451.087.879.21 1.29L.62 12.379a2.123 2.123 0 0 0 3.004 3l6.602-6.584c.406.12.828.205 1.274.205A4.5 4.5 0 0 0 16 4.5c0-.725-.188-1.401-.493-2.007L13 5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;