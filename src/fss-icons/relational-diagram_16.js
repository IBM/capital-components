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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M4 8V3.077h.923v1.538h7.385v.923H4.923v1.538h6.154V8H7.385v1.538h4.923v.923H7.385V12h3.692v.923H6.462V8H4zm12-8v16H3.692L0 12.308V0h16zm-.923.923H.923v10.769h3.385v3.385h10.769V.923z"
  }));
};

var _default = SvgComponent;
exports.default = _default;