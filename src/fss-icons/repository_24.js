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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M21 8V6h-1V3H4v3H3v2H1v13h22V8h-2zM6 5h12v1H6V5zm15 14H3v-9h18v9z"
  }), _react.default.createElement("path", {
    d: "M16 16v-3h-2v1h-4v-1H8v3z"
  }));
};

var _default = SvgComponent;
exports.default = _default;