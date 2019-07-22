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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M6 6v52h44l8-8V6H6zm50 43.171L49.172 56H44v-6H20v6H8V8h48v41.171z"
  }), _react.default.createElement("path", {
    d: "M32 44c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm0-16c2.207 0 4 1.791 4 4s-1.793 4-4 4-4-1.791-4-4 1.793-4 4-4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;