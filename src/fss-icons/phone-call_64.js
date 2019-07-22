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
    d: "M48 2L36 16l4 6-18 18-6-4L2 46l6 16c10-4 22-12 32-22S58 18 62 8L48 2zm-9.414 36.586C29.742 47.43 18.877 55.074 9.143 59.351L4.412 46.735l11.627-8.306 4.852 3.234 1.364.91 1.159-1.16 18-18 1.159-1.159-.909-1.364-3.159-4.739L48.562 4.417l10.826 4.64c-4.269 9.756-11.933 20.659-20.802 29.529z"
  }));
};

var _default = SvgComponent;
exports.default = _default;