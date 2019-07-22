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
    d: "M18 14a3.991 3.991 0 0 0-3.859 3H9.859a3.932 3.932 0 0 0-.446-1.06l6.527-6.527A3.962 3.962 0 0 0 18 10a4 4 0 0 0 0-8c-1.862 0-3.412 1.278-3.859 3H9.859A3.991 3.991 0 0 0 6 2a4 4 0 0 0 0 8c1.862 0 3.412-1.278 3.859-3h4.283c.091.349.228.677.404.982l-6.509 6.592A3.97 3.97 0 0 0 6 14a4 4 0 0 0 0 8c1.862 0 3.412-1.278 3.859-3h4.283a3.991 3.991 0 0 0 3.859 3A4 4 0 1 0 18 14zM6 8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm12-4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;