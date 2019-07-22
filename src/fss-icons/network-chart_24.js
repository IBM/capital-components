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
    d: "M12.766 7.304h3.969c.196 1.533 1.533 2.751 3.105 2.751 1.729 0 3.144-1.415 3.144-3.144S21.57 3.767 19.84 3.767c-1.454 0-2.672 1.022-3.026 2.358h-4.048c-.393-2.869-2.869-5.109-5.856-5.109a5.887 5.887 0 0 0-5.895 5.895c0 3.105 2.437 5.659 5.502 5.856v4.048c-1.336.353-2.357 1.571-2.357 3.025 0 1.729 1.415 3.144 3.144 3.144s3.144-1.415 3.144-3.144c0-1.611-1.218-2.908-2.751-3.105v-3.969c1.1-.157 2.122-.589 2.947-1.297l4.677 4.677c-.354.511-.55 1.1-.55 1.768a3.154 3.154 0 0 0 3.144 3.144 3.154 3.154 0 0 0 3.144-3.144 3.154 3.154 0 0 0-3.144-3.144 3.04 3.04 0 0 0-1.768.55l-4.677-4.677a5.834 5.834 0 0 0 1.296-3.339zM2.195 6.911c0-2.594 2.122-4.716 4.716-4.716s4.716 2.122 4.716 4.716-2.122 4.716-4.716 4.716-4.716-2.123-4.716-4.716z"
  }));
};

var _default = SvgComponent;
exports.default = _default;