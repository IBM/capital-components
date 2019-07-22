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
    d: "M11.375 1.937c-5.088 0-9.25 4.163-9.25 9.25s4.163 9.25 9.25 9.25 9.25-4.163 9.25-9.25-4.162-9.25-9.25-9.25zm0 15.031c-3.006 0-5.781-2.775-5.781-5.781s2.775-5.781 5.781-5.781 5.781 2.775 5.781 5.781-2.775 5.781-5.781 5.781zM41.438 32c0 5.088-4.163 9.25-9.25 9.25s-9.25-4.163-9.25-9.25 4.163-9.25 9.25-9.25 9.25 4.162 9.25 9.25zM11.375 43.563c-5.088 0-9.25 4.163-9.25 9.25s4.163 9.25 9.25 9.25 9.25-4.163 9.25-9.25-4.162-9.25-9.25-9.25zm0 15.031c-3.006 0-5.781-2.775-5.781-5.781s2.775-5.781 5.781-5.781 5.781 2.775 5.781 5.781-2.775 5.781-5.781 5.781zm41.626-38.157c5.088 0 9.25-4.163 9.25-9.25s-4.163-9.25-9.25-9.25-9.25 4.163-9.25 9.25 4.162 9.25 9.25 9.25zm0-15.031c3.006 0 5.781 2.775 5.781 5.781s-2.775 5.781-5.781 5.781-5.781-2.775-5.781-5.781 2.775-5.781 5.781-5.781zm0 38.157c-5.088 0-9.25 4.163-9.25 9.25s4.163 9.25 9.25 9.25 9.25-4.163 9.25-9.25-4.162-9.25-9.25-9.25zm0 15.031c-3.006 0-5.781-2.775-5.781-5.781s2.775-5.781 5.781-5.781 5.781 2.775 5.781 5.781-2.775 5.781-5.781 5.781z"
  }));
};

var _default = SvgComponent;
exports.default = _default;