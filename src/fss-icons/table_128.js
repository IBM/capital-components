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
    d: "M3.976 15.931v96.038h120.048V15.931H3.976zM88.01 33.938v20.008H66.001V33.938H88.01zm30.011 46.018h-24.01V59.948h24.01v20.008zm-30.011 0H66.001V59.948H88.01v20.008zM9.979 59.948h50.02v20.008H9.979V59.948zm50.019-26.01v20.008H9.979V33.938h50.019zM9.979 105.967V85.959h50.02v20.008H9.979zm56.022 0V85.959H88.01v20.008H66.001zm28.011 0V85.959h24.01v20.008h-24.01zm24.009-52.021h-24.01V33.938h24.01v20.008z"
  }));
};

var _default = SvgComponent;
exports.default = _default;