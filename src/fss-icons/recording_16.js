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
    d: "M8 11c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3S5 1.35 5 3v5c0 1.65 1.35 3 3 3z"
  }), _react.default.createElement("path", {
    d: "M12 7.958V8c0 2.2-1.8 4-4 4s-4-1.8-4-4v-.042H3V8a5.009 5.009 0 0 0 4 4.899V15H5v1h6v-1H9v-2.101A5.009 5.009 0 0 0 13 8v-.042h-1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;