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
    d: "M98.828 40.707L73.414 15.293l-2.828 2.828 22.586 22.586H34.828l22.586-22.586-2.828-2.828-25.414 25.414H4v12h8l8 60h88l8-60h8v-12H98.828zm5.67 68H23.502l-6.934-52h94.863l-6.933 52z"
  }), _react.default.createElement("path", {
    d: "M44 68.707h4v28h-4zm12 0h4v28h-4zm12 0h4v28h-4zm12 0h4v28h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;