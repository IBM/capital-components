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
    d: "M11 5v5h2V5l2.5 2.5L17 6l-5-5-5 5 1.5 1.5zm8 16v-5l-2.083-2-1.042-1-2.042-2H5v10H1v2h22v-2h-4zm-2 0H7v-8h6v4h4v4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;