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
    d: "M7 7v50h50V7H7zm48 48H9V41h46v14zm0-16H9V25h46v14zm-7-26a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
  }), _react.default.createElement("circle", {
    cx: 48,
    cy: 32,
    r: 3
  }), _react.default.createElement("circle", {
    cx: 48,
    cy: 48,
    r: 3
  }));
};

var _default = SvgComponent;
exports.default = _default;