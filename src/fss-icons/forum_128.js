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
    d: "M109.937 18.06C101.254 9.373 89.254 4 76 4 62.746 4 50.746 9.373 42.062 18.06 33.375 26.746 28 38.746 28 52c0 4.163.531 8.202 1.528 12.054A23.433 23.433 0 0 0 28 64a23.929 23.929 0 0 0-16.969 7.031A23.918 23.918 0 0 0 4 88c0 7.016 2.687 13.371 7.031 17.969L28 124v-12a23.929 23.929 0 0 0 16.969-7.031 23.952 23.952 0 0 0 6.453-11.741A47.751 47.751 0 0 0 76 100v24l33.937-36.064C118.625 78.74 124 66.033 124 52c0-13.254-5.375-25.254-14.063-33.94zm-2.913 67.134L80 113.913V96h-4c-8.663 0-16.94-2.495-24.021-7.131.009-.289.021-.578.021-.869a23.922 23.922 0 0 0-7.031-16.969 23.982 23.982 0 0 0-11.107-6.307A44.137 44.137 0 0 1 32 52c0-11.751 4.578-22.8 12.892-31.112C53.199 12.577 64.247 8 76 8s22.801 4.577 31.109 12.889C115.422 29.2 120 40.249 120 52c0 12.549-4.606 24.336-12.976 33.194z"
  }), _react.default.createElement("circle", {
    cx: 76,
    cy: 52,
    r: 6
  }), _react.default.createElement("circle", {
    cx: 96,
    cy: 52,
    r: 6
  }), _react.default.createElement("circle", {
    cx: 56,
    cy: 52,
    r: 6
  }));
};

var _default = SvgComponent;
exports.default = _default;