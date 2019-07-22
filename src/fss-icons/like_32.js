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
    d: "M22 4a6.99 6.99 0 0 0-6 3.408A6.99 6.99 0 0 0 10 4a7 7 0 0 0-7 7c0 1.933.761 3.706 2 5 2.815 2.94 11 12 11 12s8.185-9.06 11-12a7.224 7.224 0 0 0 2-5 7 7 0 0 0-7-7zm3.556 10.617C23.457 16.808 18.499 22.262 16 25.02c-2.499-2.757-7.457-8.211-9.556-10.403A5.204 5.204 0 0 1 5 11c0-2.757 2.243-5 5-5 1.768 0 3.369.911 4.285 2.437L16 11.294l1.715-2.857A4.962 4.962 0 0 1 22 6c2.757 0 5 2.243 5 5 0 1.36-.513 2.644-1.444 3.617z"
  }));
};

var _default = SvgComponent;
exports.default = _default;