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
    d: "M8 6h23v2H8zm0 9h23v2H8zm0 9h23v2H8z"
  }), _react.default.createElement("circle", {
    cx: 3,
    cy: 7,
    r: 2
  }), _react.default.createElement("circle", {
    cx: 3,
    cy: 16,
    r: 2
  }), _react.default.createElement("circle", {
    cx: 3,
    cy: 25,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;