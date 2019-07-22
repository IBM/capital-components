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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M32 24h92v8H32zm0 36h92v8H32zm0 36h92v8H32zM12 16H4v4h4v16H4v4h12v-4h-4zm0 44v4h4v-8h-4zm-4 4h4v4H8zm-4 8v4h12v-4H8v-4H4zm4-20H4v4h8v-4zm4 40h4v4h-4zm-4 4h4v4H8zm4 12h4v-8h-4v4zm-8 0v4h8v-4H8zm4-20H4v4h8v-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;