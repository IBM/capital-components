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
    d: "M58 86.343l-9.172-9.171-5.656 5.656L58 97.657l26.828-26.829-5.656-5.656z"
  }), _react.default.createElement("path", {
    d: "M96 49.819V36C96 18.326 81.674 4 64 4S32 18.326 32 36v13.822C24.566 57.702 20 68.316 20 80c0 24.295 19.705 44 44 44 24.303 0 44-19.705 44-44 0-11.686-4.565-22.301-12-30.181zM40 36c0-13.233 10.767-24 24-24s24 10.767 24 24v7.13A43.779 43.779 0 0 0 64 36a43.77 43.77 0 0 0-24 7.133V36zm24 84c-22.09 0-40-17.91-40-40s17.91-40 40-40 40 17.91 40 40-17.91 40-40 40z"
  }));
};

var _default = SvgComponent;
exports.default = _default;