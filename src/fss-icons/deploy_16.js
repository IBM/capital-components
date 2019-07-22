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
    d: "M16 4.024l-3.991-4-4.009 4 1.5 1.451 1.5-1.5v5.538c0 2.46-2.078 4.462-4.538 4.462S2 11.974 2 9.514c0-1.252.531-2.455 1.458-3.298L2.11 4.737A6.476 6.476 0 0 0 0 9.514c0 3.563 2.899 6.462 6.462 6.462S13 13.077 13 9.516v-5.54l1.5 1.5L16 4.024z"
  }), _react.default.createElement("circle", {
    cx: 6.5,
    cy: 9.524,
    r: 2.5
  }));
};

var _default = SvgComponent;
exports.default = _default;