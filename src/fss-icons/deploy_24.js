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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("circle", {
    cx: 10,
    cy: 14,
    r: 3
  }), _react.default.createElement("path", {
    d: "M10 23c4.97 0 9-4.167 9-9.136V5l2.5 2.5L23 6l-5-5-5 5 1.5 1.5L17 5v8.864C17 17.731 13.867 21 10 21s-7.013-3.146-7.013-7.013c0-1.968.835-3.858 2.29-5.185L3.93 7.325A9.051 9.051 0 0 0 1 14a9 9 0 0 0 9 9z"
  }));
};

var _default = SvgComponent;
exports.default = _default;