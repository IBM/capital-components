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
    d: "M2.465-.01C1.109-.01 0 1.099 0 2.455S1.109 4.92 2.465 4.92s2.464-1.11 2.464-2.465S3.82-.01 2.465-.01zm0 4.005c-.801 0-1.54-.739-1.54-1.54s.739-1.54 1.54-1.54 1.54.739 1.54 1.54-.739 1.54-1.54 1.54zM10.475 8c0 1.356-1.109 2.465-2.465 2.465S5.545 9.356 5.545 8 6.654 5.535 8.01 5.535 10.475 6.644 10.475 8zm-8.01 3.081C1.109 11.081 0 12.19 0 13.545s1.109 2.465 2.465 2.465 2.465-1.109 2.465-2.465-1.11-2.464-2.465-2.464zm0 4.005c-.801 0-1.54-.739-1.54-1.54s.739-1.54 1.54-1.54 1.54.739 1.54 1.54-.739 1.54-1.54 1.54zm11.09-10.167c1.356 0 2.465-1.109 2.465-2.465S14.911-.01 13.555-.01 11.09 1.099 11.09 2.455s1.11 2.464 2.465 2.464zm0-4.005c.801 0 1.54.739 1.54 1.54s-.739 1.54-1.54 1.54-1.54-.739-1.54-1.54.739-1.54 1.54-1.54zm0 10.167c-1.356 0-2.465 1.109-2.465 2.465s1.109 2.465 2.465 2.465 2.465-1.109 2.465-2.465-1.109-2.465-2.465-2.465zm0 4.005c-.801 0-1.54-.739-1.54-1.54s.739-1.54 1.54-1.54 1.54.739 1.54 1.54-.739 1.54-1.54 1.54z"
  }));
};

var _default = SvgComponent;
exports.default = _default;