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
    d: "M10 2.294V0H6v2.294A7 7 0 0 0 8 16a7 7 0 1 0 2-13.706zM8 14c-2.757 0-5-2.243-5-5a5.002 5.002 0 0 1 3-4.576V9h4V4.424c1.763.773 3 2.531 3 4.576 0 2.757-2.243 5-5 5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;