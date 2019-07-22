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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M13.467 4c-3.052 0-5.64 2.242-6.141 5.153a5.571 5.571 0 0 0-.826-.062c-3.033 0-5.5 2.447-5.5 5.455S3.467 20 6.5 20h11c3.033 0 5.5-2.447 5.5-5.455a5.436 5.436 0 0 0-3.339-5.016C19.335 6.391 16.705 4 13.467 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;