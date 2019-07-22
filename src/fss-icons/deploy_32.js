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
    d: "M30.853 8l-6.707-6.707L17.439 8l1.414 1.414 4.293-4.293v13.586c0 5.514-4.486 10-10 10s-10-4.486-10-10a9.934 9.934 0 0 1 2.929-7.071l-1.414-1.414a11.92 11.92 0 0 0-3.515 8.485c0 6.617 5.383 12 12 12s12-5.383 12-12V5.121l4.293 4.293L30.853 8z"
  }), _react.default.createElement("circle", {
    cx: 13.146,
    cy: 18.707,
    r: 3
  }));
};

var _default = SvgComponent;
exports.default = _default;