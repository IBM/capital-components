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
    d: "M5 16L8 6l2.984 10H5z"
  }), _react.default.createElement("path", {
    d: "M3.361 11.799a5.985 5.985 0 0 1 .398-8.04A5.985 5.985 0 0 1 8 2c1.654 0 3.154.673 4.241 1.759S14 6.346 14 8a5.966 5.966 0 0 1-1.361 3.799l1.267 1.583A7.956 7.956 0 0 0 16 8c0-2.209-.895-4.209-2.343-5.657S10.209 0 8 0a7.975 7.975 0 0 0-5.657 2.343A7.975 7.975 0 0 0 0 8a7.96 7.96 0 0 0 2.094 5.383l1.267-1.584z"
  }));
};

var _default = SvgComponent;
exports.default = _default;