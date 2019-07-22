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
    d: "M84 28V4H20v96h24v24h64V28H84zM44 96H24V8h56v20H44v68zm60 24H48V32h56v88z"
  }), _react.default.createElement("path", {
    d: "M60 52h32v4H60zm0 8h32v4H60zm0 8h32v4H60zm0 8h16v4H60z"
  }));
};

var _default = SvgComponent;
exports.default = _default;