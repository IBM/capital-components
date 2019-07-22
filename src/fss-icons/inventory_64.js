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
    d: "M48 30V6H16v24H6v28h52V30H48zM18 8h28v22H18V8zm38 48H8V32h48v24z"
  }), _react.default.createElement("path", {
    d: "M24 18h16v2H24zm0 4h16v2H24zm14 22H26v-2h-2v4h16v-4h-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;