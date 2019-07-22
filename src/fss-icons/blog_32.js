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
    d: "M15 13h-2l1-4h-2l-1 4v4h4zm6 0h-2l1-4h-2l-1 4v4h4z"
  }), _react.default.createElement("path", {
    d: "M3 3v20l6 6h20V3H3zm24 24H10v-5H5V5h22v22z"
  }));
};

var _default = SvgComponent;
exports.default = _default;