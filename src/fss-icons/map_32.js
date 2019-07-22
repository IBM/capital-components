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
    d: "M21 6L11 4 1 6v22l10-2 10 2 10-2V4L21 6zm-1 17.8l-8-1.6V6.239l8 1.601V23.8zM3 7.64l7-1.399V22.2l-7 1.4V7.64zM22 23.8V7.84l7-1.4V22.4l-7 1.4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;