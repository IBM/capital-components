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
    d: "M2.137 7.995v48.01h60.012V7.995H2.137zm42.008 9.002v10.002H33.143V16.997h11.002zm-14.003 0v10.002H5.137V16.997h25.005zM5.137 53.004V43.002h25.005v10.002H5.137zm28.006 0V43.002h11.002v10.002H33.143zm14.003 0V43.002h12.002v10.002H47.146zm12.002-26.005H47.146V16.997h12.002v10.002z"
  }));
};

var _default = SvgComponent;
exports.default = _default;