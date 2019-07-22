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
    d: "M22.984 12.016c0 .667-.51 1.177-1.177 1.177s-1.177-.51-1.177-1.177.51-1.177 1.177-1.177 1.177.51 1.177 1.177zm-3.138 3.923c-1.53 0-2.746 1.216-2.746 2.746s1.216 2.746 2.746 2.746 2.746-1.216 2.746-2.746-1.216-2.746-2.746-2.746zm-7.885 2.197A5.482 5.482 0 0 1 6.508 23c-3.021 0-5.492-2.471-5.492-5.492 0-1.569.667-2.981 1.687-3.962-.55-1.177-.903-2.511-.903-3.884 0-4.747 3.884-8.631 8.631-8.631s8.631 3.884 8.631 8.631a8.602 8.602 0 0 1-7.101 8.474zm5.923-8.474c0-4.119-3.335-7.454-7.454-7.454S2.977 5.543 2.977 9.662a7.52 7.52 0 0 0 .706 3.138 5.37 5.37 0 0 1 2.825-.785 5.462 5.462 0 0 1 5.453 4.943c3.374-.706 5.923-3.726 5.923-7.296z"
  }));
};

var _default = SvgComponent;
exports.default = _default;