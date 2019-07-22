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
    d: "M60 52h-8l4-16h-8l-4 16v16h16zm24 0h-8l4-16h-8l-4 16v16h16z"
  }), _react.default.createElement("path", {
    d: "M12 12v80l24 24h80V12H12zm100 100H40V88H16V16h96v96z"
  }));
};

var _default = SvgComponent;
exports.default = _default;