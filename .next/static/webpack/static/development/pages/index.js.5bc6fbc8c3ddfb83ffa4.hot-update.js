webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Auth/Auth */ "./components/Auth/Auth.js");
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./components/Dashboard/Dashboard.js");
var _this = undefined,
    _jsxFileName = "/Users/kenny/eazyrent/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      user = _useState[0],
      authStatus = _useState[1];

  var logOut = function logOut() {
    authStatus(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, user ? __jsx(_components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Dashboard - EazyRent",
    route: "main",
    logout: _this.logOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }) : __jsx(_components_Auth_Auth__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}; // let housesLiked = [];
//     for (const listing of listings) {
//         for (const likes of listing.likes) {
//             if(likes === "abgfigu143668"){
//                 housesLiked.push(listing);
//             }
//         }
//     }


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.5bc6fbc8c3ddfb83ffa4.hot-update.js.map