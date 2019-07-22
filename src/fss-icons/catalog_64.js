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
    d: "M42 6c-4 0-8 2-10 4-2-2-6-4-10-4H6v48h16c4 0 8 2 10 4 2-2 6-4 10-4h16V6H42zM32 55.384C29.564 53.594 25.842 52 22 52H8V8h14c3.396 0 6.889 1.718 8.586 3.414L32 12.829v42.555zM52 40H38v-2h14v2zm0-6H38v-2h14v2zm0-6H38v-2h14v2zm0-6H38v-2h14v2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;