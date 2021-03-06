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
    d: "M27.484 4.515A11.958 11.958 0 0 0 19 1a11.955 11.955 0 0 0-8.484 3.515A11.961 11.961 0 0 0 7 13c0 1.045.148 2.054.398 3.02C7.267 16.011 7.135 16 7 16a5.981 5.981 0 0 0-4.242 1.758A5.978 5.978 0 0 0 1 22c0 1.754.672 3.343 1.758 4.492L7 31v-3a5.981 5.981 0 0 0 4.242-1.758 5.99 5.99 0 0 0 1.614-2.948A11.926 11.926 0 0 0 19 25v6l8.484-9.016C29.656 19.685 31 16.508 31 13c0-3.314-1.344-6.313-3.516-8.485zm-1.457 16.098L21 25.956V23h-2c-2.24 0-4.361-.74-6.104-2.09a5.985 5.985 0 0 0-1.654-3.152 6.032 6.032 0 0 0-1.552-1.115A9.986 9.986 0 0 1 9 13a9.935 9.935 0 0 1 2.93-7.071C13.818 4.04 16.329 3 19 3s5.182 1.04 7.07 2.93A9.93 9.93 0 0 1 29 13c0 2.881-1.055 5.583-2.973 7.613z"
  }), _react.default.createElement("circle", {
    cx: 19,
    cy: 13,
    r: 1.5
  }), _react.default.createElement("circle", {
    cx: 24,
    cy: 13,
    r: 1.5
  }), _react.default.createElement("circle", {
    cx: 14,
    cy: 13,
    r: 1.5
  }));
};

var _default = SvgComponent;
exports.default = _default;