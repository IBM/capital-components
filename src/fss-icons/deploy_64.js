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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M61.707 16L48.293 2.586 34.879 16l2.828 2.828 8.586-8.585v27.171c0 11.028-8.972 20-20 20s-20-8.972-20-20c0-5.342 2.08-10.364 5.858-14.143l-2.829-2.828a23.846 23.846 0 0 0-7.029 16.971c0 13.234 10.766 24 24 24s24-10.766 24-24V10.243l8.586 8.585L61.707 16z"
  }), _react.default.createElement("circle", {
    cx: 26.293,
    cy: 37.414,
    r: 6
  }));
};

var _default = SvgComponent;
exports.default = _default;