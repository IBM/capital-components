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
    d: "M31 1H1v4l12 12v14l6-6v-3.379A3.974 3.974 0 0 0 22 23c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.423 0-.822.083-1.205.205L31 5V1zm-7 18c0 1.103-.898 2-2 2-1.103 0-2-.897-2-2s.897-2 2-2c1.102 0 2 .897 2 2zm-6.414-3.414l-.586.585v8l-2 2v-10l-.586-.585L3.829 5h24.343L17.586 15.586z"
  }));
};

var _default = SvgComponent;
exports.default = _default;