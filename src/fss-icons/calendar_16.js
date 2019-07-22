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
    d: "M13 1V0h-2v1H5V0H3v1H0v15h16V1h-3zm1 13H2V5h12v9z"
  }), _react.default.createElement("path", {
    d: "M4 7h2v2H4zm6 0h2v2h-2zM7 7h2v2H7zm-3 3h2v2H4zm6 0h2v2h-2zm-3 0h2v2H7z"
  }));
};

var _default = SvgComponent;
exports.default = _default;