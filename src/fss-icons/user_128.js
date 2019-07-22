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
    d: "M64 84c22.094 0 40-17.906 40-40S86.094 4 64 4 24 21.906 24 44s17.906 40 40 40zm0-76c19.851 0 36 16.149 36 36S83.851 80 64 80 28 63.851 28 44 44.149 8 64 8zm32 84H32c-8.836 0-16 7.164-16 16v16h96v-16c0-8.836-7.164-16-16-16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;