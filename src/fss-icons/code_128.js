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
    d: "M37.171 37.171L10.343 64l26.828 26.829 5.658-5.658L21.657 64l21.172-21.171zm53.658 0l-5.658 5.658L106.343 64 85.171 85.171l5.658 5.658L117.657 64z"
  }));
};

var _default = SvgComponent;
exports.default = _default;