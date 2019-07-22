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
    width: 16,
    height: 16
  }, props), _react.default.createElement("path", {
    d: "M9 7V0H7.1v7L4.5 4.5 3 6l5 5 5-5-1.5-1.5L9 7z"
  }), _react.default.createElement("path", {
    d: "M14 10v3H2v-3H0v6h16v-6h-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;