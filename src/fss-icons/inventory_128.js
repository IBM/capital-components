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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M96 60V12H32v48H12v56h104V60H96zM36 16h56v44H36V16zm76 96H16V64h96v48z"
  }), _react.default.createElement("path", {
    d: "M48 36h32v4H48zm0 8h32v4H48zm28 44H52v-4h-4v8h32v-8h-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;