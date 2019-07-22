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
    d: "M18 7c0-3.24-2.759-6-6-6-3.243 0-6 2.76-6 6v2.723A7.957 7.957 0 0 0 4 15c0 4.416 3.584 8 8.001 8S20 19.416 20 15a7.958 7.958 0 0 0-2-5.278V7zM8 7c0-2.131 1.869-4 4-4 2.131 0 4 1.869 4 4v1.079a7.954 7.954 0 0 0-8 .001V7zm2.5 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 5.293-5.293 1.414 1.414-6.707 6.707z"
  }));
};

var _default = SvgComponent;
exports.default = _default;