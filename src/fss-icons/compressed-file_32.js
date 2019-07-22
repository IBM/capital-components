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
    d: "M3 3v26h26V3H3zm2 2h22v18H5V5z"
  }), _react.default.createElement("path", {
    d: "M15 9h2v1h-2zm0-2h2v1h-2zm0 4h2v1h-2zm0 2h2v1h-2zm0 2l-1 4v2h4v-2l-1-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;