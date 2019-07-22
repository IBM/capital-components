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
    d: "M16 4L8 1 1 3v19l7-2 8 3 7-2V2l-7 2zm-1 15.75L9 17.5v-14l6 2.25v14zM3 4.5l4-1v14l-4 1v-14zm14 15.25v-14l4-1V18.5l-4 1.25z"
  }));
};

var _default = SvgComponent;
exports.default = _default;