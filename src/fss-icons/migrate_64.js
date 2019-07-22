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
    d: "M50 32.586l-2.828 2.828L53.758 42H42.586V18l-16-16h-24v60h40V46h11.172l-6.586 6.586L50 55.414 61.414 44 50 32.586zM40.586 60h-36V4h20v16h16v22h-16v4h16v14z"
  }));
};

var _default = SvgComponent;
exports.default = _default;