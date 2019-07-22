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
    d: "M5.828 12.828h3v2h-3z"
  }), _react.default.createElement("circle", {
    cx: 6.828,
    cy: 5.828,
    r: 5
  }), _react.default.createElement("path", {
    d: "M5 14.828h4.828v1H5zm6.071-13.242a6.007 6.007 0 0 1 0 8.485c-1.133 1.133-2.64 1.757-4.243 1.757s-3.109-.624-4.243-1.757l-1.414 1.414c1.562 1.562 3.609 2.343 5.657 2.343s4.095-.781 5.657-2.343a8 8 0 0 0 0-11.314l-1.414 1.415z"
  }));
};

var _default = SvgComponent;
exports.default = _default;