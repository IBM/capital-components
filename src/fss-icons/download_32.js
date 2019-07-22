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
    d: "M24.708 13.207l-1.414-1.415L17 18.087V1.5h-2v16.585l-6.292-6.293-1.414 1.415 8.707 8.707z"
  }), _react.default.createElement("path", {
    d: "M29 18.5v8H3v-8H1v12h30v-12z"
  }));
};

var _default = SvgComponent;
exports.default = _default;