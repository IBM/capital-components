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
    width: 24,
    height: 24
  }, props), _react.default.createElement("path", {
    d: "M1 3h19v2H1zm0 4h13v2H1zm11 4H1v2h22v-2H12z",
    fill: "#323232",
    "data-name": "Portrait and landscape"
  }));
};

var _default = SvgComponent;
exports.default = _default;