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
    d: "M15.75 2c-1.5 0-3 1.25-3.75 2-.75-.75-2.25-2-3.75-2H2v18h6.25c1.5 0 3 1.25 3.75 2 .75-.75 2.25-2 3.75-2H22V2h-6.25zM12 19.25C10.993 18.624 9.652 18 8.25 18H4V4h4.25c1.02 0 2.168.539 2.689 1.061L12 6.121V19.25z"
  }));
};

var _default = SvgComponent;
exports.default = _default;