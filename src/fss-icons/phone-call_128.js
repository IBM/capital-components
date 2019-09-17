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
    d: "M96 4L72 32l8 12-36 36-12-8L4 92l12 32c20-8 44-24 64-44s36-44 44-64L96 4zM77.172 77.171c-17.688 17.688-39.417 32.977-58.887 41.531L8.823 93.47l23.255-16.61 9.703 6.468 2.728 1.819 2.318-2.318 36-36 2.319-2.319-1.819-2.729-6.319-9.479L97.125 8.834l21.652 9.28c-8.539 19.513-23.866 41.318-41.605 59.057z"
  }));
};

var _default = SvgComponent;
exports.default = _default;