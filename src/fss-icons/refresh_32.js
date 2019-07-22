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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M16.793 28.854c-5.514 0-10-4.486-10-10s4.486-10 10-10h6.586l-4.293 4.293 1.414 1.414 6.707-6.707L20.5 1.146 19.086 2.56l4.293 4.293h-6.586c-6.617 0-12 5.383-12 12s5.383 12 12 12a11.92 11.92 0 0 0 8.485-3.515l-1.414-1.414a9.935 9.935 0 0 1-7.071 2.93z"
  }));
};

var _default = SvgComponent;
exports.default = _default;