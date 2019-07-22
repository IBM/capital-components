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
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    d: "M14.133 8c0-.328-.033-.647-.083-.961L16 5.333l-1.656-2.719-2.325.759a6.125 6.125 0 0 0-1.903-1.125L9.6 0H6.4l-.516 2.249a6.109 6.109 0 0 0-1.903 1.126l-2.325-.76L0 5.333l1.949 1.706c-.049.314-.082.633-.082.961s.033.647.082.961L0 10.667l1.657 2.719 2.324-.759a6.1 6.1 0 0 0 1.904 1.125L6.4 16h3.2l.515-2.249a6.083 6.083 0 0 0 1.903-1.125l2.324.759L16 10.667l-1.95-1.705c.05-.315.083-.634.083-.962zM8 10a2 2 0 1 1 .001-4.001A2 2 0 0 1 8 10z"
  }));
};

var _default = SvgComponent;
exports.default = _default;