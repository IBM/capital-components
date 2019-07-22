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
    d: "M16 12h46v4H16zm0 18h46v4H16zm0 18h46v4H16zM6 8H2v2h2v8H2v2h6v-2H6zm0 22v2h2v-4H6zm-2 2h2v2H4zm-2 4v2h6v-2H4v-2H2zm2-10H2v2h4v-2zm2 20h2v2H6zm-2 2h2v2H4zm2 6h2v-4H6v2zm-4 0v2h4v-2H4zm2-10H2v2h4v-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;