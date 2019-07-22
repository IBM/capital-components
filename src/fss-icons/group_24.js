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
  }, props), _react.default.createElement("path", {
    d: "M14 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm-4.5 5h-7A1.5 1.5 0 0 0 1 20.5V23h10v-2.5A1.5 1.5 0 0 0 9.5 19zm12 0h-7a1.5 1.5 0 0 0-1.5 1.5V23h10v-2.5a1.5 1.5 0 0 0-1.5-1.5zM2 14a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm6-9a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;