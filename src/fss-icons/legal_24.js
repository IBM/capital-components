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
    d: "M19 4H5l-4 7c0 2.2 1.8 4 4 4s4-1.8 4-4L5.6 5H11v12l-4 3h10l-4-3V5h5.4L15 11c0 2.2 1.8 4 4 4s4-1.8 4-4l-4-7zM2.2 11L5 6l2.8 5H2.2zm14 0L19 6l2.8 5h-5.6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;