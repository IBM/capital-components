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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M36 10V2h-8v8H12v52h40V10H36zm-4-6a2 2 0 1 1-.001 4.001A2 2 0 0 1 32 4zm18 56H14V12h14v6h8v-6h14v48z"
  }), _react.default.createElement("path", {
    d: "M32 22c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-8 6a4 4 0 0 0-4 4v4h24v-4a4 4 0 0 0-4-4H24z"
  }));
};

var _default = SvgComponent;
exports.default = _default;