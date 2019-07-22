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
    d: "M4 52V10H2v44h60v-2z"
  }), _react.default.createElement("path", {
    d: "M8 32h14v16H8zm32-16H26v32h14V16zm-2 30H28V18h10v28zm6-20h14v2H44zm0 4h14v2H44zm0 4h14v2H44zm0 4h14v2H44zm0 4h14v2H44zm0 4h14v2H44z"
  }));
};

var _default = SvgComponent;
exports.default = _default;