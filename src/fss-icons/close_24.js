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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M12 1C5.926 1 1 5.926 1 12s4.926 11 11 11 11-4.926 11-11S18.074 1 12 1zm5.25 14.75l-1.5 1.5L12 13.5l-3.75 3.75-1.5-1.5L10.5 12 6.75 8.25l1.5-1.5L12 10.5l3.75-3.75 1.5 1.5L13.5 12l3.75 3.75z"
  }));
};

var _default = SvgComponent;
exports.default = _default;