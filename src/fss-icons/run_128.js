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
    d: "M44 44c-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20-8.955-20-20-20zm0 28a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
  }), _react.default.createElement("path", {
    d: "M120.484 27.516A11.98 11.98 0 0 0 112 24H44C21.906 24 4 41.906 4 64s17.906 40 40 40c11.057 0 21.063-4.485 28.304-11.735 12.045-11.995 48.181-47.78 48.181-47.78C122.658 42.316 124 39.316 124 36s-1.342-6.316-3.516-8.484zM44 100C24.149 100 8 83.851 8 64s16.149-36 36-36 36 16.149 36 36-16.149 36-36 36zm37.685-22.693C83.158 73.139 84 68.673 84 64c0-15.867-9.26-29.534-22.65-36h41.723a11.944 11.944 0 0 0-3.072 8c0 6.389 4.992 11.594 11.287 11.964-7.33 7.261-19.625 19.442-29.603 29.343zM112 44c-4.415 0-8-3.585-8-8s3.585-8 8-8 8 3.585 8 8-3.585 8-8 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;