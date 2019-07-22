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
    d: "M49.414 20.354L36.707 7.647l-1.414 1.414 11.293 11.293H17.414L28.707 9.061l-1.414-1.414-12.707 12.707H2v6h4l4 30h44l4-30h4v-6H49.414zm2.835 34H11.751l-3.467-26h47.432l-3.467 26z"
  }), _react.default.createElement("path", {
    d: "M22 34.354h2v14h-2zm6 0h2v14h-2zm6 0h2v14h-2zm6 0h2v14h-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;