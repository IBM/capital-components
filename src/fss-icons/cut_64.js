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
    d: "M54 26H34v-8.262c3.448-.89 6-4.012 6-7.738a8 8 0 0 0-16 0c0 3.726 2.552 6.848 6 7.738V26c-2.211 0-4 1.79-4 4h-8.262c-.89-3.448-4.012-6-7.738-6a8 8 0 0 0 0 16c3.726 0 6.848-2.552 7.738-6H26v20l8 8V34h28l-8-8zM10 36c-2.207 0-4-1.791-4-4s1.793-4 4-4 4 1.791 4 4-1.793 4-4 4zm20-4a2 2 0 1 1-.001-3.999A2 2 0 0 1 30 32zm2-18c-2.207 0-4-1.791-4-4s1.793-4 4-4 4 1.791 4 4-1.793 4-4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;