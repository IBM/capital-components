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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M25.068 16.528l-1.414-1.414a10.804 10.804 0 0 1-3.242 2.221l-2.32-6.671a3.994 3.994 0 0 0 1.784-3.328 3.99 3.99 0 0 0-3-3.858V1.336h-2v2.142a3.99 3.99 0 0 0-3 3.858c0 1.389.709 2.61 1.784 3.328L6.932 30.007l1.889.657 3.747-10.773c1.082.283 2.195.428 3.309.428 1.114 0 2.227-.145 3.309-.428l3.747 10.773 1.889-.657-3.75-10.783a12.808 12.808 0 0 0 3.996-2.696zM15.876 6.336a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2.649 11.66l2.328-6.692c.108.009.211.032.321.032.11 0 .213-.023.321-.032l2.328 6.692a11.066 11.066 0 0 1-5.298 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;