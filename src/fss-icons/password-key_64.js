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
    d: "M50 2L25.223 26.776A17.984 17.984 0 0 0 20 26c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18c0-1.817-.275-3.57-.777-5.224L42 34v-4h4l16-16V2H50zm10 11.171L45.172 28H40v5.171l-4.191 4.19-.848.848.348 1.147C35.768 40.868 36 42.43 36 44c0 8.822-7.178 16-16 16S4 52.822 4 44s7.178-16 16-16a16 16 0 0 1 4.643.69l1.146.348.848-.848L50.828 4H60v9.171z"
  }), _react.default.createElement("circle", {
    cx: 16,
    cy: 48,
    r: 4
  }), _react.default.createElement("path", {
    d: "M41.293 21.293l12-12 1.414 1.414-12 12z"
  }));
};

var _default = SvgComponent;
exports.default = _default;