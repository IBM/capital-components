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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M124 102.015v6.002H3.952V19.982h6.002v82.033H124zM25.961 88.01c5.602 0 10.004-4.402 10.004-10.004 0-2.001-.6-4.002-1.601-5.602L48.37 55.196c1.2.4 2.401.8 3.601.8 2.401 0 4.602-.8 6.202-2.201L72.379 63.2c-.2 1-.4 1.801-.4 2.801 0 5.602 4.402 10.004 10.004 10.004s10.004-4.402 10.004-10.004c0-2.001-.6-3.601-1.401-5.202l15.406-17.607c1.2.6 2.601.8 4.002.8 5.602 0 10.004-4.402 10.004-10.004s-4.402-10.004-10.004-10.004S99.99 28.386 99.99 33.988c0 2.001.6 3.601 1.401 5.202L85.985 56.797c-1.2-.6-2.601-.8-4.002-.8-2.401 0-4.602.8-6.202 2.201l-14.206-9.404c.2-.8.4-1.801.4-2.801 0-5.602-4.402-10.004-10.004-10.004s-10.004 4.402-10.004 10.004c0 2.001.6 4.002 1.601 5.602L29.562 68.802c-1-.6-2.201-.8-3.601-.8-5.602 0-10.004 4.402-10.004 10.004S20.359 88.01 25.961 88.01z"
  }));
};

var _default = SvgComponent;
exports.default = _default;