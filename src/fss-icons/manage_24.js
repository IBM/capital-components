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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M20.433 12c0-.451-.045-.89-.114-1.322L23 8.333l-2.277-3.738-3.197 1.044a8.407 8.407 0 0 0-2.617-1.547L14.2 1H9.8l-.709 3.092A8.421 8.421 0 0 0 6.474 5.64L3.277 4.595 1 8.333l2.68 2.346c-.068.431-.113.87-.113 1.321s.045.89.113 1.321L1 15.667l2.278 3.738 3.196-1.044a8.393 8.393 0 0 0 2.618 1.547L9.8 23h4.4l.708-3.092a8.388 8.388 0 0 0 2.617-1.547l3.196 1.044L23 15.667l-2.681-2.345c.069-.432.114-.871.114-1.322zM12 15a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 1 0 6z"
  }));
};

var _default = SvgComponent;
exports.default = _default;