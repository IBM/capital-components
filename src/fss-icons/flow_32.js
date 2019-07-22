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
    d: "M24 19a5 5 0 0 0-4.899 4H12.9a4.975 4.975 0 0 0-.731-1.754l9.078-9.077A4.965 4.965 0 0 0 24 13a5 5 0 0 0 5-5 5 5 0 0 0-9.899-1H12.9A5 5 0 0 0 3 8a5 5 0 0 0 9.899 1H19.1c.13.638.384 1.23.731 1.754l-9.078 9.077A4.965 4.965 0 0 0 8 19a5 5 0 0 0-5 5 5 5 0 0 0 9.899 1H19.1a5 5 0 0 0 9.899-1c0-2.762-2.237-5-4.999-5zm0-14a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;