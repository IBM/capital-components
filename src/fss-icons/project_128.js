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
    d: "M100 4L69.414 34.586l-2.828 2.828-5.172 5.172-2.828 2.828-5.172 5.172-2.828 2.828-5.172 5.172-2.828 2.828-5.172 5.172-2.828 2.828-5.172 5.172-2.828 2.828L16 88 4 100l24 24 12-12 84-84-24-24zM37.172 109.172L18.828 90.828l10.586-10.586 9.172 9.172 2.828-2.828-9.172-9.172 5.172-5.172 9.172 9.172 2.828-2.828-9.172-9.172 5.172-5.172 9.172 9.172 2.828-2.828-9.172-9.172 5.172-5.172 9.172 9.172 2.828-2.828-9.172-9.172 5.172-5.172 9.172 9.172 2.828-2.828-9.172-9.172 5.172-5.172 9.172 9.172 2.828-2.828-9.172-9.172L100 9.657 118.344 28l-81.172 81.172z"
  }), _react.default.createElement("circle", {
    cx: 100,
    cy: 28,
    r: 4
  }));
};

var _default = SvgComponent;
exports.default = _default;