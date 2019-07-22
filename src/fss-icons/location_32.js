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
    d: "M24.484 4.515A11.958 11.958 0 0 0 16 1a11.955 11.955 0 0 0-8.484 3.515A11.961 11.961 0 0 0 4 13c0 3.508 1.344 6.685 3.516 8.984L16 31l8.484-9.016C26.656 19.685 28 16.508 28 13c0-3.314-1.344-6.313-3.516-8.485zm-1.456 16.098L16 28.081 8.969 20.61C7.055 18.583 6 15.881 6 13a9.93 9.93 0 0 1 2.93-7.071A9.93 9.93 0 0 1 16 3a9.927 9.927 0 0 1 7.07 2.93A9.93 9.93 0 0 1 26 13c0 2.881-1.055 5.583-2.972 7.613z"
  }), _react.default.createElement("circle", {
    cx: 16,
    cy: 13,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;