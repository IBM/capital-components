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
    d: "M24 34v-4H10.828l4.586-4.586-2.828-2.828L3.172 32l9.414 9.414 2.828-2.828L10.828 34zm27.414-11.414l-2.828 2.828L53.172 30H40v4h13.172l-4.586 4.586 2.828 2.828L60.828 32zM34 53.171V40h-4v13.171l-4.586-4.585-2.828 2.828L32 60.829l9.414-9.415-2.828-2.828zm-4-42.342V24h4V10.829l4.586 4.585 2.828-2.828L32 3.171l-9.414 9.415 2.828 2.828z"
  }));
};

var _default = SvgComponent;
exports.default = _default;