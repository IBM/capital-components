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
    d: "M12.628 1.875A6.596 6.596 0 0 0 8 0C6.19 0 4.554.718 3.372 1.875A6.308 6.308 0 0 0 1.455 6.4c0 1.87 1.817 4.374 3 5.6L8 16l3.455-4c1.183-1.227 3.091-3.73 3.091-5.6a6.313 6.313 0 0 0-1.918-4.525zM8 8.727a2.178 2.178 0 0 1-2.182-2.183c0-1.207.974-2.181 2.182-2.181s2.182.974 2.182 2.181A2.178 2.178 0 0 1 8 8.727z"
  }));
};

var _default = SvgComponent;
exports.default = _default;