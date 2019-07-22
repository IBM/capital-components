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
    d: "M0 1.562v12.776h15.97V1.562H0zm11.179 2.396V6.62H8.251V3.958h2.928zm3.992 6.121h-3.194V7.418h3.194v2.661zm-3.992 0H8.251V7.418h2.928v2.661zM.798 7.418h6.654v2.662H.798V7.418zm6.654-3.46V6.62H.798V3.958h6.654zM.798 13.539v-2.662h6.654v2.662H.798zm7.453 0v-2.662h2.928v2.662H8.251zm3.726 0v-2.662h3.194v2.662h-3.194zm3.194-6.92h-3.194V3.958h3.194v2.661z"
  }));
};

var _default = SvgComponent;
exports.default = _default;