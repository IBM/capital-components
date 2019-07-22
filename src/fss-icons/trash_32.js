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
    d: "M12 2h8v2h-8zM6 5v5h1v20h18V10h1V5H6zm17 23H9V12h14v16z"
  }), _react.default.createElement("path", {
    d: "M11 14h1v12h-1zm3 0h1v12h-1zm3 0h1v12h-1zm3 0h1v12h-1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;