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
    d: "M16 8v20c46.393 0 84 37.607 84 84h20C120 54.562 73.437 8 16 8z"
  }), _react.default.createElement("path", {
    d: "M16 48v20c24.303 0 44 19.697 44 44h20c0-35.348-28.652-64-64-64z"
  }), _react.default.createElement("circle", {
    cx: 22,
    cy: 106,
    r: 14
  }));
};

var _default = SvgComponent;
exports.default = _default;