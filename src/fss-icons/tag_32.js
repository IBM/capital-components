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
    d: "M18 1L4 15l-3 3 13 13 3-3 14-14V1H18zm11 12.172L15.586 26.586 5.414 16.414 18.829 3H29v10.172z"
  }), _react.default.createElement("circle", {
    cx: 24,
    cy: 8,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;