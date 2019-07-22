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
    d: "M48 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm6 18H42L32 32 22 22H10a4 4 0 0 0-4 4v16l4 4v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V32l10 10 10-10v28a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V46l4-4V26a4 4 0 0 0-4-4zm-38-4a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;