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
    d: "M16 1C9.924 1 5 5.924 5 12s4.924 11 11 11 11-4.924 11-11S22.076 1 16 1zm0 20c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9zm-4 3h8v4h-8zm4 7a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"
  }), _react.default.createElement("path", {
    d: "M16 19l4-6h-8l4 6zm0-1.803L13.868 14h4.264L16 17.197z"
  }));
};

var _default = SvgComponent;
exports.default = _default;