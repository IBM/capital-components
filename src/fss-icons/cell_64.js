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
    d: "M1.956 7.92v48.071h60.088V7.92H1.956zm42.062 9.014v10.015H33.001V16.934h11.017zM59.04 39.968H47.022V29.953H59.04v10.015zM4.96 29.953h25.037v10.015H4.96V29.953zm25.037-13.019v10.015H4.96V16.934h25.037zM4.96 52.987V42.972h25.037v10.015H4.96zm28.041 0V42.972h11.016v10.015H33.001zm14.021 0V42.972H59.04v10.015H47.022zM59.04 26.948H47.022V16.934H59.04v10.014z"
  }));
};

var _default = SvgComponent;
exports.default = _default;