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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M38.586 30.586L32 37.172l-6.586-6.586-2.828 2.828L29.172 40l-6.586 6.586 2.828 2.828L32 42.828l6.586 6.586 2.828-2.828L34.828 40l6.586-6.586z"
  }), _react.default.createElement("path", {
    d: "M32 18a21.889 21.889 0 0 0-12 3.566V18c0-6.617 5.383-12 12-12a11.96 11.96 0 0 1 8.481 3.519l2.833-2.833A15.954 15.954 0 0 0 32 2c-8.837 0-16 7.163-16 16v6.911c-3.717 3.94-6 9.247-6 15.089 0 12.147 9.852 22 22 22 12.151 0 22-9.853 22-22s-9.849-22-22-22zm0 42c-11.045 0-20-8.955-20-20s8.955-20 20-20 20 8.955 20 20-8.955 20-20 20z"
  }));
};

var _default = SvgComponent;
exports.default = _default;