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
    d: "M33.586 57.707c-11.028 0-20-8.972-20-20s8.972-20 20-20h13.171l-8.586 8.586L41 29.121l13.415-13.414L41 2.293l-2.828 2.828 8.586 8.586H33.586c-13.234 0-24 10.766-24 24s10.766 24 24 24c6.41 0 12.437-2.496 16.971-7.029l-2.828-2.829a19.874 19.874 0 0 1-14.143 5.858z"
  }));
};

var _default = SvgComponent;
exports.default = _default;