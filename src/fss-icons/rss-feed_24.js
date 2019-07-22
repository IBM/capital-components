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
    cx: 4,
    cy: 20,
    r: 3
  }), _react.default.createElement("path", {
    d: "M3 9v4c4.411 0 8 3.589 8 8h4C15 14.373 9.627 9 3 9z"
  }), _react.default.createElement("path", {
    d: "M3 1v4c8.822 0 16 7.178 16 16h4C23 9.954 14.046 1 3 1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;