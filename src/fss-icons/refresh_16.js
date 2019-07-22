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
    d: "M7.465 13.99c-2.46 0-4.462-2.011-4.462-4.483S4.536 5 6.997 5h4L9.545 6.531 10.997 8l4-4-4-4-1.452 1.507L10.997 3h-4C3.436 3 1.003 5.927 1.003 9.507S3.902 16 7.465 16a6.466 6.466 0 0 0 4.777-2.12l-1.479-1.354a4.457 4.457 0 0 1-3.298 1.464z"
  }));
};

var _default = SvgComponent;
exports.default = _default;