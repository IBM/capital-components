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
    d: "M72 44H16v56h56V44zm-4 6.828v42.344L46.828 72 68 50.828zM44 69.172L22.828 48h42.344L44 69.172zM41.172 72L20 93.172V50.828L41.172 72zM44 74.828L65.172 96H22.828L44 74.828zM80 44h32v56H80z"
  }), _react.default.createElement("path", {
    d: "M4 16v96h120V16H4zm116 92H8V36h112v72z"
  }));
};

var _default = SvgComponent;
exports.default = _default;