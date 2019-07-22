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
    d: "M24 45.414h16v2H24zm0 4h16v2H24z"
  }), _react.default.createElement("path", {
    d: "M48 57.414v-24H16v24H6v4h52v-4H48zm-30-22h28v22H18v-22zm12-25.171v19.171h4V10.243l6.586 6.585L43.414 14 32 2.586 20.586 14l2.828 2.828z"
  }));
};

var _default = SvgComponent;
exports.default = _default;