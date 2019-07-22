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
    d: "M18.333 16.778c4.176-4.176 4.28-10.868.336-15.185L18.055 1l-2.921 2.714A6.964 6.964 0 0 0 10.555 2a7 7 0 0 0-7 7c0 1.753.649 3.351 1.714 4.579l-2.817 2.817.354.354-.028.028a10.95 10.95 0 0 0 6.778 3.174V21h-2v2h7v-2h-2v-1.187a10.938 10.938 0 0 0 5.777-3.035zM17.555 9a6.964 6.964 0 0 0-1.714-4.579l1.413-1.413c3.165 3.534 3.06 8.961-.336 12.357s-8.823 3.5-12.357.336l1.413-1.413A6.982 6.982 0 0 0 10.555 16a7 7 0 0 0 7-7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;