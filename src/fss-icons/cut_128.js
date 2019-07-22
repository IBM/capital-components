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
    d: "M108 52H68V35.476c6.896-1.78 12-8.024 12-15.476 0-8.836-7.164-16-16-16s-16 7.164-16 16c0 7.452 5.104 13.696 12 15.476V52c-4.422 0-8 3.58-8 8H35.476C33.696 53.103 27.452 48 20 48c-8.836 0-16 7.164-16 16s7.164 16 16 16c7.452 0 13.696-5.103 15.476-12H52v40l16 16V68h56l-16-16zM20 72c-4.414 0-8-3.582-8-8s3.586-8 8-8 8 3.582 8 8-3.586 8-8 8zm40-8c-2.211 0-4-1.791-4-4a3.999 3.999 0 1 1 8 0c0 2.209-1.793 4-4 4zm4-36c-4.414 0-8-3.582-8-8s3.586-8 8-8 8 3.582 8 8-3.586 8-8 8z"
  }));
};

var _default = SvgComponent;
exports.default = _default;