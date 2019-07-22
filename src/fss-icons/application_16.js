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
    d: "M14.054 10.167l-1.527-1.292a6.06 6.06 0 0 1-.738.731L9.946 5V0h-4v5l-4 10 2 1 1.378-3.446a8.019 8.019 0 0 0 5.243 0L11.946 16l2-1-1.386-3.466a8.045 8.045 0 0 0 1.494-1.367zm-7.986.528L7.946 6l1.874 4.684a6.023 6.023 0 0 1-3.752.011z"
  }));
};

var _default = SvgComponent;
exports.default = _default;