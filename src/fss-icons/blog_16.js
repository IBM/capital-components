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
    d: "M0 0v12l4 4h12V0H0zm14 14H5v-3H2V2h12v12z"
  }), _react.default.createElement("path", {
    d: "M7 6H5l1-2H5L4 6v3h3zm5 0h-2l1-2h-1L9 6v3h3z"
  }));
};

var _default = SvgComponent;
exports.default = _default;