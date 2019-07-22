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
    d: "M84 24l-40-8-40 8v88l40-8 40 8 40-8V16l-40 8zm-2 71.6l-36-7.2V20.479l36 7.201V95.6zM8 27.279l34-6.801V88.4L8 95.2V27.279zM86 95.6V27.68l34-6.801V88.8l-34 6.8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;