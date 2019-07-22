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
    d: "M14.86 1.14A3.882 3.882 0 0 0 12.107 0a3.88 3.88 0 0 0-2.752 1.14L7.686 2.809a3.88 3.88 0 0 0-1.14 2.752c0 .412.077.806.191 1.185a3.846 3.846 0 0 0-1.175-.2 3.88 3.88 0 0 0-2.752 1.14L1.14 9.354A3.884 3.884 0 0 0 0 12.107c0 1.075.408 2.077 1.112 2.781C1.817 15.592 2.818 16 3.893 16a3.88 3.88 0 0 0 2.752-1.14l1.669-1.669a3.88 3.88 0 0 0 1.14-2.752c0-.412-.082-.802-.2-1.175.378.114.772.191 1.185.191a3.88 3.88 0 0 0 2.752-1.14l1.669-1.669A3.884 3.884 0 0 0 16 3.893a3.882 3.882 0 0 0-1.14-2.753zM7.286 12.163l-1.669 1.669a2.421 2.421 0 0 1-1.724.714c-.677 0-1.316-.25-1.752-.686-.436-.437-.687-1.076-.687-1.753 0-.651.254-1.263.714-1.724l1.669-1.669A2.425 2.425 0 0 1 5.561 8c.4 0 .78.106 1.124.286l-2.109 2.109 1.028 1.028 2.109-2.109c.181.345.287.725.287 1.125 0 .651-.254 1.263-.714 1.724zm6.545-6.546l-1.669 1.669c-.46.46-1.072.714-1.723.714-.409 0-.797-.101-1.142-.269l2.126-2.126-1.028-1.028-2.126 2.126A2.608 2.608 0 0 1 8 5.561c0-.651.254-1.263.714-1.724l1.669-1.669a2.421 2.421 0 0 1 1.724-.714c.652 0 1.264.254 1.725.714s.714 1.073.714 1.725a2.425 2.425 0 0 1-.715 1.724z",
    fill: "#323232"
  }));
};

var _default = SvgComponent;
exports.default = _default;