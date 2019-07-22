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
    d: "M18.363 3.578A9.07 9.07 0 0 0 12 1a9.07 9.07 0 0 0-6.363 2.578C4.008 5.17 3 7.57 3 10s1.008 4.43 2.637 6.021A9.071 9.071 0 0 0 12 18.6V23l6.363-6.611C19.992 14.703 21 12.572 21 10c0-2.43-1.008-4.83-2.637-6.422zM7.499 12a2 2 0 1 1 .003-4.001A2 2 0 0 1 7.5 12zm9.002 0zm-4.5 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;