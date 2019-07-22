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
    d: "M13.479 6.29C13.367 3.904 11.413 2 9 2 6.667 2 4.771 3.782 4.545 6.055 4.365 6.03 4.187 6 4 6a4 4 0 0 0 0 8h8a3.996 3.996 0 1 0 1.479-7.71z"
  }));
};

var _default = SvgComponent;
exports.default = _default;