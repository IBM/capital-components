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
    d: "M84.586 38.586L63.414 59.758 52.828 49.172l-5.656 5.656 10.586 10.586-5.172 5.172 2.828 2.828 5.172-5.172 6.586 6.586 5.656-5.656-6.586-6.586 21.172-21.172z"
  }), _react.default.createElement("path", {
    d: "M109.814 60C108.625 45.603 101.09 33.008 90 25.025V4H34v21.025C21.893 33.74 14 47.945 14 64s7.893 30.26 20 38.975V124h56v-21.025c11.09-7.982 18.625-20.577 19.814-34.975H114v-8h-4.186zM62 108c-24.262 0-44-19.738-44-44s19.738-44 44-44 44 19.738 44 44-19.738 44-44 44z"
  }));
};

var _default = SvgComponent;
exports.default = _default;