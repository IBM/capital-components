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
    d: "M27.999 41.171L5.171 64l22.828 22.829 5.658-5.658L16.485 64l17.172-17.171zM42.829 24h8v80h-8zm16 12h48v8h-48zm0 16h32v8h-32zm0 16h64v8h-64zm0 16h32v8h-32z"
  }));
};

var _default = SvgComponent;
exports.default = _default;