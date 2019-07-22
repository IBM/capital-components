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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M13 10a2.99 2.99 0 0 0-2.816 2H5.816c-.038-.106-.094-.201-.142-.301l6.016-6.016c.396.197.837.317 1.31.317a3 3 0 1 0 0-6 2.99 2.99 0 0 0-2.816 2H5.816A2.99 2.99 0 0 0 3 0a3 3 0 1 0 0 6 2.99 2.99 0 0 0 2.816-2h4.367c.031.086.078.163.116.245l-6.044 6.044A2.917 2.917 0 0 0 3 10a3 3 0 1 0 0 6 2.99 2.99 0 0 0 2.816-2h4.367a2.99 2.99 0 0 0 2.816 2A3 3 0 0 0 13 10zM3 4.5c-.827 0-1.5-.673-1.5-1.5S2.173 1.5 3 1.5s1.5.673 1.5 1.5S3.827 4.5 3 4.5zm10-3c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm-10 13c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;