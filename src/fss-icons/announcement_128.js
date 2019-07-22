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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M16 54.857V52h-4v-4H4v32h8v-4h4v-2.857l8 2.286V88a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-3.429L124 104V24L16 54.857zM52 88c0 2.205-1.795 4-4 4H32c-2.205 0-4-1.795-4-4V76.571l24 6.857V88zm68 10.697L16 68.982v-9.965l104-29.715v69.395z"
  }));
};

var _default = SvgComponent;
exports.default = _default;