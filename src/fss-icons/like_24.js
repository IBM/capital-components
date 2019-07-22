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
    d: "M17.077 2C14.919 2 13.035 3.301 12 5c-1.035-1.699-2.919-3-5.077-3C3.651 2 1 4.611 1 7.833c0 1.612.644 3.088 1.692 4.167C5.074 14.449 12 22 12 22s6.926-7.551 9.308-10A5.973 5.973 0 0 0 23 7.833C23 4.611 20.349 2 17.077 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;