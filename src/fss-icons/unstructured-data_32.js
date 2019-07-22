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
    d: "M5.684 1.187c-2.507 0-4.558 2.051-4.558 4.558s2.051 4.558 4.558 4.558 4.558-2.051 4.558-4.558-2.051-4.558-4.558-4.558zm0 7.407c-1.481 0-2.849-1.367-2.849-2.849s1.367-2.849 2.849-2.849 2.849 1.367 2.849 2.849-1.368 2.849-2.849 2.849zM20.497 16c0 2.507-2.051 4.558-4.558 4.558S11.381 18.507 11.381 16s2.051-4.558 4.558-4.558 4.558 2.051 4.558 4.558zM5.684 21.697c-2.507 0-4.558 2.051-4.558 4.558s2.051 4.558 4.558 4.558 4.558-2.051 4.558-4.558-2.051-4.558-4.558-4.558zm0 7.407c-1.481 0-2.849-1.367-2.849-2.849s1.367-2.849 2.849-2.849 2.849 1.367 2.849 2.849-1.368 2.849-2.849 2.849zm20.51-18.801c2.507 0 4.558-2.051 4.558-4.558s-2.051-4.558-4.558-4.558-4.558 2.051-4.558 4.558 2.051 4.558 4.558 4.558zm0-7.407c1.481 0 2.849 1.367 2.849 2.849s-1.367 2.849-2.849 2.849c-1.481 0-2.849-1.367-2.849-2.849s1.368-2.849 2.849-2.849zm0 18.801c-2.507 0-4.558 2.051-4.558 4.558s2.051 4.558 4.558 4.558 4.558-2.051 4.558-4.558-2.051-4.558-4.558-4.558zm0 7.407c-1.481 0-2.849-1.367-2.849-2.849s1.367-2.849 2.849-2.849c1.481 0 2.849 1.367 2.849 2.849s-1.368 2.849-2.849 2.849z"
  }));
};

var _default = SvgComponent;
exports.default = _default;