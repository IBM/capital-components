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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M99.33 67.441l-5.658-5.656a43.302 43.302 0 0 1-14.188 9.455L70.252 44.7c4.95-2.721 8.307-7.981 8.307-14.028 0-7.452-5.103-13.696-12-15.476V6.671h-8v8.524c-6.897 1.779-12 8.023-12 15.476 0 6.047 3.357 11.308 8.307 14.028L28.67 120.014l3.778 1.314 14.321-41.173a52.163 52.163 0 0 0 15.79 2.452c5.337 0 10.673-.825 15.79-2.452l14.321 41.173 3.778-1.314-14.334-41.211c6.502-2.621 12.286-6.431 17.216-11.362zm-36.771-40.77a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM49.398 72.6l9.198-26.443c1.27.324 2.593.515 3.964.515s2.694-.191 3.964-.515L75.721 72.6a44.27 44.27 0 0 1-26.323 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;