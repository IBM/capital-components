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
    d: "M8 6h23v2H8zm0 9h23v2H8zm0 9h23v2H8zM3 4H1v1h1v4H1v1h3V9H3zm0 11v1h1v-2H3zm-1 1h1v1H2zm-1 2v1h3v-1H2v-1H1zm1-5H1v1h2v-1zm1 10h1v1H3zm-1 1h1v1H2zm1 3h1v-2H3v1zm-2 0v1h2v-1H2zm1-5H1v1h2v-1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;