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
    d: "M21 3c-2 0-4 1-5 2-1-1-3-2-5-2H3v24h8c2 0 4 1 5 2 1-1 3-2 5-2h8V3h-8zm-5 23.484C14.657 25.649 12.869 25 11 25H5V5h6c1.359 0 2.891.719 3.586 1.414L16 7.829v18.655zM26 20h-7v-1h7v1zm0-3h-7v-1h7v1zm0-3h-7v-1h7v1zm0-3h-7v-1h7v1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;