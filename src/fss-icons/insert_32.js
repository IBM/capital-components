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
    d: "M29.439 22.586l-4.293 4.293V13.293c0-6.617-5.383-12-12-12s-12 5.383-12 12h2c0-5.514 4.486-10 10-10s10 4.486 10 10v13.586l-4.293-4.293L17.439 24l6.707 6.707L30.853 24l-1.414-1.414z"
  }));
};

var _default = SvgComponent;
exports.default = _default;