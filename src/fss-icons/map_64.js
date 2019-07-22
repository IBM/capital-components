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
    d: "M42 12L22 8 2 12v44l20-4 20 4 20-4V8l-20 4zm-1 35.8l-18-3.6V10.24l18 3.6V47.8zM4 13.64l17-3.399V44.2L4 47.6V13.64zM43 47.8V13.84l17-3.4V44.4l-17 3.4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;