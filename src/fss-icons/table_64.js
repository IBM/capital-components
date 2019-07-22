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
    d: "M2.125 7.94v48.02h60.024V7.94H2.125zm42.016 9.004v10.004H33.137V16.944h11.004zm15.006 23.009H47.143V29.949h12.005v10.004zm-15.006 0H33.137V29.949h11.004v10.004zM5.126 29.949h25.01v10.004H5.126V29.949zm25.01-13.005v10.004H5.126V16.944h25.01zM5.126 52.958V42.954h25.01v10.004H5.126zm28.011 0V42.954h11.004v10.004H33.137zm14.006 0V42.954h12.005v10.004H47.143zm12.004-26.01H47.143V16.944h12.005v10.004z"
  }));
};

var _default = SvgComponent;
exports.default = _default;