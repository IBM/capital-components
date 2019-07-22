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
    d: "M0 0v16h16V0H0zm8 11.764c-2.609 0-4.596-1.406-5.818-3.491C3.404 6.188 5.391 4.782 8 4.782s4.596 1.406 5.818 3.491c-1.222 2.084-3.209 3.491-5.818 3.491z"
  }), _react.default.createElement("path", {
    d: "M8 10.455a2.18 2.18 0 0 0 2.182-2.182 2.18 2.18 0 1 0-4.364 0c0 1.206.978 2.182 2.182 2.182z"
  }));
};

var _default = SvgComponent;
exports.default = _default;