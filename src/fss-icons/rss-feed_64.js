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
    d: "M8 4v10c23.196 0 42 18.804 42 42h10C60 27.281 36.719 4 8 4z"
  }), _react.default.createElement("path", {
    d: "M8 24v10c12.151 0 22 9.849 22 22h10c0-17.674-14.326-32-32-32z"
  }), _react.default.createElement("circle", {
    cx: 11,
    cy: 53,
    r: 7
  }));
};

var _default = SvgComponent;
exports.default = _default;