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
    d: "M12 17v-2H5.414l2.293-2.293-1.414-1.414L1.586 16l4.707 4.707 1.414-1.414L5.414 17zm13.707-5.707l-1.414 1.414L26.586 15H20v2h6.586l-2.293 2.293 1.414 1.414L30.414 16zM17 26.586V20h-2v6.586l-2.293-2.293-1.414 1.414L16 30.414l4.707-4.707-1.414-1.414zM15 5.414V12h2V5.414l2.293 2.293 1.414-1.414L16 1.586l-4.707 4.707 1.414 1.414z"
  }));
};

var _default = SvgComponent;
exports.default = _default;