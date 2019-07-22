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
    d: "M5 20h14v2H5zM16 2v10c0 2.134-1.866 4-4 4s-4-1.866-4-4V2H5.045v10.045a6.955 6.955 0 0 0 13.91 0L19 2h-3z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;