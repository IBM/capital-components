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
    d: "M1 4v24h30V4H1zm28 22H3V10h26v16z"
  }), _react.default.createElement("path", {
    d: "M16 25c3.865 0 7-3.135 7-7s-3.135-7-7-7v7H9c0 3.865 3.135 7 7 7zm0-6h1v-6.916c2.834.477 5 2.948 5 5.916 0 3.309-2.691 6-6 6a6.01 6.01 0 0 1-5.917-5H16z"
  }), _react.default.createElement("path", {
    d: "M15 11.08A6.99 6.99 0 0 0 9.08 17H15v-5.92z"
  }));
};

var _default = SvgComponent;
exports.default = _default;