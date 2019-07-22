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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M0 0v12.308L3.692 16H16V0H0zm15.077 15.077H4.308v-3.385H.923V.923h14.154v14.154zM7.385 7.385V5.231h1.231v2.154h2.154v1.231H8.615v5.231h5.231V8.615h-2.154v-1.23h2.154V2.154H8.615v2.154h-1.23V2.154H2.154v5.231h5.231zm5.538 5.538H9.538V9.538h3.385v3.385zM9.538 3.077h3.385v3.385H9.538V3.077zm-6.461 0h3.385v3.385H3.077V3.077z"
  }));
};

var _default = SvgComponent;
exports.default = _default;