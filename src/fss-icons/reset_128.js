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
    d: "M75.414 19.172c-26.467 0-48 21.533-48 48v26.343L10.243 76.343 4.586 82l26.829 26.828L58.243 82l-5.657-5.657-17.172 17.172V67.172c0-22.056 17.944-40 40-40s40 17.944 40 40c0 10.683-4.161 20.728-11.715 28.285l5.657 5.656c9.065-9.068 14.058-21.122 14.058-33.941 0-26.468-21.532-48-48-48z"
  }));
};

var _default = SvgComponent;
exports.default = _default;