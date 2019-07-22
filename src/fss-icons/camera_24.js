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
    d: "M8 4.5v-1H4v1H1v16h22v-16H8zM16 18a5.5 5.5 0 1 1 .001-11.001A5.5 5.5 0 0 1 16 18z"
  }), _react.default.createElement("path", {
    d: "M16 8.5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;