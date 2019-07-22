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
    d: "M84 57.657l17.171 17.172 5.658-5.658L84 46.343l-40 40-17.171-17.172-5.658 5.658L44 97.657z"
  }), _react.default.createElement("path", {
    d: "M4 16v96h120V16H4zm116 92H8V36h112v72z"
  }));
};

var _default = SvgComponent;
exports.default = _default;