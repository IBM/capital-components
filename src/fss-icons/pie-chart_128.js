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
    d: "M64 8v56H8c0 30.924 25.076 56 56 56s56-25.076 56-56S94.924 8 64 8zm4 4.152c26.811 2.05 48 24.521 48 51.848H68V12.152zM64 116c-27.327 0-49.798-21.189-51.848-48h103.679C113.779 94.809 91.326 116 64 116z"
  }), _react.default.createElement("path", {
    d: "M56 8.637C31.494 12.152 12.152 31.494 8.637 56H56V8.637z"
  }));
};

var _default = SvgComponent;
exports.default = _default;