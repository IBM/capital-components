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
    d: "M10 7h5v21h-5zm7 10h5v1h-5zm0-2h5v1h-5zm0 4h5v1h-5zm0 2h5v1h-5zm0 2h5v1h-5zm0 2h5v1h-5zm0 2h5v1h-5z"
  }), _react.default.createElement("path", {
    d: "M6 1v30h20V1H6zm18 28H8V5h16v24z"
  }));
};

var _default = SvgComponent;
exports.default = _default;