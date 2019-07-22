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
    d: "M4.395 1.016c-1.859 0-3.38 1.521-3.38 3.38s1.521 3.38 3.38 3.38 3.38-1.521 3.38-3.38-1.521-3.38-3.38-3.38zm0 5.492c-1.098 0-2.112-1.014-2.112-2.112s1.014-2.112 2.112-2.112 2.112 1.014 2.112 2.112-1.013 2.112-2.112 2.112zM15.38 12c0 1.859-1.521 3.38-3.38 3.38S8.62 13.859 8.62 12 10.141 8.62 12 8.62s3.38 1.521 3.38 3.38zM4.395 16.225a3.39 3.39 0 0 0-3.38 3.38c0 1.859 1.521 3.38 3.38 3.38s3.38-1.521 3.38-3.38a3.39 3.39 0 0 0-3.38-3.38zm0 5.492c-1.098 0-2.112-1.014-2.112-2.112s1.014-2.112 2.112-2.112 2.112 1.014 2.112 2.112c.001 1.098-1.013 2.112-2.112 2.112zm15.21-13.942c1.859 0 3.38-1.521 3.38-3.38s-1.521-3.38-3.38-3.38-3.38 1.521-3.38 3.38 1.521 3.38 3.38 3.38zm0-5.492c1.098 0 2.112 1.014 2.112 2.112s-1.014 2.112-2.112 2.112-2.112-1.014-2.112-2.112 1.013-2.112 2.112-2.112zm0 13.942a3.39 3.39 0 0 0-3.38 3.38 3.39 3.39 0 0 0 3.38 3.38 3.39 3.39 0 0 0 3.38-3.38 3.391 3.391 0 0 0-3.38-3.38zm0 5.492c-1.098 0-2.112-1.014-2.112-2.112s1.014-2.112 2.112-2.112 2.112 1.014 2.112 2.112-1.014 2.112-2.112 2.112z"
  }));
};

var _default = SvgComponent;
exports.default = _default;