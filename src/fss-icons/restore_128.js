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
    d: "M75.414 15.172c-26.467 0-48 21.533-48 48v34.344L10.242 80.344 4.586 86l26.828 26.828L58.242 86l-5.656-5.656-17.172 17.172V63.172c0-22.057 17.943-40 40-40s40 17.943 40 40-17.943 40-40 40v8c26.467 0 48-21.533 48-48s-21.533-48-48-48z"
  }), _react.default.createElement("path", {
    d: "M80.586 74l5.656-5.656-6.586-6.586 21.172-21.172L98 37.758 76.828 58.93 66.242 48.344 60.586 54l10.586 10.586L66 69.758l2.828 2.828L74 67.414z"
  }));
};

var _default = SvgComponent;
exports.default = _default;