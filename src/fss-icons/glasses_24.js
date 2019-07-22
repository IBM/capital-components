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
    d: "M23 10.5h-1.276c-.62-1.744-2.268-3-4.224-3-1.698 0-3.159.952-3.925 2.34-.483-.212-1.012-.34-1.575-.34s-1.092.128-1.575.34C9.659 8.452 8.198 7.5 6.5 7.5c-1.956 0-3.605 1.256-4.224 3H1v2h1.05c.252 2.247 2.136 4 4.45 4A4.5 4.5 0 0 0 11 12c0-.073-.018-.14-.021-.212a1.959 1.959 0 0 1 2.042 0c-.003.072-.021.139-.021.212a4.5 4.5 0 0 0 4.5 4.5c2.314 0 4.198-1.753 4.45-4H23v-2zm-16.5 4A2.503 2.503 0 0 1 4 12c0-1.379 1.122-2.5 2.5-2.5C7.879 9.5 9 10.621 9 12c0 1.378-1.121 2.5-2.5 2.5zm11 0A2.503 2.503 0 0 1 15 12c0-1.379 1.122-2.5 2.5-2.5 1.379 0 2.5 1.121 2.5 2.5 0 1.378-1.121 2.5-2.5 2.5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;