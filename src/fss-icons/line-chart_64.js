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
    d: "M62.149 51.034v3.005H2.042V9.961h3.005v41.073h57.102zm-49.088-7.013c2.805 0 5.009-2.204 5.009-5.009a5.392 5.392 0 0 0-.801-2.805l7.012-8.615c.601.2 1.202.401 1.803.401 1.202 0 2.304-.401 3.106-1.102l7.113 4.708c-.1.501-.2.902-.2 1.402 0 2.805 2.204 5.009 5.009 5.009s5.009-2.204 5.009-5.009c0-1.002-.301-1.803-.701-2.605l7.714-8.816c.601.301 1.302.401 2.004.401 2.805 0 5.009-2.204 5.009-5.009s-2.204-5.009-5.009-5.009-5.009 2.204-5.009 5.009c0 1.002.301 1.803.701 2.605l-7.714 8.816c-.601-.301-1.302-.401-2.004-.401-1.202 0-2.304.401-3.106 1.102l-7.113-4.708c.1-.401.2-.902.2-1.402 0-2.805-2.204-5.009-5.009-5.009s-5.009 2.204-5.009 5.009c0 1.002.301 2.004.801 2.805l-7.012 8.615c-.501-.301-1.102-.401-1.803-.401-2.805 0-5.009 2.204-5.009 5.009.001 2.805 2.204 5.009 5.009 5.009z"
  }));
};

var _default = SvgComponent;
exports.default = _default;