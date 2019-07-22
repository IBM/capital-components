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
    d: "M16 2L2 5.733V5H0v5h2v-.732l1 .268V13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1.588l6 1.608V2zM8 12H5v-1.928l3 .804V12z",
    fill: "#231f20"
  }));
};

var _default = SvgComponent;
exports.default = _default;