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
    d: "M16 7h-1.08A6.99 6.99 0 0 0 9 1.08V0H7v1.08A6.99 6.99 0 0 0 1.08 7H0v2h1.08A6.99 6.99 0 0 0 7 14.92V16h2v-1.08A6.99 6.99 0 0 0 14.92 9H16V7zm-7 5.899V10H7v2.899A5.016 5.016 0 0 1 3.101 9H6V7H3.101A5.016 5.016 0 0 1 7 3.101V6h2V3.101A5.016 5.016 0 0 1 12.899 7H10v2h2.899A5.016 5.016 0 0 1 9 12.899z"
  }));
};

var _default = SvgComponent;
exports.default = _default;