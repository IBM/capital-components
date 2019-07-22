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
    d: "M1 4v24h30V4H1zm28 22H3V10h26v16z"
  }), _react.default.createElement("path", {
    d: "M16 24c4.484 0 7.9-2.417 10-6-2.1-3.583-5.516-6-10-6s-7.9 2.417-10 6c2.1 3.583 5.516 6 10 6zm0-11c3.627 0 6.74 1.77 8.826 5-2.086 3.23-5.199 5-8.826 5s-6.74-1.77-8.826-5c2.086-3.23 5.199-5 8.826-5z"
  }), _react.default.createElement("path", {
    d: "M16 21.5c1.934 0 3.5-1.566 3.5-3.5s-1.566-3.5-3.5-3.5a3.5 3.5 0 1 0 0 7zm0-4.667c.646 0 1.166.522 1.166 1.167a1.165 1.165 0 1 1-2.332 0c0-.645.52-1.167 1.166-1.167z"
  }));
};

var _default = SvgComponent;
exports.default = _default;