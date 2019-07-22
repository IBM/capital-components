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
    d: "M46 32c4.253-2.496 8-6.67 8-11.697C54 12.519 48.336 6 40 6H10v52h30c8.336 0 14-6.52 14-14.303 0-5.027-3.747-9.201-8-11.697zM30 54h-8V34h8c5.961 0 10 4.41 10 10.104C40 49.799 35.961 54 30 54zm0-24h-8V10h8c5.961 0 10 4.41 10 10.104C40 25.799 35.961 30 30 30z"
  }));
};

var _default = SvgComponent;
exports.default = _default;