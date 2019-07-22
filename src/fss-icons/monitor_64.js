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
    d: "M32 48c8.969 0 15.801-4.835 20-12-4.199-7.165-11.031-12-20-12s-15.801 4.835-20 12c4.199 7.165 11.031 12 20 12zm0-22c7.253 0 13.48 3.54 17.652 10C45.48 42.46 39.253 46 32 46c-7.253 0-13.481-3.54-17.652-10C18.519 29.54 24.747 26 32 26z"
  }), _react.default.createElement("path", {
    d: "M32 43c3.867 0 7-3.133 7-7s-3.133-7-7-7c-3.863 0-7 3.133-7 7s3.137 7 7 7zm0-9.334c1.293 0 2.332 1.045 2.332 2.334S33.293 38.334 32 38.334 29.668 37.289 29.668 36s1.039-2.334 2.332-2.334z"
  }));
};

var _default = SvgComponent;
exports.default = _default;