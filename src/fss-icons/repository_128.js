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
    d: "M116 40v-8h-8v-8H20v8h-8v8H4v64h120V40h-8zM24 28h80v4H24v-4zm96 72H8V44h112v56z"
  }), _react.default.createElement("path", {
    d: "M76 72H52v-4h-4v8h32v-8h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;