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
    d: "M24 1l-6 7 2 3-9 9-3-2-7 5 3 8c5-2 11-6 16-11S29 9 31 4l-7-3zm-5.414 17.586c-4.049 4.049-8.952 7.582-13.455 9.733l-1.719-4.584 4.627-3.306 1.852 1.234 1.364.91 1.159-1.16 9-9 1.159-1.159-.909-1.364-1.159-1.739 4.058-4.734 3.798 1.627c-2.148 4.527-5.7 9.467-9.775 13.542z"
  }));
};

var _default = SvgComponent;
exports.default = _default;