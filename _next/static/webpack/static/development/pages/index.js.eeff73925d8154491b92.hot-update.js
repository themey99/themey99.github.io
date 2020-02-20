webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/themey/projectsReact/bitcoinapp/components/Evento.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Evento = function Evento(props) {
  var _props$info = props.info,
      url = _props$info.url,
      title = _props$info.title,
      description = _props$info.description,
      source = _props$info.source;
  var desc = description;
  desc ? desc = desc.substr(0, 50) : null;
  return __jsx("a", {
    href: url,
    target: "_blank",
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, title), __jsx("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.eeff73925d8154491b92.hot-update.js.map