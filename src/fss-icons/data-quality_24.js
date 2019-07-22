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
    viewBox: "0 0 24 24"
  }, props), _react.default.createElement("path", {
    d: "M20.055 9.087c0-4.467-3.625-8.055-8.055-8.055S3.945 4.656 3.945 9.087c0 3.076 1.867 5.785 4.394 7.14L7.606 23 12 20.071 16.394 23l-.732-6.774c2.562-1.354 4.393-4.064 4.393-7.139zM12 16.409a7.32 7.32 0 0 1-7.323-7.323c0-4.064 3.295-7.323 7.323-7.323s7.323 3.295 7.323 7.323A7.297 7.297 0 0 1 12 16.409zm3.295-10.325l1.098 1.098-4.943 4.943-2.745-2.746 1.098-1.098 1.648 1.648 3.844-3.845z"
  }));
};

var _default = SvgComponent;
exports.default = _default;