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
    d: "M24 15V3H8v12H3v14h26V15h-5zM10 5h12v10H10V5zm17 22H5V17h22v10z"
  }), _react.default.createElement("path", {
    d: "M12 9h8v1h-8zm0 2h8v1h-8zm7 11h-6v-1h-1v2h8v-2h-1z"
  }));
};

var _default = SvgComponent;
exports.default = _default;