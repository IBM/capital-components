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
    d: "M16 13.06v.799H.022V2.141h.799V13.06H16zM2.951 11.196c.746 0 1.332-.586 1.332-1.332 0-.266-.08-.533-.213-.746l1.864-2.29c.16.053.32.107.479.107.32 0 .613-.107.826-.293L9.13 7.894c-.027.133-.053.24-.053.373 0 .746.586 1.332 1.332 1.332.746 0 1.332-.586 1.332-1.332 0-.266-.08-.479-.186-.692l2.051-2.344c.16.08.346.107.533.107.746 0 1.332-.586 1.332-1.332s-.586-1.332-1.332-1.332-1.332.586-1.332 1.332c0 .266.08.479.186.692L10.94 7.041a1.192 1.192 0 0 0-.533-.107c-.32 0-.613.107-.826.293l-1.89-1.251a1.56 1.56 0 0 0 .053-.373c0-.746-.586-1.332-1.332-1.332s-1.331.587-1.331 1.332c0 .266.08.533.213.746L3.43 8.639c-.133-.08-.293-.107-.479-.107-.746 0-1.332.586-1.332 1.332s.586 1.332 1.332 1.332z"
  }));
};

var _default = SvgComponent;
exports.default = _default;