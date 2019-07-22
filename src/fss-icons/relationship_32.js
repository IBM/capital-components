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
    d: "M24 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6c1.104 0 2 .897 2 2 0 1.102-.896 2-2 2s-2-.898-2-2c0-1.103.896-2 2-2zm3 8h-6l-5 5-5-5H5a2 2 0 0 0-2 2v8l2 2v7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V16l5 5 5-5v14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7l2-2v-8a2 2 0 0 0-2-2zM8 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6c1.104 0 2 .897 2 2 0 1.102-.896 2-2 2s-2-.898-2-2c0-1.103.897-2 2-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;