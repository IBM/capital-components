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
    d: "M25.414 10.354l-6.707-6.707-1.414 1.414 5.293 5.293H9.414l5.293-5.293-1.414-1.414-6.707 6.707H1v3h2l2 15h22l2-15h2v-3h-5.586zm-.165 16H6.751l-1.467-11h21.432l-1.467 11z"
  }), _react.default.createElement("path", {
    d: "M11 17.354h1v7h-1zm3 0h1v7h-1zm3 0h1v7h-1zm3 0h1v7h-1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;