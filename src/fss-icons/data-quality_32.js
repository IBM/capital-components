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
    d: "M26.962 12.066c0-6.079-4.933-10.962-10.962-10.962S5.038 6.037 5.038 12.066c0 4.185 2.541 7.873 5.979 9.716L10.021 31 16 27.014 21.979 31l-.997-9.218c3.489-1.844 5.98-5.531 5.98-9.716zM16 22.031c-5.531 0-9.965-4.484-9.965-9.965C6.035 6.535 10.519 2.1 16 2.1s9.965 4.484 9.965 9.965A9.93 9.93 0 0 1 16 22.031zM20.484 7.98l1.495 1.495-6.727 6.727-3.737-3.737 1.495-1.495 2.242 2.242 5.232-5.232z"
  }));
};

var _default = SvgComponent;
exports.default = _default;