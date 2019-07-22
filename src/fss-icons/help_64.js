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
    d: "M32 4C16.537 4 4 16.537 4 32s12.537 28 28 28 28-12.537 28-28S47.463 4 32 4zm0 2c5.123 0 9.891 1.51 13.922 4.078l-7.35 7.35A15.888 15.888 0 0 0 32 16c-2.344 0-4.565.519-6.572 1.428l-7.35-7.35C22.109 7.51 26.877 6 32 6zM17.428 38.572l-7.35 7.35C7.51 41.892 6 37.123 6 32s1.51-9.892 4.078-13.922l7.35 7.35A15.884 15.884 0 0 0 16 32c0 2.344.519 4.564 1.428 6.572zM32 58c-5.123 0-9.891-1.51-13.922-4.078l7.35-7.35A15.884 15.884 0 0 0 32 48c2.344 0 4.564-.519 6.572-1.428l7.35 7.35C41.891 56.49 37.123 58 32 58zm13.043-20.943a14.04 14.04 0 0 1-7.984 7.984A13.923 13.923 0 0 1 32 46c-1.785 0-3.488-.348-5.059-.959A14.04 14.04 0 0 1 18 32a14.045 14.045 0 0 1 14-14 14.045 14.045 0 0 1 14 14c0 1.785-.348 3.486-.957 5.057zm1.529 1.515A15.904 15.904 0 0 0 48 32a15.9 15.9 0 0 0-1.428-6.572l7.35-7.35C56.49 22.108 58 26.877 58 32s-1.51 9.892-4.078 13.922l-7.35-7.35z"
  }));
};

var _default = SvgComponent;
exports.default = _default;