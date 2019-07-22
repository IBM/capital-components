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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M9 13v-2H4l2-2-1-1-4 4 4 4 1-1-2-2zm10-5l-1 1 2 2h-5v2h5l-2 2 1 1 4-4zm-6 12v-5h-2v5l-2-2-1 1 4 4 4-4-1-1zM11 4v5h2V4l2 2 1-1-4-4-4 4 1 1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;