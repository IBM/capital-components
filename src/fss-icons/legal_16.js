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
    d: "M13 2H3L0 7c0 1.7 1.3 3 3 3s3-1.3 3-3L3.6 3H7v9l-3 2h8l-3-2V3h3.4L10 7c0 1.7 1.3 3 3 3s3-1.3 3-3l-3-5zM1.2 7L3 3.9 4.8 7H1.2zm10 0L13 3.9 14.8 7h-3.6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;