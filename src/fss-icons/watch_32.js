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
    d: "M21.146 9.646l-5.292 5.293-2.647-2.646-1.414 1.414 2.646 2.647-1.293 1.292.708.708 1.292-1.294 1.647 1.647 1.414-1.414-1.647-1.647 5.294-5.292z"
  }), _react.default.createElement("path", {
    d: "M27.449 15A11.968 11.968 0 0 0 22.5 6.268V1h-14v5.268c-3.023 2.178-5 5.721-5 9.732s1.977 7.555 5 9.732V31h14v-5.268A11.97 11.97 0 0 0 27.449 17H28.5v-2h-1.051zM15.5 26c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"
  }));
};

var _default = SvgComponent;
exports.default = _default;