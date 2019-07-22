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
    d: "M84 12c-8 0-16 4-20 8-4-4-12-8-20-8H12v96h32c8 0 16 4 20 8 4-4 12-8 20-8h32V12H84zm-20 98.769C59.129 107.188 51.684 104 44 104H16V16h28c6.79 0 13.778 3.435 17.172 6.829L64 25.657v85.112zM104 80H76v-4h28v4zm0-12H76v-4h28v4zm0-12H76v-4h28v4zm0-12H76v-4h28v4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;