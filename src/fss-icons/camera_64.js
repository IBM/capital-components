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
    d: "M22 14v-4H10v4H2v40h60V14H22zm38 38H4V16h56v36z"
  }), _react.default.createElement("path", {
    d: "M42 47c7.184 0 13-5.816 13-13s-5.816-13-13-13c-7.174 0-13 5.816-13 13s5.826 13 13 13zm0-24c6.065 0 11 4.935 11 11s-4.935 11-11 11-11-4.935-11-11 4.935-11 11-11z"
  }), _react.default.createElement("path", {
    d: "M42 41c3.867 0 7-3.133 7-7s-3.133-7-7-7c-3.863 0-7 3.133-7 7s3.137 7 7 7zm0-9a2 2 0 1 1-.001 4.001A2 2 0 0 1 42 32z"
  }));
};

var _default = SvgComponent;
exports.default = _default;