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
    d: "M16 21c5.523 0 10-4.477 10-10S21.523 1 16 1 6 5.477 6 11s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm8 20H8a4 4 0 0 0-4 4v4h24v-4a4 4 0 0 0-4-4z"
  }), _react.default.createElement("path", {
    d: "M21.207 8.707l-1.414-1.414-5.293 5.293-2.293-2.293-1.414 1.414 3.707 3.707z"
  }));
};

var _default = SvgComponent;
exports.default = _default;