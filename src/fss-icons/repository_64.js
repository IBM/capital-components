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
    d: "M58 20v-4h-4v-4H10v4H6v4H2v32h60V20h-4zm-46-6h40v2H12v-2zm48 36H4V22h56v28z"
  }), _react.default.createElement("path", {
    d: "M38 36H26v-2h-2v4h16v-4h-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;