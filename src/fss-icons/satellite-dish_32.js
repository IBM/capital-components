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
    d: "M28 21l-9-9 2.494-4.157c.15.091.317.157.506.157a1 1 0 1 0 0-2 1 1 0 0 0-1 1c0 .188.066.356.157.506L17 10 8 1C5.45 3.549 4 7.11 4 11c0 3.891 1.45 7.451 4 10 2.548 2.549 6.109 4 10 4 3.89 0 7.451-1.451 10-4zM6 11c0-2.614.745-5.053 2.127-7.045l16.918 16.918C23.053 22.255 20.614 23 18 23c-3.336 0-6.385-1.213-8.586-3.414C7.213 17.385 6 14.336 6 11zm5 16h10v4H11z"
  }));
};

var _default = SvgComponent;
exports.default = _default;