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
    d: "M14.5 21.586l-2.293-2.293-1.414 1.414 3.707 3.707 6.707-6.707-1.414-1.414z"
  }), _react.default.createElement("path", {
    d: "M24 12.466V9A8 8 0 0 0 8 9v3.467A10.95 10.95 0 0 0 5 20c0 6.074 4.926 11 11 11 6.076 0 11-4.926 11-11 0-2.919-1.145-5.564-3-7.534zM10 9c0-3.309 2.691-6 6-6s6 2.691 6 6v1.788A10.94 10.94 0 0 0 16 9a10.94 10.94 0 0 0-6 1.788V9zm6 20c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9z"
  }));
};

var _default = SvgComponent;
exports.default = _default;