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
    d: "M22.984 18.957v1.098H1.016V3.945h1.098v15.012h20.87zM5.043 16.394a1.814 1.814 0 0 0 1.831-1.831c0-.366-.11-.732-.293-1.025l2.563-3.149c.22.073.439.146.659.146.439 0 .842-.146 1.135-.403l2.6 1.721c-.037.183-.073.33-.073.513 0 1.025.806 1.831 1.831 1.831s1.831-.806 1.831-1.831c0-.366-.11-.659-.256-.952l2.819-3.222c.22.11.476.146.732.146 1.025 0 1.831-.806 1.831-1.831s-.806-1.831-1.831-1.831a1.814 1.814 0 0 0-1.831 1.831c0 .366.11.659.256.952l-2.819 3.222c-.22-.11-.476-.146-.732-.146-.439 0-.842.146-1.135.403l-2.6-1.721c.037-.146.073-.33.073-.513 0-1.025-.806-1.831-1.831-1.831s-1.831.807-1.831 1.832c0 .366.11.732.293 1.025l-2.563 3.149c-.183-.11-.403-.146-.659-.146-1.025 0-1.831.806-1.831 1.831s.806 1.83 1.831 1.83z"
  }));
};

var _default = SvgComponent;
exports.default = _default;