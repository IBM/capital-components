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
    d: "M124 52l-44-4L64 4 48 48 4 52l36 28-12 44 36-28 36 28-12-44 36-28zm-31.017 61.476L66.456 92.843 64 90.933l-2.456 1.91-26.528 20.633 8.842-32.423.702-2.573-2.105-1.637-27.998-21.777 33.905-3.083 2.529-.229.868-2.387L64 15.705l12.241 33.663.868 2.387 2.529.229 33.905 3.083-27.999 21.776-2.104 1.637.702 2.573 8.841 32.423z"
  }));
};

var _default = SvgComponent;
exports.default = _default;