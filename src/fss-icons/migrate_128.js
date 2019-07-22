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
    d: "M100 65.171l-5.656 5.657L107.516 84H85.172V36l-32-32h-48v120h80V92h22.344l-13.172 13.171 5.656 5.657L122.828 88 100 65.171zM81.172 120h-72V8h40v32h32v44h-32v8h32v28z"
  }));
};

var _default = SvgComponent;
exports.default = _default;