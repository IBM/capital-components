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
    d: "M16 12h46v4H16zm0 18h46v4H16zm0 18h46v4H16z"
  }), _react.default.createElement("circle", {
    cx: 6,
    cy: 14,
    r: 4
  }), _react.default.createElement("circle", {
    cx: 6,
    cy: 32,
    r: 4
  }), _react.default.createElement("circle", {
    cx: 6,
    cy: 50,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;