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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M22.984 5.663V1.016h-4.647v1.69h-7.182v8.872H5.663v-1.69H1.016v4.647h4.647v-1.69h5.492v8.449h7.182v1.69h4.647v-4.647h-4.647v1.69h-5.915v-7.182h5.915v1.69h4.647V9.888h-4.647v1.69h-5.915V3.973h5.915v1.69h4.647zm-3.379-3.38h2.112v2.112h-2.112V2.283zm0 17.322h2.112v2.112h-2.112v-2.112zm0-8.45h2.112v2.112h-2.112v-2.112z"
  }));
};

var _default = SvgComponent;
exports.default = _default;