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
    d: "M1 2v20h22V2H1zm9 16l2-7 2 7h-4zm6.243-1.757l-1.414-1.414c1.56-1.56 1.56-4.097 0-5.657s-4.097-1.56-5.657 0a4.004 4.004 0 0 0 0 5.657l-1.414 1.414a6 6 0 1 1 8.485 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;