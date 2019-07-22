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
    d: "M9.5 1.293a6.47 6.47 0 0 0-6.462 6.46v3.002l-1.5-1.5-1.5 1.5 3.991 3.951 4.009-3.951-1.5-1.5-1.5 1.5v-3c0-2.46 2.001-4.462 4.462-4.462s4.462 2.001 4.462 4.462a4.468 4.468 0 0 1-1.458 3.298l1.348 1.479a6.476 6.476 0 0 0 2.11-4.777A6.47 6.47 0 0 0 9.5 1.293z"
  }));
};

var _default = SvgComponent;
exports.default = _default;