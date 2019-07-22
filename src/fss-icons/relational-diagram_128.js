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
    d: "M33.988 64V27.062h6.926v11.543h55.407v6.926H40.914v11.543h46.172V64H59.383v11.543h36.938v6.926H59.383v11.543h27.703v6.926H52.457V64H33.988zm90.036-60.024v120.048H31.679L3.976 96.321V3.976h120.048zm-6.926 6.926H10.902v80.801h25.395v25.395h80.801V10.902z"
  }));
};

var _default = SvgComponent;
exports.default = _default;