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
    d: "M96 76c-10.371 0-18.895 7.893-19.898 18H51.898a19.895 19.895 0 0 0-4.414-10.655l35.859-35.861A19.924 19.924 0 0 0 96 52c11.047 0 20-8.953 20-20s-8.953-20-20-20c-10.371 0-18.895 7.893-19.898 18H51.898C50.894 19.893 42.371 12 32 12c-11.047 0-20 8.953-20 20s8.953 20 20 20c10.371 0 18.894-7.893 19.898-18h24.203a19.895 19.895 0 0 0 4.414 10.655L44.656 80.517A19.914 19.914 0 0 0 32 76c-11.047 0-20 8.953-20 20s8.953 20 20 20c10.371 0 18.894-7.893 19.898-18h24.203c1.004 10.107 9.527 18 19.898 18 11.047 0 20-8.953 20-20S107.047 76 96 76zM32 48c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm48-16c0-8.836 7.164-16 16-16s16 7.164 16 16-7.164 16-16 16-16-7.164-16-16zm-48 80c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;