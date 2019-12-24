webpackHotUpdate("static/development/pages/listings.js",{

/***/ "./components/Listings/Listings.js":
/*!*****************************************!*\
  !*** ./components/Listings/Listings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListingCard/ListingCard */ "./components/ListingCard/ListingCard.js");
/* harmony import */ var _FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FloatingButton/FloatingButton */ "./components/FloatingButton/FloatingButton.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/Listings/Listings.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Listings = function Listings(_ref) {
  var listings = _ref.listings,
      toggleStatus = _ref.toggleStatus;
  return __jsx("div", {
    className: "jsx-607206094",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-607206094" + " " + "listings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, listings.map(function (v, i) {
    return __jsx("p", {
      className: "jsx-607206094",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, listings[i].name);
  }) // listings.map((v, i)=> <ListingCard key={i} name={listings[i].name} address={listings[i].address} price={listings[i].price} type={listings[i].type} image={listings[i].imageUrl}/>)
  ), toggleStatus === 'userListings' ? __jsx(_FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-607206094",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "607206094",
    __self: this
  }, ".listings.jsx-607206094>*.jsx-607206094{margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdzL0xpc3RpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQixBQUc0QyxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvTGlzdGluZ3MvTGlzdGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlzdGluZ0NhcmQgZnJvbSAnLi4vTGlzdGluZ0NhcmQvTGlzdGluZ0NhcmQnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcblxuY29uc3QgTGlzdGluZ3MgPSAoe2xpc3RpbmdzLCB0b2dnbGVTdGF0dXN9KSA9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MubWFwKCh2LGkpID0+IDxwPntsaXN0aW5nc1tpXS5uYW1lfTwvcD4pXG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RpbmdzLm1hcCgodiwgaSk9PiA8TGlzdGluZ0NhcmQga2V5PXtpfSBuYW1lPXtsaXN0aW5nc1tpXS5uYW1lfSBhZGRyZXNzPXtsaXN0aW5nc1tpXS5hZGRyZXNzfSBwcmljZT17bGlzdGluZ3NbaV0ucHJpY2V9IHR5cGU9e2xpc3RpbmdzW2ldLnR5cGV9IGltYWdlPXtsaXN0aW5nc1tpXS5pbWFnZVVybH0vPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0b2dnbGVTdGF0dXMgPT09ICd1c2VyTGlzdGluZ3MnID8gPEZsb2F0aW5nQnV0dG9uLz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZ3MgPiAqe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nczsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Listings/Listings.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ })

})
//# sourceMappingURL=listings.js.97b6a775a487e9ba03c3.hot-update.js.map