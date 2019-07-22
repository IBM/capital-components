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
    d: "M15.989 8.011a.84.84 0 0 1-.856.856c-.485 0-.856-.371-.856-.856s.371-.856.856-.856a.84.84 0 0 1 .856.856zm-2.282 2.853c-1.113 0-1.997.885-1.997 1.997s.885 1.997 1.997 1.997 1.997-.885 1.997-1.997-.885-1.997-1.997-1.997zm-5.736 1.598A3.986 3.986 0 0 1 4.005 16 4.007 4.007 0 0 1 .01 12.005c0-1.141.485-2.168 1.227-2.882C.838 8.268.581 7.297.581 6.299.581 2.847 3.406.022 6.858.022s6.277 2.825 6.277 6.277a6.254 6.254 0 0 1-5.164 6.163zm4.309-6.163c0-2.996-2.425-5.421-5.421-5.421S1.437 3.303 1.437 6.299c0 .827.2 1.598.514 2.283a3.904 3.904 0 0 1 2.054-.571 3.972 3.972 0 0 1 3.966 3.595c2.454-.514 4.309-2.711 4.309-5.307z"
  }));
};

var _default = SvgComponent;
exports.default = _default;