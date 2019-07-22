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
    d: "M32 42c11.047 0 20-8.953 20-20S43.047 2 32 2s-20 8.953-20 20 8.953 20 20 20zm0-38c9.926 0 18 8.075 18 18s-8.074 18-18 18-18-8.075-18-18S22.074 4 32 4zm16 42H16a8 8 0 0 0-8 8v8h48v-8a8 8 0 0 0-8-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;