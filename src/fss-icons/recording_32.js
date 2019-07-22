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
    d: "M16 23c3.865 0 7-3.135 7-7V8c0-3.865-3.135-7-7-7S9 4.135 9 8v8c0 3.865 3.135 7 7 7zm-3-9h-2v-1h2a1 1 0 1 0 0-2h-2v-1h2a1 1 0 1 0 0-2h-2c0-2.757 2.243-5 5-5s5 2.243 5 5h-2a1 1 0 1 0 0 2h2v1h-2a1 1 0 1 0 0 2h2v1h-2a1 1 0 1 0 0 2h2c0 2.757-2.243 5-5 5s-5-2.243-5-5h2a1 1 0 1 0 0-2z"
  }), _react.default.createElement("path", {
    d: "M26 16h-2c0 4.411-3.589 8-8 8s-8-3.589-8-8H6c0 5.177 3.954 9.445 9 9.949V29h-3v2h8v-2h-3v-3.051c5.046-.504 9-4.772 9-9.949z"
  }));
};

var _default = SvgComponent;
exports.default = _default;