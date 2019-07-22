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
    d: "M12.494 8.54V5.574H1.126v20.758H30.78V8.54H12.494zm16.804 16.309H2.609V11.505h26.689v13.344zM8.046 22.378H6.563v-8.402h1.483v8.402zm10.378 0h-1.483v-8.402h1.483v8.402zm-5.93 0c1.631 0 2.965-1.038 2.965-4.25 0-3.163-1.384-4.201-2.965-4.201s-2.965 1.038-2.965 4.201c-.001 3.262 1.334 4.25 2.965 4.25zm0-7.067c1.334 0 1.334 1.977 1.334 2.817 0 .89 0 2.916-1.334 2.916s-1.334-1.977-1.334-2.916c-.001-.84-.001-2.817 1.334-2.817zm10.379 7.067c1.631 0 2.965-1.038 2.965-4.25 0-3.163-1.384-4.152-2.965-4.152s-2.965 1.038-2.965 4.152c-.001 3.212 1.383 4.25 2.965 4.25zm0-7.067c1.334 0 1.334 1.977 1.334 2.817 0 .89 0 2.867-1.334 2.867s-1.334-1.977-1.334-2.867c.049-.84-.001-2.817 1.334-2.817z"
  }));
};

var _default = SvgComponent;
exports.default = _default;