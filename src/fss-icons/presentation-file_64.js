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
    d: "M2 8v48h60V8H2zm58 46H4V18h56v36z"
  }), _react.default.createElement("path", {
    d: "M32 50c7.73 0 14-6.27 14-14s-6.27-14-14-14v14H18c0 7.73 6.269 14 14 14zm0-12h2V24.166c5.668.955 10 5.899 10 11.834 0 6.617-5.383 12-12 12-5.936 0-10.879-4.332-11.833-10H32z"
  }), _react.default.createElement("path", {
    d: "M30 22.16A13.982 13.982 0 0 0 18.16 34H30V22.16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;