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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M108 63v16h8V63h-4v-6c0-26.467-21.533-48-48-48S16 30.533 16 57v6h-4v16h8V57c0-24.262 19.738-44 44-44s44 19.738 44 44v6zM4 83h16v36H4zm104 0h16v36h-16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;