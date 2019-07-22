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
  }, props), _react.default.createElement("path", {
    d: "M12 5C7.064 5 3.308 8.058 1 12c2.308 3.942 6.064 7 11 7s8.693-3.058 11-7c-2.307-3.942-6.065-7-11-7zm0 12c-4.31 0-7.009-2.713-8.624-5C4.991 9.713 7.69 7 12 7c4.311 0 7.01 2.713 8.624 5-1.614 2.287-4.313 5-8.624 5z"
  }), _react.default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 3
  }));
};

var _default = SvgComponent;
exports.default = _default;