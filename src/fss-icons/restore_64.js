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
    d: "M37.707 7.586c-13.234 0-24 10.766-24 24v17.172l-8.586-8.586L2.293 43l13.414 13.414L29.121 43l-2.828-2.828-8.586 8.586V31.586c0-11.027 8.973-20 20-20s20 8.973 20 20-8.973 20-20 20v4c13.234 0 24-10.766 24-24s-10.766-24-24-24z"
  }), _react.default.createElement("path", {
    d: "M40.293 37l2.828-2.828-3.293-3.293 10.586-10.586L49 18.879 38.414 29.465l-5.293-5.293L30.293 27l5.293 5.293L33 34.879l1.414 1.414L37 33.707z"
  }));
};

var _default = SvgComponent;
exports.default = _default;