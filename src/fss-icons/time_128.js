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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M64 8C33.072 8 8 33.072 8 64s25.072 56 56 56 56-25.072 56-56S94.928 8 64 8zm0 108c-28.673 0-52-23.327-52-52s23.327-52 52-52 52 23.327 52 52-23.327 52-52 52z"
  }), _react.default.createElement("path", {
    d: "M90.586 34.586L65.415 59.757 50.829 45.171l-5.658 5.658 14.586 14.586-5.171 5.171 2.828 2.828 5.171-5.171 6.586 6.586 5.658-5.658-6.586-6.586 25.171-25.171z"
  }));
};

var _default = SvgComponent;
exports.default = _default;