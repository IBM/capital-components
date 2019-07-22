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
    d: "M33.785 35.765a18.12 18.12 0 0 1-2.27 1.696 44.73 44.73 0 0 0-2.373 1.631c-1.58 1.078-2.826 2.344-3.74 3.799C24.488 44.347 24.019 46.052 24 48h15.967v-3.431H28.576c.156-.515.443-1 .871-1.46.418-.461.916-.901 1.48-1.329a30.9 30.9 0 0 1 1.855-1.276 53.19 53.19 0 0 0 2.008-1.343c.666-.47 1.314-.977 1.938-1.517a12.142 12.142 0 0 0 1.666-1.762 8.178 8.178 0 0 0 1.172-2.101c.289-.76.434-1.614.434-2.553 0-.761-.123-1.563-.365-2.403a6.612 6.612 0 0 0-1.256-2.339c-.588-.715-1.363-1.311-2.32-1.78-.955-.471-2.151-.706-3.575-.706-1.313 0-2.469.231-3.457.69a7.365 7.365 0 0 0-2.523 1.897c-.689.809-1.207 1.765-1.551 2.875-.346 1.108-.52 2.316-.52 3.612h3.807c.025-.826.108-1.6.25-2.32.149-.715.369-1.337.67-1.863a3.358 3.358 0 0 1 1.203-1.244c.5-.299 1.127-.456 1.887-.456.824 0 1.49.142 2.004.422.512.281.914.63 1.203 1.043.289.416.484.861.586 1.346.098.482.148.937.148 1.359-.021.917-.254 1.732-.703 2.438a8.924 8.924 0 0 1-1.703 1.966z"
  }), _react.default.createElement("path", {
    d: "M2 8v48h60V8H2zm58 46H4V18h56v36z"
  }));
};

var _default = SvgComponent;
exports.default = _default;