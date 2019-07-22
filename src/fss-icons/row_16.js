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
    d: "M0 1.6v12.8h16V1.6H0zM11.2 4v2.667H8.267V4H11.2zM7.467 4v2.667H.8V4h6.667zM.8 13.6v-2.667h6.667V13.6H.8zm7.467 0v-2.667H11.2V13.6H8.267zm3.733 0v-2.667h3.2V13.6H12zm3.2-6.933H12V4h3.2v2.667z"
  }));
};

var _default = SvgComponent;
exports.default = _default;