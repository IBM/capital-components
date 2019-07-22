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
    d: "M20 9c0-4.419-3.581-8-8-8S4 4.581 4 9a7.997 7.997 0 0 0 5 7.413V20h6v-3.587A7.997 7.997 0 0 0 20 9zm-8 6.033A6.04 6.04 0 0 1 5.967 9c0-3.327 2.706-6.033 6.033-6.033S18.033 5.673 18.033 9A6.04 6.04 0 0 1 12 15.033zM12 23a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"
  }), _react.default.createElement("path", {
    d: "M12 14l3-4H9l3 4z"
  }));
};

var _default = SvgComponent;
exports.default = _default;