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
    d: "M8.003 30c-1.876 0-3.639-.753-4.963-2.12-2.711-2.801-2.711-7.358 0-10.16L15.62 4.726C17.321 2.968 19.586 2 21.997 2c2.411 0 4.676.968 6.377 2.726 3.491 3.606 3.492 9.475.001 13.082L18.129 28.392 16.692 27l10.247-10.583c2.748-2.839 2.748-7.46-.001-10.3C25.616 4.752 23.861 4 21.997 4c-1.864 0-3.619.752-4.941 2.117L4.477 19.111c-1.968 2.034-1.969 5.344 0 7.377A4.877 4.877 0 0 0 8.003 28c1.33 0 2.582-.537 3.525-1.511l9.409-9.719c1.189-1.228 1.188-3.226 0-4.453-1.131-1.168-3.09-1.169-4.222-.001L9.64 19.624l-1.436-1.392 7.074-7.307a4.902 4.902 0 0 1 3.547-1.515c1.342 0 2.602.538 3.548 1.515 1.931 1.995 1.932 5.24 0 7.235l-9.408 9.718A6.852 6.852 0 0 1 8.003 30z"
  }));
};

var _default = SvgComponent;
exports.default = _default;