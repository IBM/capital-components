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
    d: "M60.004 20.486v66.343H68V20.486l25.176 25.173 5.656-5.657L64.004 5.171 29.176 40.002l5.656 5.657z"
  }), _react.default.createElement("path", {
    d: "M120 74.829v32H8v-32H4v48h120v-48z"
  }));
};

var _default = SvgComponent;
exports.default = _default;