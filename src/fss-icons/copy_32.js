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
    d: "M21 7V1H5v24h6v6h16V7h-6zM11 23H7V3h12v4h-8v16zm14 6H13V9h12v20z"
  }), _react.default.createElement("path", {
    d: "M15 13h8v1h-8zm0 2h8v1h-8zm0 2h8v1h-8zm0 2h4v1h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;