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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M17.131 32V13.531h3.463v5.772h27.703v3.463H20.594v5.772H43.68V32H29.828v5.772h18.469v3.463H29.828v5.772H43.68v3.463H26.365V32h-9.234zM62.149 1.988v60.024H15.976L2.125 48.16V1.988h60.024zm-3.463 3.463H5.588v40.401h12.697v12.697h40.401V5.451z"
  }));
};

var _default = SvgComponent;
exports.default = _default;