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
    d: "M8 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 6z"
  }), _react.default.createElement("path", {
    d: "M8 4.5c3.128 0 5.122 1.942 6.218 3.5-1.096 1.558-3.09 3.5-6.218 3.5S2.878 9.558 1.782 8C2.878 6.442 4.872 4.5 8 4.5M8 3C4.41 3 1.678 5.133 0 8c1.678 2.867 4.41 5 8 5s6.322-2.133 8-5c-1.678-2.867-4.411-5-8-5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;