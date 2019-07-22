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
    d: "M.539 5H5V.581A7.983 7.983 0 0 0 .539 5z"
  }), _react.default.createElement("path", {
    d: "M8 0c-.339 0-.672.028-1 .069V7H.069A8.047 8.047 0 0 0 0 8a8 8 0 1 0 8-8zm5.91 7H9V2.09A6.008 6.008 0 0 1 13.91 7zM8 14c-2.967 0-5.431-2.167-5.91-5h11.82c-.479 2.833-2.943 5-5.91 5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;