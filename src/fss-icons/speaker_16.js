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
    d: "M2 0v16h12V0H2zm6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
  }), _react.default.createElement("circle", {
    cx: 8,
    cy: 11,
    r: 1.5
  }));
};

var _default = SvgComponent;
exports.default = _default;