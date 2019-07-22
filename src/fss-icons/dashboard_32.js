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
    d: "M12.465 21.535A4.968 4.968 0 0 1 11 18c0-2.757 2.243-5 5-5s5 2.243 5 5a4.968 4.968 0 0 1-1.465 3.535l1.414 1.414A6.953 6.953 0 0 0 23 18c0-3.86-3.141-7-7-7s-7 3.14-7 7c0 1.87.729 3.627 2.051 4.949l1.414-1.414z"
  }), _react.default.createElement("path", {
    d: "M15 25h2l-1-9z"
  }), _react.default.createElement("path", {
    d: "M1 4v24h30V4H1zm28 22H3V10h26v16z"
  }));
};

var _default = SvgComponent;
exports.default = _default;