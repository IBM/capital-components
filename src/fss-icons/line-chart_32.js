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
    d: "M30.752 25.381v1.481H1.126V5.137h1.481v20.244h28.145zM6.558 21.925a2.445 2.445 0 0 0 2.469-2.469c0-.494-.148-.988-.395-1.383l3.456-4.246c.296.099.593.198.889.198.593 0 1.136-.198 1.531-.543l3.506 2.321c-.049.247-.099.444-.099.691 0 1.383 1.086 2.469 2.469 2.469s2.469-1.086 2.469-2.469c0-.494-.148-.889-.346-1.284l3.802-4.345c.296.148.642.198.988.198 1.383 0 2.469-1.086 2.469-2.469s-1.086-2.469-2.469-2.469-2.469 1.086-2.469 2.469c0 .494.148.889.346 1.284l-3.802 4.345c-.296-.148-.642-.198-.988-.198-.593 0-1.136.198-1.531.543l-3.506-2.321c.049-.198.099-.444.099-.691 0-1.383-1.086-2.469-2.469-2.469s-2.469 1.086-2.469 2.469c0 .494.148.988.395 1.383l-3.456 4.246c-.247-.148-.543-.198-.889-.198-1.383 0-2.469 1.086-2.469 2.469s1.086 2.469 2.469 2.469z"
  }));
};

var _default = SvgComponent;
exports.default = _default;