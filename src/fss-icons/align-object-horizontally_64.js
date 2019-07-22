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
    width: 64,
    height: 64
  }, props), _react.default.createElement("path", {
    d: "M30.02 6v10H16v12h14.02v8H6v12h24.02v10h3.95V48H58V36H33.97v-8H48V16H33.97V6h-3.95z"
  }));
};

var _default = SvgComponent;
exports.default = _default;