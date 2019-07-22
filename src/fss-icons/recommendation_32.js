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
    d: "M14.5 13.586l-2.293-2.293-1.414 1.414 3.707 3.707 6.707-6.707-1.414-1.414z"
  }), _react.default.createElement("path", {
    d: "M27 12c0-6.074-4.924-11-11-11C9.926 1 5 5.926 5 12c0 4.21 2.369 7.865 5.844 9.714L10 31l6-4 6 4-.844-9.286A10.995 10.995 0 0 0 27 12zm-11 9c-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9-4.029 9-9 9z"
  }));
};

var _default = SvgComponent;
exports.default = _default;