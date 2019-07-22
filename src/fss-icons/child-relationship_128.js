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
    d: "M124.081 28.646V3.247h-25.4v9.236H59.428v48.49H29.41v-9.236H4.011v25.399H29.41V67.9h30.018v46.181h39.254v9.236h25.399v-25.4h-25.4v9.236H66.355V67.9h32.327v9.236h25.399v-25.4h-25.4v9.236H66.355V19.41h32.327v9.236h25.399zM22.483 70.209H10.938V58.664h11.545v11.545z"
  }));
};

var _default = SvgComponent;
exports.default = _default;