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
    d: "M1 1v16.923L6.077 23H23V1H1zm20 20H7v-4H3V3h18v18z"
  }), _react.default.createElement("path", {
    d: "M18 8.5L16.5 7 10 13.5 7.5 11 6 12.5l4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;