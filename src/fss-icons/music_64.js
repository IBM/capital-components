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
    d: "M24 10v36.019C22.176 43.583 19.275 42 16 42c-5.521 0-10 4.477-10 10s4.479 10 10 10 10-4.477 10-10V19.529l30-7.059v25.548C54.176 35.583 51.275 34 48 34c-5.521 0-10 4.477-10 10s4.479 10 10 10 10-4.477 10-10V2l-34 8zm-8 50c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm32-8c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;