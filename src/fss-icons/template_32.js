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
    d: "M18 11H4v14h14V11zm-1 1.707v10.586L11.707 18 17 12.707zm-6 4.586L5.707 12h10.586L11 17.293zm-.707.707L5 23.293V12.707L10.293 18zm.707.707L16.293 24H5.707L11 18.707zM20 11h8v14h-8z"
  }), _react.default.createElement("path", {
    d: "M1 4v24h30V4H1zm28 22H3V10h26v16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;