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
    d: "M32 4v28H4c0 15.462 12.538 28 28 28s28-12.538 28-28S47.462 4 32 4zm2 2.076C47.406 7.101 58 18.336 58 32H34V6.076zM32 58C18.336 58 7.101 47.406 6.076 34h51.839C56.89 47.404 45.663 58 32 58z"
  }), _react.default.createElement("path", {
    d: "M28 4.318C15.747 6.076 6.076 15.747 4.318 28H28V4.318z"
  }));
};

var _default = SvgComponent;
exports.default = _default;