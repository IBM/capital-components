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
    d: "M14 6h-2V3l2-2h-2V0H4v1H2l2 2v3H2l2 2v3H2l2 2v3h8v-3l2-2h-2V8l2-2zm-6 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 15zm0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10zm0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;