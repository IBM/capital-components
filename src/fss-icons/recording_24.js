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
    d: "M19.5 12h-2c0 3.033-2.467 5.5-5.5 5.5S6.5 15.033 6.5 12h-2c0 3.802 2.832 6.936 6.5 7.426V21H9v2h6v-2h-2v-1.574c3.668-.49 6.5-3.624 6.5-7.426z"
  }), _react.default.createElement("path", {
    d: "M12 16a4 4 0 0 0 4-4V5a4 4 0 0 0-8 0v7a4 4 0 0 0 4 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;