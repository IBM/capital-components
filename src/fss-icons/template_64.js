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
    d: "M36 22H8v28h28V22zm-2 3.414v21.172L23.414 36 34 25.414zm-12 9.172L11.414 24h21.172L22 34.586zM20.586 36L10 46.586V25.414L20.586 36zM22 37.414L32.586 48H11.414L22 37.414zM40 22h16v28H40z"
  }), _react.default.createElement("path", {
    d: "M2 8v48h60V8H2zm58 46H4V18h56v36z"
  }));
};

var _default = SvgComponent;
exports.default = _default;