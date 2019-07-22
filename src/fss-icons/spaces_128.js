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
    d: "M4 24v80h120V24H4zm116 76H8V28h112v72z"
  }), _react.default.createElement("path", {
    d: "M112 36H68v24h44V36zm-4 20H72V40h36v16zM16 36h44v24H16zm44 32H16v24h44V68zm-4 20H20V72h36v16zm56-20H68v24h44V68zm-4 20H72V72h36v16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;