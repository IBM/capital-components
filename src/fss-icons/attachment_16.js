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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M14.581 2.384A4.952 4.952 0 0 0 11.117 1c-1.31 0-2.54.491-3.464 1.384L1.115 8.701a3.6 3.6 0 0 0 0 5.209A3.903 3.903 0 0 0 3.844 15a3.903 3.903 0 0 0 2.729-1.09l4.889-4.724a2.618 2.618 0 0 0 0-3.788 2.849 2.849 0 0 0-1.993-.796c-.754 0-1.462.283-1.994.796L3.799 8.95l1.046.946L8.52 6.345a1.36 1.36 0 0 1 .948-.382c.357 0 .693.136.948.382a1.31 1.31 0 0 1 0 1.894l-4.889 4.724c-.902.871-2.464.871-3.367 0a2.292 2.292 0 0 1 0-3.316L8.698 3.33a3.46 3.46 0 0 1 2.419-.97c.912 0 1.771.344 2.418.97a3.275 3.275 0 0 1 .001 4.737l-5.325 5.144 1.045.947 5.326-5.145a4.581 4.581 0 0 0-.001-6.629z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;