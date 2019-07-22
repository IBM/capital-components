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
    d: "M1.126 4.15v23.7h29.626V4.15H1.126zm20.738 4.444v4.938h-5.431V8.594h5.431zm-6.912 0v4.938H2.608V8.594h12.344zM2.608 26.369v-4.938h12.344v4.938H2.608zm13.825 0v-4.938h5.431v4.938h-5.431zm6.913 0v-4.938h5.925v4.938h-5.925zm5.925-12.838h-5.925V8.594h5.925v4.937z"
  }));
};

var _default = SvgComponent;
exports.default = _default;