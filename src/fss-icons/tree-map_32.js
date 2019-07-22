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
    d: "M18.902 8.1H4.089v6.913h14.813V8.1zm-1.482 5.431H5.57v-3.95h11.85v3.95zm10.369 1.481h-7.406V8.1h7.406v6.912zM12.977 23.9H27.79v-7.406H12.977V23.9zm1.481-5.925h11.85v4.444h-11.85v-4.444zM11.495 23.9H4.089v-7.406h7.406V23.9zM1.126 5.137v21.726h29.626V5.137H1.126zm28.145 20.244H2.608V6.619h26.663v18.762z"
  }));
};

var _default = SvgComponent;
exports.default = _default;