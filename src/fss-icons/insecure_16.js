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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M10.497 5.609l.003-.004c-.039-.02-.08-.034-.12-.053a5.881 5.881 0 0 0-.381-.169 5.467 5.467 0 0 0-.577-.189c-.064-.017-.129-.035-.194-.05a5.42 5.42 0 0 0-.426-.078c-.06-.009-.119-.021-.18-.028A5.569 5.569 0 0 0 8 5c-.21 0-.417.015-.621.038-.061.007-.12.019-.181.028a5.48 5.48 0 0 0-.425.078c-.065.015-.13.033-.194.05a5.197 5.197 0 0 0-.578.19 5.64 5.64 0 0 0-.381.168c-.039.019-.081.033-.12.053V4.5C5.5 3.125 6.625 2 8 2c.815 0 1.535.4 1.992 1.008l1.412-1.412C10.577.629 9.365 0 8 0a4.513 4.513 0 0 0-4.5 4.5v2.844c-.004.005-.001.01-.004.015A5.46 5.46 0 0 0 2.5 10.5C2.5 13.525 4.975 16 8 16s5.5-2.475 5.5-5.5c0-2.126-1.225-3.977-3.003-4.891zm.253 6.592L9.701 13.25 8 11.549 6.299 13.25 5.25 12.201 6.951 10.5 5.25 8.799 6.299 7.75 8 9.451 9.701 7.75l1.049 1.049L9.049 10.5l1.701 1.701z"
  }));
};

var _default = SvgComponent;
exports.default = _default;