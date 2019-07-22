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
    viewBox: "0 0 64 64"
  }, props), _react.default.createElement("path", {
    d: "M49.311 33.013l-1.414-1.414a22.65 22.65 0 0 1-7.472 4.968L35.479 22.35a7.997 7.997 0 0 0 4.154-7.014c0-3.726-2.552-6.848-6-7.738V3.336h-4v4.262c-3.448.89-6 4.012-6 7.738a7.997 7.997 0 0 0 4.154 7.014L14.689 60.007l1.889.657 7.494-21.544a25.064 25.064 0 0 0 7.562 1.184c2.557 0 5.109-.407 7.562-1.184l7.494 21.544 1.889-.657-7.496-21.55a24.648 24.648 0 0 0 8.228-5.444zM31.633 13.336a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001zm-6.904 23.895l4.923-14.153a7.993 7.993 0 0 0 1.982.258 8 8 0 0 0 1.982-.258l4.923 14.153a23.119 23.119 0 0 1-13.81 0z"
  }));
};

var _default = SvgComponent;
exports.default = _default;