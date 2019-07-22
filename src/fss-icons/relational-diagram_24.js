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
    d: "M6.508 12V5.24h1.267v2.112h10.139V8.62H7.775v2.112h8.449V12h-5.07v2.112h6.76v1.267h-6.76v2.112h5.07v1.267H9.888V12h-3.38zM22.984 1.016v21.969H6.085l-5.07-5.07V1.016h21.969zm-1.267 1.267H2.283V17.07H6.93v4.647h14.787V2.283z"
  }));
};

var _default = SvgComponent;
exports.default = _default;