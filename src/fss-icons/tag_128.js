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
    d: "M72 4L16 60 4 72l52 52 12-12 56-56V4H72zm48 50.344l-54.828 54.828-46.344-46.344L73.657 8H120v46.344z"
  }), _react.default.createElement("circle", {
    cx: 96,
    cy: 32,
    r: 8
  }));
};

var _default = SvgComponent;
exports.default = _default;