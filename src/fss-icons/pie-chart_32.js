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
    d: "M16 2v14H2c0 7.731 6.269 14 14 14s14-6.269 14-14S23.731 2 16 2zm2 2.167c5.668.955 10 5.897 10 11.833H18V4.167zM16 28c-5.936 0-10.878-4.332-11.833-10h23.652C26.863 23.666 21.934 28 16 28z"
  }), _react.default.createElement("path", {
    d: "M14 2.159A13.986 13.986 0 0 0 2.159 14H14V2.159z"
  }));
};

var _default = SvgComponent;
exports.default = _default;