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
    d: "M15 13h-4a1 1 0 0 0-1 1v2h6v-2a1 1 0 0 0-1-1zM5 13H1a1 1 0 0 0-1 1v2h6v-2a1 1 0 0 0-1-1zM5 3a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM0 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm10 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;