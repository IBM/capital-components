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
    d: "M27 15.75v4h2v-4h-1v-1.5c0-6.617-5.383-12-12-12s-12 5.383-12 12v1.5H3v4h2v-5.5c0-6.065 4.935-11 11-11s11 4.935 11 11v1.5zm-26 5h4v9H1zm26 0h4v9h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;