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
    d: "M10 1.205A10.978 10.978 0 0 0 1.205 10H10V1.205z"
  }), _react.default.createElement("path", {
    d: "M12 1v11H1c0 6.074 4.926 11 11 11 5.39 0 9.868-3.882 10.81-9v-.001A11.226 11.226 0 0 0 23 12c0-6.074-4.926-11-11-11zm-.224 20C7.501 21 3.912 18.003 3 14h18c-.912 4.003-4.949 7-9.224 7zM14 12V3.224c4.003.912 7 4.501 7 8.776h-7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;