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
    d: "M50 2L34.707 17.293l-1.414 1.414-2.586 2.586-1.414 1.414-2.586 2.586-1.414 1.414-2.586 2.586-1.414 1.414-2.586 2.586-1.414 1.414-2.586 2.586-1.414 1.414L8 44l-6 6 12 12 6-6 42-42L50 2zM18.586 54.586l-9.172-9.172 5.293-5.293 4.586 4.586 1.414-1.414-4.586-4.586 2.586-2.586 4.586 4.586 1.414-1.414-4.586-4.586 2.586-2.586 4.586 4.586 1.414-1.414-4.586-4.586 2.586-2.586 4.586 4.586 1.414-1.414-4.586-4.586 2.586-2.586 4.586 4.586 1.414-1.414-4.586-4.586 2.586-2.586 4.586 4.586 1.414-1.414-4.586-4.586L50 4.829 59.172 14 18.586 54.586z"
  }), _react.default.createElement("circle", {
    cx: 50,
    cy: 14,
    r: 2
  }));
};

var _default = SvgComponent;
exports.default = _default;