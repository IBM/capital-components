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
    d: "M48 68v-8H21.657l9.171-9.171-5.656-5.658L6.343 64l18.829 18.829 5.656-5.658L21.657 68zm54.828-22.829l-5.656 5.658L106.343 60H80v8h26.343l-9.171 9.171 5.656 5.658L121.657 64zM68 106.343V80h-8v26.343l-9.172-9.172-5.656 5.658L64 121.657l18.828-18.828-5.656-5.658zm-8-84.686V48h8V21.657l9.172 9.172 5.656-5.658L64 6.343 45.172 25.171l5.656 5.658z"
  }));
};

var _default = SvgComponent;
exports.default = _default;