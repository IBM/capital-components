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
    d: "M3 3v26h26V3H3zm16 2v6h-6V5h6zm0 8v6h-6v-6h6zM5 5h6v6H5V5zm0 8h6v6H5v-6zm0 14v-6h6v6H5zm8 0v-6h6v6h-6zm14 0h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6V5h6v6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;