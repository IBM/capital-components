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
    d: "M21.049 3.978A6.673 6.673 0 0 0 16.286 2a6.674 6.674 0 0 0-4.763 1.978l-8.99 9.024a5.283 5.283 0 0 0 .001 7.442A5.26 5.26 0 0 0 6.285 22a5.262 5.262 0 0 0 3.752-1.557l6.722-6.749a3.844 3.844 0 1 0-2.74-6.549 3.847 3.847 0 0 0-2.742 1.137l-5.054 5.074 1.438 1.352 5.054-5.074a1.831 1.831 0 0 1 2.607 0 1.92 1.92 0 0 1-.001 2.706L8.6 19.091c-1.24 1.244-3.388 1.244-4.629 0a3.364 3.364 0 0 1 0-4.737l8.99-9.024a4.666 4.666 0 0 1 3.326-1.386c1.254 0 2.435.492 3.325 1.385a4.804 4.804 0 0 1 .001 6.767l-7.322 7.349 1.437 1.353 7.323-7.35c2.599-2.61 2.599-6.859-.002-9.47z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;