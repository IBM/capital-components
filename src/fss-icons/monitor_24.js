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
    cx: 12,
    cy: 12,
    r: 3
  }), _react.default.createElement("path", {
    d: "M1 2v20h22V2H1zm11 15c-3.737 0-6.583-2.014-8.333-5C5.417 9.014 8.263 7 12 7s6.583 2.014 8.333 5c-1.75 2.986-4.596 5-8.333 5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;