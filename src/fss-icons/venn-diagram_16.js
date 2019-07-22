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
    d: "M10.817 2.797c-1.01 0-1.959.275-2.754.796a5.265 5.265 0 0 0-2.754-.796C2.432 2.797.106 5.123.106 8s2.326 5.203 5.203 5.203c1.01 0 1.959-.275 2.754-.796.796.49 1.744.796 2.754.796 2.877 0 5.203-2.326 5.203-5.203s-2.326-5.203-5.203-5.203zM8.063 4.725c.184.153.367.337.52.52h-1.04c.153-.183.337-.367.52-.52zM6.808 9.53h2.479a3.884 3.884 0 0 1-.306.612H7.084c-.092-.183-.184-.398-.276-.612zm-.183-2.448h2.846c.031.184.061.398.092.612h-3.03c.031-.214.061-.428.092-.612zm-.061 1.224h3.03c0 .214-.031.428-.092.612H6.655a1.982 1.982 0 0 1-.091-.612zM9.318 6.47H6.839c.092-.214.184-.428.306-.612h1.897c.092.183.184.398.276.612zm-4.009 5.814c-2.356 0-4.284-1.928-4.284-4.284s1.928-4.284 4.284-4.284c.704 0 1.377.184 1.959.49C6.258 5.154 5.615 6.5 5.615 8s.643 2.846 1.653 3.795a4.223 4.223 0 0 1-1.959.489zm2.754-1.009a4.187 4.187 0 0 1-.52-.52h1.041a4.265 4.265 0 0 1-.521.52z"
  }));
};

var _default = SvgComponent;
exports.default = _default;