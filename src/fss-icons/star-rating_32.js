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
    d: "M31 13l-11-1-4-11-4 11-11 1 9 7-3 11 9-7 9 7-3-11 9-7zm-13.772 9.421L16 21.466l-1.228.955-4.264 3.316 1.421-5.211.351-1.287-1.052-.818-5-3.889 5.953-.541 1.265-.115.434-1.193L16 6.852l2.121 5.831.434 1.193 1.265.115 5.953.541-4.999 3.889-1.054.819.351 1.287 1.421 5.211-4.264-3.317z"
  }));
};

var _default = SvgComponent;
exports.default = _default;