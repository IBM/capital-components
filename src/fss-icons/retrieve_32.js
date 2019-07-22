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
    d: "M12 22.707h8v1h-8zm0 2h8v1h-8z"
  }), _react.default.createElement("path", {
    d: "M24 28.707v-12H8v12H3v2h26v-2h-5zm-14 0v-10h12v10H10zm5-23.586v9.586h2V5.121l3.293 3.293L21.707 7 16 1.293 10.293 7l1.414 1.414z"
  }));
};

var _default = SvgComponent;
exports.default = _default;