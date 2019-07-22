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
    d: "M56 42L38 24l4.975-8.291c.3.181.648.291 1.025.291a2 2 0 1 0-2-2c0 .377.11.725.291 1.025L34 20 16 2c-5.1 5.098-8 12.221-8 20 0 7.78 2.9 14.902 8 20 5.096 5.099 12.219 8 20 8 7.779 0 14.902-2.901 20-8zM10 22c0-6.492 2.138-12.494 6.058-17.113l37.056 37.056C48.493 45.862 42.492 48 36 48c-7.207 0-13.808-2.633-18.586-7.414C12.633 35.807 10 29.206 10 22zm12 32h20v8H22z"
  }));
};

var _default = SvgComponent;
exports.default = _default;