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
    d: "M5.2.5h5.6v1.9H5.2zM1.4 2.4h13.1v2.8H1.4zm1.9 2.8v10.3h9.4V5.2zM7 13.7H5.1V6.2H7zm3.6 0H8.8V6.2h1.9l-.1 7.5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;