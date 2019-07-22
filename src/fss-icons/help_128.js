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
    d: "M64 8C33.074 8 8 33.074 8 64s25.074 56 56 56 56-25.074 56-56S94.926 8 64 8zm0 4c10.246 0 19.781 3.019 27.844 8.156l-14.7 14.699A31.775 31.775 0 0 0 64 32a31.78 31.78 0 0 0-13.145 2.855L36.156 20.156C44.219 15.019 53.754 12 64 12zM34.855 77.145L20.156 91.844C15.019 83.783 12 74.246 12 64s3.019-19.783 8.156-27.844l14.699 14.699C33.039 54.871 32 59.312 32 64s1.039 9.129 2.855 13.145zM64 116c-10.246 0-19.781-3.02-27.844-8.156l14.699-14.699A31.78 31.78 0 0 0 64 96c4.687 0 9.129-1.037 13.144-2.855l14.699 14.699C83.781 112.98 74.246 116 64 116zm26.086-41.887a28.081 28.081 0 0 1-15.969 15.969A27.811 27.811 0 0 1 64 92c-3.57 0-6.977-.695-10.117-1.918a28.081 28.081 0 0 1-15.969-15.969A27.871 27.871 0 0 1 36 64c0-3.57.695-6.971 1.914-10.109a28.091 28.091 0 0 1 15.969-15.975A27.868 27.868 0 0 1 64 36c3.57 0 6.973.695 10.117 1.916a28.089 28.089 0 0 1 15.969 15.975A27.842 27.842 0 0 1 92 64c0 3.57-.695 6.973-1.914 10.113zm3.058 3.032C94.961 73.129 96 68.688 96 64s-1.039-9.129-2.856-13.145l14.699-14.699C112.98 44.217 116 53.754 116 64s-3.02 19.783-8.156 27.844l-14.7-14.699z"
  }));
};

var _default = SvgComponent;
exports.default = _default;