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
    d: "M19.387 12.532l-1.413-1.413a8.588 8.588 0 0 1-2.367 1.864l-1.936-5.809A2.987 2.987 0 0 0 14.613 5a2.99 2.99 0 0 0-2-2.816V1h-2v1.184a2.99 2.99 0 0 0-2 2.816c0 .858.365 1.627.942 2.174L4.613 22l2 1 2.444-7.332c.819.21 1.672.332 2.556.332.884 0 1.737-.122 2.557-.329L16.613 23l2-1-2.366-7.099a10.612 10.612 0 0 0 3.14-2.369zM11.613 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 10a8.284 8.284 0 0 1-1.922-.235L11.613 8l1.925 5.775a8.486 8.486 0 0 1-1.925.225z"
  }));
};

var _default = SvgComponent;
exports.default = _default;