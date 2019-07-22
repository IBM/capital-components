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
    d: "M12.364 0L9.067 3.733l1.066 1.6-4.799 4.8-1.601-1.067L0 11.636 1.455 16c2.666-1.066 6.012-3.2 8.678-5.866C12.8 7.467 14.933 4.121 16 1.455L12.364 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;