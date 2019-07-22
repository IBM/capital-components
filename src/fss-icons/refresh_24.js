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
    d: "M2 13.987c0-4.97 4.032-8.994 9-8.994h7l-2.5-2.506L17 1l5 4.987-5 5-1.5-1.5 2.5-2.5h-6.864c-3.867 0-7.136 3.133-7.136 7S7.146 21 11.013 21a7.034 7.034 0 0 0 5.185-2.29l1.478 1.348A9.067 9.067 0 0 1 11 23c-4.97 0-9-4.043-9-9.013z"
  }));
};

var _default = SvgComponent;
exports.default = _default;