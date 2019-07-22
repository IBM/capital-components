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
    d: "M32 20c-6.627 0-12 5.369-12 12s5.373 12 12 12c6.631 0 12-5.369 12-12s-5.369-12-12-12zm0 16c-2.211 0-4-1.79-4-4s1.789-4 4-4c2.211 0 4 1.79 4 4s-1.789 4-4 4z"
  }), _react.default.createElement("path", {
    d: "M32 14C18.539 14 8.293 21.25 2 32c6.293 10.75 16.539 18 30 18 13.461 0 23.707-7.25 30-18-6.293-10.75-16.539-18-30-18zm0 34c-11.443 0-21.226-5.67-27.664-16C10.774 21.67 20.557 16 32 16c11.443 0 21.226 5.67 27.664 16C53.226 42.33 43.443 48 32 48z"
  }));
};

var _default = SvgComponent;
exports.default = _default;