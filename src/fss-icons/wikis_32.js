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
    d: "M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm4.928 18.221L16.707 16l8.111-8.111.006.007c.548 4.643-.842 9.057-3.896 12.325zm-9.856-8.442L15.293 16l-8.111 8.111-.006-.007c-.548-4.643.842-9.057 3.896-12.325zm13.039-4.597L16 15.293l-4.225-4.225c2.775-2.592 6.443-4.027 10.406-4.027.635 0 1.274.05 1.91.123l.02.018zM7.889 24.818L16 16.707l4.225 4.225c-2.775 2.592-6.443 4.027-10.405 4.027-.635 0-1.274-.05-1.911-.123l-.02-.018zM22.723 6.065c-.181-.006-.361-.024-.541-.024-4.229 0-8.148 1.54-11.113 4.32l-3.18-3.18C10.027 5.213 12.871 4 16 4c2.489 0 4.803.763 6.723 2.065zM7.182 7.889l3.174 3.174c-2.895 3.09-4.421 7.286-4.296 11.652A11.929 11.929 0 0 1 4 16c0-3.129 1.213-5.973 3.182-8.111zm2.095 18.046c.181.006.362.024.542.024 4.229 0 8.148-1.539 11.112-4.32l3.18 3.18C21.973 26.787 19.129 28 16 28a11.94 11.94 0 0 1-6.723-2.065zm15.541-1.824l-3.174-3.174c2.895-3.09 4.421-7.286 4.296-11.652A11.929 11.929 0 0 1 28 16c0 3.129-1.213 5.973-3.182 8.111z"
  }));
};

var _default = SvgComponent;
exports.default = _default;