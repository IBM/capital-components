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
    d: "M5.582 7.418h4.837C9.897 6.717 9.009 6.109 8 6.109s-1.897.608-2.418 1.309zm-.582 1h6v1H5zm0 2h6v1H5zm3 3.164c1.009 0 1.897-.462 2.418-1.164H5.582c.521.701 1.409 1.164 2.418 1.164zM0 9.209a1.928 1.928 0 0 0 1.189 1.781c.234.097.484.146.734.146h.008c.249 0 .499-.049.734-.147a1.908 1.908 0 0 0 1.043-1.043l1.626-4.144L1.19 7.429A1.919 1.919 0 0 0 0 9.209zm15.853-.737a1.935 1.935 0 0 0-1.042-1.043l-4.144-1.626 1.626 4.144a1.915 1.915 0 0 0 1.043 1.043c.235.097.484.147.734.147h.008a1.918 1.918 0 0 0 1.776-1.19 1.938 1.938 0 0 0-.001-1.475zM6 4.418a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  }));
};

var _default = SvgComponent;
exports.default = _default;