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
    d: "M29 27.171l-4.586-4.585-2.828 2.828L29 32.829l13.414-13.415-2.828-2.828z"
  }), _react.default.createElement("path", {
    d: "M54 24c0-12.148-9.849-22-22-22-12.147 0-22 9.852-22 22 0 8.421 4.736 15.735 11.688 19.433L20 62l12-8 12 8-1.688-18.566C49.265 39.736 54 32.421 54 24zM32 44c-11.046 0-20-8.954-20-20S20.954 4 32 4s20 8.954 20 20-8.954 20-20 20z"
  }));
};

var _default = SvgComponent;
exports.default = _default;