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
  }, props), _react.default.createElement("circle", {
    cx: 14,
    cy: 10,
    r: 3
  }), _react.default.createElement("path", {
    d: "M14 1c-4.97 0-9 4.167-9 9.136V19l-2.5-2.5L1 18l5 5 5-5-1.5-1.5L7 19v-8.864C7 6.269 10.133 3 14 3s7.013 3.146 7.013 7.013a7.034 7.034 0 0 1-2.29 5.185l1.348 1.478A9.058 9.058 0 0 0 23 10a9 9 0 0 0-9-9z"
  }));
};

var _default = SvgComponent;
exports.default = _default;