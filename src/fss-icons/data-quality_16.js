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
    d: "M13.849 5.898C13.849 2.655 11.217.049 8 .049S2.151 2.681 2.151 5.898c0 2.233 1.356 4.2 3.19 5.184L4.81 16 8 13.873 11.19 16l-.532-4.918c1.861-.984 3.191-2.951 3.191-5.184zM8 11.215a5.316 5.316 0 0 1-5.317-5.317C2.683 2.947 5.076.581 8 .581s5.317 2.393 5.317 5.317A5.299 5.299 0 0 1 8 11.215zm2.393-7.497l.798.798-3.59 3.589-1.994-1.994.798-.798 1.196 1.196 2.792-2.791z"
  }));
};

var _default = SvgComponent;
exports.default = _default;