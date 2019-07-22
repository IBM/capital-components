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
    d: "M31 15.5h-1.09c-.478-2.836-2.941-5-5.91-5-1.176 0-2.27.344-3.196.93l-.136-.136A6.984 6.984 0 0 0 16 9.5c-1.721 0-3.378.637-4.707 1.831l-.098.098A5.96 5.96 0 0 0 8 10.5a5.999 5.999 0 0 0-5.91 5H1v2h1.09c.478 2.836 2.941 5 5.91 5 3.31 0 6-2.687 6-6a5.965 5.965 0 0 0-1.31-3.734A4.987 4.987 0 0 1 16 11.5c1.227 0 2.41.455 3.293 1.245l.018.019A5.963 5.963 0 0 0 18 16.5c0 3.313 2.689 6 6 6a5.999 5.999 0 0 0 5.91-5H31v-2zm-23 5c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4zm16 0c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.795 4-4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;