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
    d: "M12.001 7A7.96 7.96 0 0 0 8 8.08V7c0-2.131 1.869-4 4-4 1.065 0 2.065.467 2.8 1.201l1.416-1.416C15.121 1.689 13.621 1 12 1 8.757 1 6 3.76 6 7v2.723A7.957 7.957 0 0 0 4 15c0 4.416 3.584 8 8.001 8S20 19.416 20 15a8 8 0 0 0-7.999-8zm3.706 10.293l-1.414 1.414L12 16.414l-2.293 2.293-1.414-1.414L10.586 15l-2.293-2.293 1.414-1.414L12 13.586l2.293-2.293 1.414 1.414L13.414 15l2.293 2.293z"
  }));
};

var _default = SvgComponent;
exports.default = _default;