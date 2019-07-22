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
    d: "M16 10c-3.314 0-6 2.685-6 6s2.686 6 6 6c3.315 0 6-2.685 6-6s-2.685-6-6-6zm0 8c-1.106 0-2-.895-2-2s.894-2 2-2a2 2 0 1 1 0 4z"
  }), _react.default.createElement("path", {
    d: "M16 7C9.269 7 4.147 10.625 1 16c3.147 5.375 8.269 9 15 9 6.73 0 11.854-3.625 15-9-3.146-5.375-8.27-9-15-9zm0 16c-5.164 0-9.612-2.475-12.642-7C6.388 11.475 10.836 9 16 9s9.612 2.475 12.642 7c-3.03 4.525-7.478 7-12.642 7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;