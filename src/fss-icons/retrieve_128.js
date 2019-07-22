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
    d: "M48 90.828h32v4H48zm0 8h32v4H48z"
  }), _react.default.createElement("path", {
    d: "M96 114.828v-48H32v48H12v8h104v-8H96zm-60-44h56v44H36v-44zm24-50.343v38.343h8V20.485l13.172 13.172L86.828 28 64 5.172 41.172 28l5.656 5.657z"
  }));
};

var _default = SvgComponent;
exports.default = _default;