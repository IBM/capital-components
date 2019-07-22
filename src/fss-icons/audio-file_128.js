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
    viewBox: "0 0 128 128"
  }, props), _react.default.createElement("path", {
    d: "M12 12v104h104V12H12zm4 4h96v80H16V16z"
  }), _react.default.createElement("path", {
    d: "M52 36v31.076A11.943 11.943 0 0 0 44 64c-6.621 0-12 5.375-12 12s5.379 12 12 12 12-5.375 12-12V43.272l36-6.545v22.349A11.943 11.943 0 0 0 84 56c-6.621 0-12 5.375-12 12s5.379 12 12 12 12-5.375 12-12V24l-44 8v4zm-8 48c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm40-8c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;