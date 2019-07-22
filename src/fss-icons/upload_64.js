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
    d: "M30 10.243v33.171h4V10.243l12.588 12.586 2.828-2.828L32.002 2.585 14.588 20.001l2.828 2.828z"
  }), _react.default.createElement("path", {
    d: "M60 37.415v16H4v-16H2v24h60v-24z"
  }));
};

var _default = SvgComponent;
exports.default = _default;