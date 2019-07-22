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
    d: "M9.437 6.461V4.264H1.016v15.378h21.969V6.461H9.437zm12.449 12.083H2.114V8.658h19.772v9.886zM6.142 16.713H5.043v-6.224h1.098v6.224zm7.689 0h-1.098v-6.224h1.098v6.224zm-4.394 0c1.208 0 2.197-.769 2.197-3.149 0-2.343-1.025-3.112-2.197-3.112s-2.197.769-2.197 3.112c0 2.417.989 3.149 2.197 3.149zm0-5.236c.989 0 .989 1.465.989 2.087 0 .659 0 2.16-.989 2.16s-.989-1.465-.989-2.16c0-.622 0-2.087.989-2.087zm7.689 5.236c1.208 0 2.197-.769 2.197-3.149 0-2.343-1.025-3.076-2.197-3.076s-2.197.769-2.197 3.076c0 2.38 1.025 3.149 2.197 3.149zm0-5.236c.989 0 .989 1.465.989 2.087 0 .659 0 2.124-.989 2.124s-.989-1.465-.989-2.124c.037-.622 0-2.087.989-2.087z"
  }));
};

var _default = SvgComponent;
exports.default = _default;