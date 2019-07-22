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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M12.308 8c1.309-.768 2.462-2.052 2.462-3.599C14.769 2.006 13.026 0 10.462 0H1.231v16h9.231c2.565 0 4.308-2.006 4.308-4.401-.001-1.547-1.154-2.831-2.462-3.599zm-4.101 6h-3V9h3c1.49 0 2.5 1.103 2.5 2.526 0 1.424-1.01 2.474-2.5 2.474zm0-7h-3V2h3c1.49 0 2.5 1.103 2.5 2.526C10.707 5.95 9.697 7 8.207 7z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;