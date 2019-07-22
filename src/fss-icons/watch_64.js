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
    d: "M42.293 19.293L31.707 29.879l-5.293-5.293-2.828 2.828 5.293 5.293-2.586 2.586 1.414 1.414 2.586-2.586 3.293 3.293 2.828-2.828-3.293-3.293 10.586-10.586z"
  }), _react.default.createElement("path", {
    d: "M54.907 30c-.595-7.199-4.362-13.496-9.907-17.487V2H17v10.513C10.946 16.87 7 23.973 7 32s3.946 15.13 10 19.487V62h28V51.487c5.545-3.991 9.312-10.288 9.907-17.487H57v-4h-2.093zM31 54C18.869 54 9 44.131 9 32s9.869-22 22-22 22 9.869 22 22-9.869 22-22 22z"
  }));
};

var _default = SvgComponent;
exports.default = _default;