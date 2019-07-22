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
    d: "M10.9 4C9.5 3.3 8 3 6.5 3.4c-.2.1-.3.4-.2.6s.3.3.5.3c.7-.3 1.4-.3 2.1-.1-1.1.5-2.3 1.8-3.3 3.5-.3.6-.7 1.3-.9 2-.2-.3-.4-.6-.6-.8-.6-.9-.6-1.7-.4-2.2.3-.5 1.1-.9 2.1-.8.2 0 .4-.2.5-.4 0-.2-.2-.5-.4-.5-1.4-.2-2.4.3-2.9 1.2-.5.8-.3 1.9.3 3 .3.5.7.9 1.1 1.4-.1.3-.1.7-.2 1v.7c-.5-.6-.8-1.3-1-2-.1-.3-.3-.4-.5-.4-.2.1-.3.3-.3.5.4 1.6 1.3 2.9 2.7 3.8.9.5 1.9.8 2.9.8 2 0 3.9-1 5-2.9 1.6-2.8.6-6.4-2.1-8.1zM6.3 8.1c1.5-2.6 3.3-3.8 4.1-3.3 2.3 1.4 3.1 4.5 1.8 6.9-.7 1.2-3.2 1-5.5-.3-.5-.3-1-.7-1.4-1 .3-.8.6-1.5 1-2.3zm-.8 5.4c-.4-.2-.6-.9-.5-1.8 0-.1.1-.3.1-.4l1.2.8c1.4.8 2.8 1.2 4 1.2h.4c-1.4 1-3.5 1.2-5.2.2zM2.1 5.2L.6 4.3c-.2-.1-.4-.1-.5.1-.2.2-.1.5.1.6l1.5.9c.1.1.1.1.2.1s.3-.1.3-.2c.2-.3.1-.5-.1-.6zM8 2.4c.2 0 .4-.2.4-.4V.4C8.4.2 8.2 0 8 0s-.4.2-.4.4v1.5c0 .3.2.5.4.5zm3.3.9c.1.1.1.1.2.1s.3-.1.3-.2l.8-1.4c.1-.2.1-.5-.1-.5-.2-.1-.5-.1-.6.1l-.8 1.4c0 .1 0 .3.2.5zm-6.6 0c-.1 0-.1.1-.2.1s-.3-.1-.3-.2l-.9-1.4c-.1-.2 0-.5.2-.6s.5-.1.6.1l.8 1.4c0 .2 0 .4-.2.6zm11.2 1.1c-.1-.2-.4-.3-.6-.1l-1.5.9c-.2.1-.3.4-.1.6 0 .1.2.2.3.2.1 0 .1 0 .2-.1l1.5-.9c.3-.1.4-.4.2-.6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;