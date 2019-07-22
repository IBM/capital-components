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
    d: "M56 8v48H8V8h48m2-2H6v52h52V6z"
  }), _react.default.createElement("path", {
    d: "M23 7.35h2v48.9h-2z"
  }), _react.default.createElement("path", {
    d: "M6.99 23H56v2H6.99zm1 17H57v2H7.99z"
  }), _react.default.createElement("path", {
    d: "M40 7.99h2V56h-2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;