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
    d: "M62 30.5h-2.18c-.955-5.673-5.882-10-11.82-10-2.713 0-5.21.913-7.221 2.435l-.111-.103A12.975 12.975 0 0 0 32 19.5a12.982 12.982 0 0 0-8.679 3.342l-.101.093A11.92 11.92 0 0 0 16 20.5c-5.939 0-10.865 4.327-11.82 10H2v4h2.18c.955 5.673 5.882 10 11.82 10 6.621 0 12-5.373 12-12 0-3.185-1.252-6.074-3.279-8.223 2.02-1.79 4.6-2.777 7.279-2.777 2.684 0 5.269.99 7.279 2.776A11.946 11.946 0 0 0 36 32.5c0 6.627 5.379 12 12 12 5.938 0 10.865-4.327 11.82-10H62v-4zm-46 10c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm32 0c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;