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
    d: "M12.5 5H9a1 1 0 0 0-2 0H3.5A3.5 3.5 0 1 0 7 8.5c0-.171-.027-.335-.05-.5h2.1c-.023.165-.05.329-.05.5A3.5 3.5 0 1 0 12.5 5zm-9 5C2.673 10 2 9.327 2 8.5S2.673 7 3.5 7 5 7.673 5 8.5 4.327 10 3.5 10zm9 0c-.827 0-1.5-.673-1.5-1.5S11.673 7 12.5 7s1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
  }));
};

var _default = SvgComponent;
exports.default = _default;