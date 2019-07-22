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
    d: "M14 5.231V1h-4v4.231C6 6.141 3 9.718 3 14a9 9 0 0 0 18 0c0-4.282-3-7.859-7-8.769zM12 21c-3.86 0-7-3.14-7-7 0-3.165 2-5.842 5-6.705V14h4V7.295c3 .863 5 3.541 5 6.705 0 3.86-3.14 7-7 7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;