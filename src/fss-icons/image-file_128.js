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
    d: "M12 12v104h104V12H12zm4 4h96v80H16V16z"
  }), _react.default.createElement("path", {
    d: "M76 68L48 40 28 60v24h72V68L88 56z"
  }), _react.default.createElement("circle", {
    cx: 92,
    cy: 36,
    r: 8
  }));
};

var _default = SvgComponent;
exports.default = _default;