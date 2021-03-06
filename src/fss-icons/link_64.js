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
    d: "M57.899 6.101A13.952 13.952 0 0 0 48 2a13.952 13.952 0 0 0-9.899 4.101l-6 6A13.952 13.952 0 0 0 28 22c0 2.411.571 4.718 1.615 6.728l-.887.887C26.718 28.571 24.411 28 22 28a13.952 13.952 0 0 0-9.899 4.101l-6 6C3.567 40.634 2 44.134 2 48s1.567 7.366 4.101 9.899S12.134 62 16 62c3.866 0 7.366-1.567 9.899-4.101l6-6A13.952 13.952 0 0 0 36 42c0-2.411-.571-4.718-1.615-6.728l.887-.887C37.282 35.429 39.589 36 42 36c3.866 0 7.366-1.567 9.899-4.101l6-6C60.433 23.366 62 19.866 62 16s-1.567-7.366-4.101-9.899zM32 42a9.934 9.934 0 0 1-2.929 7.071l-6 6C21.182 56.96 18.671 58 16 58s-5.182-1.04-7.071-2.929C7.04 53.182 6 50.671 6 48s1.04-5.182 2.929-7.071l6-6A9.934 9.934 0 0 1 22 32c1.286 0 2.536.232 3.69.653l-8.518 8.519 5.657 5.657 8.519-8.519c.42 1.154.652 2.404.652 3.69zm23.071-18.929l-6 6A9.934 9.934 0 0 1 42 32c-1.286 0-2.536-.232-3.69-.653l8.519-8.519-5.657-5.657-8.519 8.518A10.768 10.768 0 0 1 32 22a9.934 9.934 0 0 1 2.929-7.071l6-6A9.934 9.934 0 0 1 48 6a9.934 9.934 0 0 1 7.071 2.929C56.96 10.818 58 13.329 58 16s-1.04 5.182-2.929 7.071z"
  }));
};

var _default = SvgComponent;
exports.default = _default;