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
    d: "M18 5V1h-4v4H6v26h20V5h-8zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm8 27H8V7h6v2h4V7h6v22z"
  }), _react.default.createElement("path", {
    d: "M16 11c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-4 4a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2h-8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;