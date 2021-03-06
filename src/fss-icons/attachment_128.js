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
    d: "M32.012 120.001c-7.506.001-14.557-3.012-19.853-8.482-10.845-11.202-10.845-29.433 0-40.639l50.32-51.977C69.285 11.871 78.345 7.999 87.99 7.999c9.644 0 18.704 3.872 25.511 10.903 13.965 14.428 13.966 37.902.002 52.328l-40.986 42.335-5.748-5.564 40.986-42.335c10.994-11.358 10.993-29.84-.002-41.2-5.286-5.46-12.305-8.467-19.763-8.467s-14.477 3.007-19.763 8.468L17.908 76.444c-7.875 8.138-7.875 21.376 0 29.511 3.775 3.899 8.784 6.047 14.104 6.046 5.319 0 10.327-2.147 14.101-6.046l37.634-38.876c4.754-4.911 4.754-12.901-.001-17.812-2.263-2.338-5.262-3.625-8.444-3.625s-6.181 1.287-8.443 3.625L38.562 78.492l-5.748-5.564L61.11 43.701c3.783-3.908 8.823-6.061 14.191-6.061 5.369 0 10.409 2.152 14.191 6.061 7.726 7.979 7.727 20.962.002 28.941l-37.633 38.876c-5.294 5.47-12.343 8.482-19.849 8.483z"
  }));
};

var _default = SvgComponent;
exports.default = _default;