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
    d: "M48 8h32v8H48zM24 20v20h4v80h72V40h4V20H24zm72 96H32V44h64v72z"
  }), _react.default.createElement("path", {
    d: "M44 56h4v48h-4zm12 0h4v48h-4zm12 0h4v48h-4zm12 0h4v48h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;