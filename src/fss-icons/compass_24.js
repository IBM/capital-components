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
    d: "M12 1C5.926 1 1 5.926 1 12c0 6.076 4.926 11 11 11 6.075 0 11-4.924 11-11 0-6.074-4.925-11-11-11zm2.2 13.2l-8.8 4.4 4.4-8.8 8.8-4.4-4.4 8.8z"
  }), _react.default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1
  }));
};

var _default = SvgComponent;
exports.default = _default;