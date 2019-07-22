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
    d: "M4 16v96h120V16H4zm116 92H8V36h112v72z"
  }), _react.default.createElement("path", {
    d: "M64 100c15.461 0 28-12.539 28-28S79.461 44 64 44v28H36c0 15.461 12.539 28 28 28zm0-24h4V48.334C79.336 50.243 88 60.129 88 72c0 13.233-10.767 24-24 24-11.871 0-21.757-8.664-23.667-20H64z"
  }), _react.default.createElement("path", {
    d: "M60 44.32C47.746 46.074 38.078 55.746 36.32 68H60V44.32z"
  }));
};

var _default = SvgComponent;
exports.default = _default;