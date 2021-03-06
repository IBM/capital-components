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
    d: "M1.126 1.187v22.789l6.837 6.837h22.789V1.187H1.126zm27.917 27.917H9.102v-6.267H2.835V2.896h26.207v26.208zM14.8 14.861v-3.988h2.279v3.988h3.988v2.279h-3.988v9.685h9.685V17.14h-3.988v-2.279h3.988V5.175h-9.685v3.988H14.8V5.175H5.114v9.685H14.8zm10.255 10.255h-6.267v-6.267h6.267v6.267zM18.788 6.884h6.267v6.267h-6.267V6.884zm-11.964 0h6.267v6.267H6.824V6.884z"
  }));
};

var _default = SvgComponent;
exports.default = _default;