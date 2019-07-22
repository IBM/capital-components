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
    d: "M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1zM3 12a9 9 0 0 1 14.61-7L5 17.61A9 9 0 0 1 3 12zm9 9a9 9 0 0 1-5.61-2L19 6.39A9 9 0 0 1 12 21z"
  }));
};

var _default = SvgComponent;
exports.default = _default;