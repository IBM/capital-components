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
    d: "M6 6v52h52V6H6zm2 2h48v40H8V8z"
  }), _react.default.createElement("path", {
    d: "M26 18v15.538A5.972 5.972 0 0 0 22 32c-3.311 0-6 2.688-6 6s2.689 6 6 6c3.31 0 6-2.688 6-6V21.637l18-3.273v11.175A5.968 5.968 0 0 0 42 28c-3.311 0-6 2.688-6 6s2.689 6 6 6c3.31 0 6-2.688 6-6V12l-22 4v2zm-4 24c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4zm20-4c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;