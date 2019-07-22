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
    d: "M27 13H17V8.858A3.99 3.99 0 0 0 20 5a4 4 0 0 0-8 0 3.99 3.99 0 0 0 3 3.858V13c-1.106 0-2 .895-2 2H8.858A3.99 3.99 0 0 0 5 12a4 4 0 0 0 0 8 3.99 3.99 0 0 0 3.858-3H13v10l4 4V17h14l-4-4zM5 18c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2zm10-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-9a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;