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
    d: "M44 8c-5.102 0-9.553 2.738-12 6.815C29.553 10.738 25.102 8 20 8 12.268 8 6 14.268 6 22c0 3.866 1.521 7.412 4 10 5.63 5.879 22 24 22 24s16.37-18.121 22-24c2.478-2.588 4-6.134 4-10 0-7.732-6.268-14-14-14zm8.556 22.617C47.97 35.405 36.169 48.414 32 53.019c-4.169-4.605-15.97-17.614-20.556-22.402A12.397 12.397 0 0 1 8 22c0-6.617 5.383-12 12-12 4.244 0 8.088 2.185 10.285 5.845L32 18.702l1.715-2.857C35.912 12.185 39.756 10 44 10c6.617 0 12 5.383 12 12 0 3.237-1.223 6.297-3.444 8.617z"
  }));
};

var _default = SvgComponent;
exports.default = _default;