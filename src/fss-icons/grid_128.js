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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M87 4H4v120h120V4H87zm-4 4v35H47V8h36zm0 39v35H47V47h36zM8 8h35v35H8V8zm35 39v35H8V47h35zM8 120V86h35v34H8zm39 0V86h36v34H47zm73 0H87V86h33v34zm0-38H87V47h33v35zM87 43V8h33v35H87z"
  }));
};

var _default = SvgComponent;
exports.default = _default;