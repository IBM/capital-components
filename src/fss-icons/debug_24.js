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
    d: "M23 11h-1.05A10.005 10.005 0 0 0 13 2.05V1h-2v1.05A10.005 10.005 0 0 0 2.05 11H1v2h1.05A10.003 10.003 0 0 0 11 21.95V23h2v-1.05A10.003 10.003 0 0 0 21.95 13H23v-2zm-3.069 0H17.91A5.994 5.994 0 0 0 13 6.09V4.069A8.008 8.008 0 0 1 19.931 11zm-3.032 2A5.016 5.016 0 0 1 13 16.899V14h-2v2.899A5.016 5.016 0 0 1 7.101 13H10v-2H7.101A5.016 5.016 0 0 1 11 7.101V10h2V7.101A5.016 5.016 0 0 1 16.899 11H14v2h2.899zM11 4.069V6.09A5.994 5.994 0 0 0 6.09 11H4.069A8.008 8.008 0 0 1 11 4.069zM4.069 13H6.09A5.994 5.994 0 0 0 11 17.91v2.021A8.008 8.008 0 0 1 4.069 13zM13 19.931V17.91A5.994 5.994 0 0 0 17.91 13h2.021A8.008 8.008 0 0 1 13 19.931z"
  }));
};

var _default = SvgComponent;
exports.default = _default;