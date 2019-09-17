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
    viewBox: "0 0 32 32"
  }, props), _react.default.createElement("path", {
    d: "M28.95 3.05A6.982 6.982 0 0 0 24 1a6.982 6.982 0 0 0-4.95 2.05l-3 3A6.982 6.982 0 0 0 14 11c0 1.206.286 2.359.808 3.364l-.443.443A7.316 7.316 0 0 0 11 14a6.982 6.982 0 0 0-4.95 2.05l-3 3C1.784 20.317 1 22.067 1 24s.784 3.683 2.05 4.95A6.982 6.982 0 0 0 8 31a6.982 6.982 0 0 0 4.95-2.05l3-3A6.982 6.982 0 0 0 18 21a7.297 7.297 0 0 0-.808-3.364l.443-.443A7.316 7.316 0 0 0 21 18a6.982 6.982 0 0 0 4.95-2.05l3-3C30.216 11.683 31 9.933 31 8s-.784-3.683-2.05-4.95zM16 21c0 1.335-.52 2.591-1.464 3.536l-3 3A4.971 4.971 0 0 1 8 29a4.971 4.971 0 0 1-3.536-1.464C3.52 26.591 3 25.335 3 24s.52-2.591 1.464-3.536l3-3A4.971 4.971 0 0 1 11 16c.642 0 1.264.122 1.84.332l-4.254 4.254 2.828 2.828 4.254-4.254c.21.576.332 1.198.332 1.84zm11.536-9.464l-3 3A4.971 4.971 0 0 1 21 16a5.376 5.376 0 0 1-1.84-.332l4.254-4.254-2.828-2.828-4.254 4.254A5.376 5.376 0 0 1 16 11c0-1.335.52-2.591 1.464-3.536l3-3A4.971 4.971 0 0 1 24 3c1.335 0 2.591.52 3.536 1.464C28.48 5.409 29 6.665 29 8s-.52 2.591-1.464 3.536z"
  }));
};

var _default = SvgComponent;
exports.default = _default;