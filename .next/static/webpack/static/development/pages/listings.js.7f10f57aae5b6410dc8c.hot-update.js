webpackHotUpdate("static/development/pages/listings.js",{

/***/ "./pages/listings.js":
/*!***************************!*\
  !*** ./pages/listings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./components/Dashboard/Dashboard.js");

var _jsxFileName = "/Users/kenny/eazyrent/pages/listings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Listings = function Listings(_ref) {
  var users = _ref.users;
  var userListings = [],
      otherListings = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      listingToRender = _useState[0],
      changeListing = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('userListings'),
      toggleStatus = _useState2[0],
      toggle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('abgfigu143668'),
      testUser = _useState3[0]; // useEffect(()=>{
  // });


  for (var user in users) {
    if (user === testUser) {
      userListings = users[testUser].listings;
      changeListing(userListings);
    } else {
      otherListings = users[user].listings;
      changeListing(otherListings);
    }

    ;
  }

  console.log(listingToRender);
  return __jsx(_components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageTitle: "Listings - EazyRent",
    route: "listings",
    toggle: toggle,
    toggleStatus: toggleStatus,
    listings: otherListings,
    user: testUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  });
};

Listings.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3004/users'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            users: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ })

})
//# sourceMappingURL=listings.js.7f10f57aae5b6410dc8c.hot-update.js.map