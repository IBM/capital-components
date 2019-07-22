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
    d: "M1.646 11.707L5.939 16l-4.293 4.293 1.414 1.414L8.768 16 3.06 10.293zM10.353 6h2v20h-2zm4 3h12v2h-12zm0 4h8v2h-8zm0 4h16v2h-16zm0 4h8v2h-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;