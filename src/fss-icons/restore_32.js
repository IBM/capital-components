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
    d: "M18.853 3.793c-6.617 0-12 5.383-12 12v8.586L2.56 20.086 1.146 21.5l6.707 6.707L14.56 21.5l-1.414-1.414-4.293 4.293v-8.586c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10v2c6.617 0 12-5.383 12-12s-5.382-12-12-12z"
  }), _react.default.createElement("path", {
    d: "M20.146 18.5l1.414-1.414-1.646-1.647 5.293-5.293-.707-.707-5.293 5.293-2.647-2.646-1.414 1.414 2.647 2.646-1.293 1.293.707.707 1.293-1.293z"
  }));
};

var _default = SvgComponent;
exports.default = _default;