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
    d: "M3.988 15.99v96.019h120.024V15.99H3.988zm84.017 18.004v20.004H66V33.994h22.005zm-28.006 0v20.004H9.989V33.994h50.01zm-50.01 72.014V86.004h50.01v20.004H9.989zm56.011 0V86.004h22.004v20.004H66zm28.006 0V86.004h24.005v20.004H94.006zm24.005-52.01H94.006V33.994h24.005v20.004z"
  }));
};

var _default = SvgComponent;
exports.default = _default;