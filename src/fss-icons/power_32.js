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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M18 7.18V1h-4v6.18C8.326 8.134 4 13.055 4 19c0 6.628 5.371 12 12 12s12-5.372 12-12c0-5.945-4.326-10.866-10-11.82zM16 29c-5.514 0-10-4.486-10-10 0-4.829 3.441-8.869 8-9.798V19h4V9.202c4.559.929 8 4.969 8 9.798 0 5.514-4.486 10-10 10z"
  }));
};

var _default = SvgComponent;
exports.default = _default;