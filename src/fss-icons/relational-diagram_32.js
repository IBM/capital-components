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
    d: "M8.533 16V6.884h1.709v2.849h13.673v1.709H10.242v2.849h11.394V16H14.8v2.849h9.116v1.709H14.8v2.849h6.837v1.709H13.09V16H8.533zM30.752 1.187v29.626H7.963l-6.837-6.837V1.187h29.626zm-1.709 1.709H2.835v19.94h6.267v6.267h19.94V2.896z"
  }));
};

var _default = SvgComponent;
exports.default = _default;