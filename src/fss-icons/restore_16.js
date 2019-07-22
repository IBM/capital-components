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
    d: "M0 12l3.991 4L8 12l-1.5-1.5L5 12V6.462C5 4.001 7.078 2 9.538 2S14 4.001 14 6.462a4.468 4.468 0 0 1-1.458 3.298l1.348 1.479A6.478 6.478 0 0 0 16 6.462C16 2.899 13.101 0 9.538 0S3 2.899 3 6.46V12l-1.5-1.5L0 12z"
  }), _react.default.createElement("circle", {
    cx: 9.5,
    cy: 6.451,
    r: 2.5
  }));
};

var _default = SvgComponent;
exports.default = _default;