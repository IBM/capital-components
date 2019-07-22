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
    d: "M0 1.604v12.791h15.989V1.604H0zm15.19 8.528h-3.198V7.467h3.198v2.665zM.799 7.467h6.662v2.665H.799V7.467zm6.663-3.464v2.665H.799V4.003h6.663zM.799 13.596v-2.665h6.662v2.665H.799zm11.193 0v-2.665h3.198v2.665h-3.198zm3.198-6.928h-3.198V4.003h3.198v2.665z"
  }));
};

var _default = SvgComponent;
exports.default = _default;