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
    d: "M8 104V20H4v88h120v-4z"
  }), _react.default.createElement("path", {
    d: "M16 64h28v32H16zm64-32H52v64h28V32zm-4 60H56V36h20v56zm12-40h28v4H88zm0 8h28v4H88zm0 8h28v4H88zm0 8h28v4H88zm0 8h28v4H88zm0 8h28v4H88z"
  }));
};

var _default = SvgComponent;
exports.default = _default;