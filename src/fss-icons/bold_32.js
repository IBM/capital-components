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
    d: "M23 16c2.126-1.248 4-3.335 4-5.849C27 6.26 24.168 3 20 3H5v26h15c4.168 0 7-3.26 7-7.151 0-2.514-1.874-4.601-4-5.849zm-8 11h-4V17h4c2.98 0 5 2.205 5 5.052C20 24.899 17.98 27 15 27zm0-12h-4V5h4c2.98 0 5 2.205 5 5.052C20 12.899 17.98 15 15 15z"
  }));
};

var _default = SvgComponent;
exports.default = _default;