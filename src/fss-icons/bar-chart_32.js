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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M2 26V5H1v22h30v-1z"
  }), _react.default.createElement("path", {
    d: "M4 16h7v8H4zm16-8h-7v16h7V8zm-2 14h-3V10h3v12zm4-9h7v1h-7zm0 2h7v1h-7zm0 2h7v1h-7zm0 2h7v1h-7zm0 2h7v1h-7zm0 2h7v1h-7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;