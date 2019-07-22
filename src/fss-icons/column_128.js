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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M3.899 13.645v96.153H124.09V13.645H3.899zM118.08 77.747H94.042V57.715h24.038v20.032zM9.908 57.715h50.08v20.032H9.908V57.715zm50.08-26.041v20.032H9.908V31.674h50.08zm-50.08 72.114V83.756h50.08v20.032H9.908zm84.134 0V83.756h24.038v20.032H94.042zm24.038-52.083H94.042V31.674h24.038v20.031z"
  }));
};

var _default = SvgComponent;
exports.default = _default;