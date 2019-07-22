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
    d: "M12.858 7A3.99 3.99 0 0 0 9 4a3.99 3.99 0 0 0-3.858 3H1v2h4.142A3.99 3.99 0 0 0 9 12a3.99 3.99 0 0 0 3.858-3H31V7H12.858zM9 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm14 3a3.99 3.99 0 0 0-3.858 3H1v2h18.142A3.99 3.99 0 0 0 23 20a3.99 3.99 0 0 0 3.858-3H31v-2h-4.142A3.99 3.99 0 0 0 23 12zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 20a3.99 3.99 0 0 0-3.858 3H1v2h4.142A3.99 3.99 0 0 0 9 28a3.99 3.99 0 0 0 3.858-3H31v-2H12.858A3.99 3.99 0 0 0 9 20zm0 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;