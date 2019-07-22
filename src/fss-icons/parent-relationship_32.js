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
    d: "M30.752 7.454V1.187h-6.267v2.279H14.8V15.43H7.393v-2.279H1.126v6.267h6.267v-2.279H14.8v11.394h9.685v2.279h6.267v-6.267h-6.267v2.279h-7.976v-9.685h7.976v2.279h6.267v-6.267h-6.267v2.279h-7.976V5.175h7.976v2.279h6.267zm-4.558-4.558h2.849v2.849h-2.849V2.896zm0 23.359h2.849v2.849h-2.849v-2.849zm0-11.394h2.849v2.849h-2.849v-2.849z"
  }));
};

var _default = SvgComponent;
exports.default = _default;