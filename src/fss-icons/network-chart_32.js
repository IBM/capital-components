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
    d: "M16.973 9.667h5.353c.265 2.067 2.067 3.71 4.187 3.71 2.332 0 4.24-1.908 4.24-4.24s-1.908-4.24-4.24-4.24c-1.961 0-3.604 1.378-4.081 3.18h-5.459c-.53-3.869-3.869-6.89-7.897-6.89a7.94 7.94 0 0 0-7.95 7.95c0 4.187 3.286 7.632 7.42 7.897v5.459c-1.802.477-3.18 2.12-3.18 4.081 0 2.332 1.908 4.24 4.24 4.24s4.24-1.908 4.24-4.24c0-2.173-1.643-3.922-3.71-4.187v-5.353c1.484-.212 2.862-.795 3.975-1.749l6.307 6.307a4.107 4.107 0 0 0-.742 2.385c0 2.332 1.908 4.24 4.24 4.24s4.24-1.908 4.24-4.24-1.908-4.24-4.24-4.24c-.901 0-1.696.265-2.385.742l-6.307-6.307c1.007-1.219 1.643-2.809 1.749-4.505zm-14.257-.53c0-3.498 2.862-6.36 6.36-6.36s6.36 2.862 6.36 6.36-2.862 6.36-6.36 6.36-6.36-2.862-6.36-6.36z"
  }));
};

var _default = SvgComponent;
exports.default = _default;