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
    d: "M22.466 4.534L19 8a2.122 2.122 0 0 1-3-3l3.466-3.466A5.974 5.974 0 0 0 17 1a6 6 0 0 0-5.741 7.741l-9.43 9.43a2.828 2.828 0 1 0 4 4l9.43-9.43A6 6 0 0 0 23 7c0-.88-.194-1.713-.534-2.466zM4 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;