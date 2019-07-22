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
    d: "M1 6v20h30V6H1zm28 18H3V8h26v16z"
  }), _react.default.createElement("path", {
    d: "M28 9H17v6h11V9zm-1 5h-9v-4h9v4zM4 9h11v6H4zm11 8H4v6h11v-6zm-1 5H5v-4h9v4zm14-5H17v6h11v-6zm-1 5h-9v-4h9v4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;