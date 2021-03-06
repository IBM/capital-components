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
    d: "M58 54.343l-9.171-9.172-5.658 5.658L58 65.657l26.829-26.828-5.658-5.658z"
  }), _react.default.createElement("path", {
    d: "M108 48c0-24.295-19.697-44-44-44-24.295 0-44 19.705-44 44 0 16.841 9.473 31.471 23.376 38.866L40 124l24-16 24 16-3.376-37.133C98.529 79.473 108 64.843 108 48zM64 88c-22.091 0-40-17.909-40-40S41.909 8 64 8s40 17.909 40 40-17.909 40-40 40z"
  }));
};

var _default = SvgComponent;
exports.default = _default;