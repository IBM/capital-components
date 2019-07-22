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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M4 13.714V13H3v-1H1v8h2v-1h1v-.714l2 .571V22a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-.857L31 26V6L4 13.714zM12 22H8v-2.571l4 1.143V22zm17 1.349L5 16.491v-.982l24-6.857v14.697z"
  }));
};

var _default = SvgComponent;
exports.default = _default;