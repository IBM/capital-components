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
    d: "M0 1.56v12.791h15.989V1.56H0zm11.192 2.399v2.665H8.261V3.959h2.931zm3.998 6.129h-3.198V7.423h3.198v2.665zM.799 7.423h6.662v2.665H.799V7.423zm6.663-3.464v2.665H.799V3.959h6.663zM.799 13.552v-2.665h6.662v2.665H.799zm7.462 0v-2.665h2.931v2.665H8.261zm3.731 0v-2.665h3.198v2.665h-3.198zm3.198-6.929h-3.198V3.959h3.198v2.664z"
  }));
};

var _default = SvgComponent;
exports.default = _default;