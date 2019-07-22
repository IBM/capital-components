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
    d: "M112 84L76 48l9.949-16.582A3.969 3.969 0 0 0 88 32c2.211 0 4-1.791 4-4s-1.789-4-4-4c-2.211 0-4 1.791-4 4 0 .753.221 1.449.582 2.051L68 40 32 4C21.801 14.195 16 28.441 16 44c0 15.561 5.801 29.805 16 40 10.191 10.197 24.437 16 40 16 15.559 0 29.805-5.803 40-16zM20 44c0-12.985 4.275-24.987 12.115-34.228l74.112 74.112C96.985 91.725 84.983 96 72 96c-14.414 0-27.614-5.266-37.172-14.829C25.266 71.613 20 58.412 20 44zm24 64h40v16H44z"
  }));
};

var _default = SvgComponent;
exports.default = _default;