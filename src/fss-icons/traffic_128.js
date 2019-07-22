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
  }, props), _react.default.createElement("circle", {
    cx: 64,
    cy: 32,
    r: 12
  }), _react.default.createElement("path", {
    d: "M64 76c6.625 0 12-5.373 12-12s-5.375-12-12-12-12 5.373-12 12 5.375 12 12 12zm0-20c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 52c6.625 0 12-5.373 12-12s-5.375-12-12-12-12 5.373-12 12 5.375 12 12 12zm0-20c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"
  }), _react.default.createElement("path", {
    d: "M108 52H92v-8l16-24H92V4H36v16H20l16 24v8H20l16 24v8H20l16 24v16h56v-16l16-24H92v-8l16-24zm-20 68H40V8h48v112z"
  }));
};

var _default = SvgComponent;
exports.default = _default;