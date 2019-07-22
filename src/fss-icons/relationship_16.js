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
    d: "M10 5L8 8.091 6 5H1v6l1 1v4h4V8l2 3 2-3v8h4v-4l1-1V5z"
  }), _react.default.createElement("circle", {
    cx: 4,
    cy: 2,
    r: 2
  }), _react.default.createElement("circle", {
    cx: 12,
    cy: 2,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;