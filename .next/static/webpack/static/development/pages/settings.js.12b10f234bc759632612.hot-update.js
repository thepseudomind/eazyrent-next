webpackHotUpdate("static/development/pages/settings.js",{

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
    className: "jsx-4086089231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4086089231" + " " + "listings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, listings.map(function (v, i) {
    return __jsx(_ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: listings[i].id,
      id: listings[i].id,
      name: listings[i].name,
      address: listings[i].address,
      price: listings[i].price,
      type: listings[i].type,
      image: listings[i].images[0],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  })), toggleStatus === 'userListings' ? __jsx(_FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/addlisting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-4086089231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4086089231",
    __self: this
  }, ".listings.jsx-4086089231{margin-top:5rem;}.listings.jsx-4086089231>*.jsx-4086089231{margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdzL0xpc3RpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQixBQUd5QyxBQUlHLGdCQUh2QixHQUlBIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdzL0xpc3RpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3RpbmdDYXJkIGZyb20gJy4uL0xpc3RpbmdDYXJkL0xpc3RpbmdDYXJkJztcbmltcG9ydCBGbG9hdGluZ0J1dHRvbiBmcm9tICcuLi9GbG9hdGluZ0J1dHRvbi9GbG9hdGluZ0J1dHRvbic7XG5cbmNvbnN0IExpc3RpbmdzID0gKHtsaXN0aW5ncywgdG9nZ2xlU3RhdHVzfSkgPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLm1hcCgodiwgaSk9PiA8TGlzdGluZ0NhcmQga2V5PXtsaXN0aW5nc1tpXS5pZH0gaWQ9e2xpc3RpbmdzW2ldLmlkfSBuYW1lPXtsaXN0aW5nc1tpXS5uYW1lfSBhZGRyZXNzPXtsaXN0aW5nc1tpXS5hZGRyZXNzfSBwcmljZT17bGlzdGluZ3NbaV0ucHJpY2V9IHR5cGU9e2xpc3RpbmdzW2ldLnR5cGV9IGltYWdlPXtsaXN0aW5nc1tpXS5pbWFnZXNbMF19Lz4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dG9nZ2xlU3RhdHVzID09PSAndXNlckxpc3RpbmdzJyA/IDxGbG9hdGluZ0J1dHRvbiByb3V0ZT1cIi9hZGRsaXN0aW5nXCIvPiA6IDxzcGFuPjwvc3Bhbj59XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZ3MgPiAqe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nczsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Listings/Listings.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ })

})
//# sourceMappingURL=settings.js.12b10f234bc759632612.hot-update.js.map