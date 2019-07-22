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
    d: "M124 4H4v16l48 48v56l24-24V86.56C78.932 89.89 83.215 92 88 92c8.84 0 16-7.16 16-16s-7.16-16-16-16c-1.638 0-3.218.249-4.706.706L124 20V4zm-24 72c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zM73.171 65.171L72 66.343v32l-16 16v-48l-1.171-1.172L9.657 20h108.687L73.171 65.171z"
  }));
};

var _default = SvgComponent;
exports.default = _default;