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
    d: "M1 14.5h4v8H1zm18 0h4v8h-4zm-17-3h2v2H2zm18 0h2v2h-2z"
  }), _react.default.createElement("path", {
    d: "M12 3.5c3.86 0 7 3.14 7 7v3h2v-3a9 9 0 0 0-9-9 9 9 0 0 0-9 9v3h2v-3c0-3.86 3.14-7 7-7"
  }));
};

var _default = SvgComponent;
exports.default = _default;