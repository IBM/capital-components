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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M12.5 7.344V4.5C12.5 2.025 10.475 0 8 0a4.513 4.513 0 0 0-4.5 4.5v2.844c-.628.894-1 1.981-1 3.156a5.5 5.5 0 1 0 10-3.156zM5.5 4.5C5.5 3.125 6.625 2 8 2s2.5 1.125 2.5 2.5v1.105a5.474 5.474 0 0 0-5 0V4.5zm1.487 8.752L4.5 10.781l1-1 1.467 1.474L10.5 7.781l1 1-4.513 4.471z"
  }));
};

var _default = SvgComponent;
exports.default = _default;