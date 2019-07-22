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
    d: "M40 28h20v84H40zm28 40h20v4H68zm0-8h20v4H68zm0 16h20v4H68zm0 8h20v4H68zm0 8h20v4H68zm0 8h20v4H68zm0 8h20v4H68z"
  }), _react.default.createElement("path", {
    d: "M24 4v120h80V4H24zm76 116H28V16h72v104z"
  }));
};

var _default = SvgComponent;
exports.default = _default;