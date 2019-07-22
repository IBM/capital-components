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
    d: "M25.931 15c-.494-3.945-3.852-7-7.931-7s-7.438 3.055-7.931 7H2v2h8.069c.493 3.945 3.852 7 7.931 7s7.437-3.055 7.931-7H62v-2H25.931zM18 18a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 18zm28 6c-4.079 0-7.438 3.055-7.931 7H2v2h36.069c.493 3.945 3.852 7 7.931 7s7.437-3.055 7.931-7H62v-2h-8.069c-.494-3.945-3.852-7-7.931-7zm0 10a2 2 0 1 1 .001-4.001A2 2 0 0 1 46 34zm-28 6c-4.079 0-7.438 3.055-7.931 7H2v2h8.069c.493 3.945 3.852 7 7.931 7s7.437-3.055 7.931-7H62v-2H25.931c-.494-3.945-3.852-7-7.931-7zm0 10a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 50z"
  }));
};

var _default = SvgComponent;
exports.default = _default;