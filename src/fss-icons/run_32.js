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
    d: "M11 11a5 5 0 1 0 .001 10.001A5 5 0 0 0 11 11zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
  }), _react.default.createElement("path", {
    d: "M30.121 6.879A2.995 2.995 0 0 0 28 6H11a9.968 9.968 0 0 0-7.071 2.929C2.119 10.738 1 13.238 1 16s1.119 5.262 2.929 7.071A9.968 9.968 0 0 0 11 26a9.992 9.992 0 0 0 7.071-2.929.018.018 0 0 0 .004-.005c3.011-2.998 12.045-11.945 12.045-11.945.545-.542.88-1.292.88-2.121s-.335-1.579-.879-2.121zm-13.46 14.773l-.001.001A7.973 7.973 0 0 1 11 24a7.948 7.948 0 0 1-5.657-2.343C3.832 20.146 3 18.137 3 16s.832-4.146 2.343-5.657A7.948 7.948 0 0 1 11 8c2.049 0 4.097.783 5.657 2.343 3.117 3.118 3.118 8.19.004 11.309zm4.221-4.191c.444-3.022-.485-6.206-2.811-8.533A10.089 10.089 0 0 0 16.982 8h8.2a2.99 2.99 0 0 0 .697 3.121c.246.246.528.428.824.571a9370.67 9370.67 0 0 0-5.821 5.769zM28 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;