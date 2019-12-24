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
    return __jsx(_ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      name: listings[i].name,
      address: listings[i].address,
      price: listings[i].price,
      type: listings[i].type,
      image: listings[i].imageUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  })), toggleStatus === 'userListings' ? __jsx(_FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-607206094",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "607206094",
    __self: this
  }, ".listings.jsx-607206094>*.jsx-607206094{margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdzL0xpc3RpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQixBQUc0QyxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvTGlzdGluZ3MvTGlzdGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlzdGluZ0NhcmQgZnJvbSAnLi4vTGlzdGluZ0NhcmQvTGlzdGluZ0NhcmQnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcblxuY29uc3QgTGlzdGluZ3MgPSAoe2xpc3RpbmdzLCB0b2dnbGVTdGF0dXN9KSA9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGluZ3MubWFwKCh2LCBpKT0+IDxMaXN0aW5nQ2FyZCBrZXk9e2l9IG5hbWU9e2xpc3RpbmdzW2ldLm5hbWV9IGFkZHJlc3M9e2xpc3RpbmdzW2ldLmFkZHJlc3N9IHByaWNlPXtsaXN0aW5nc1tpXS5wcmljZX0gdHlwZT17bGlzdGluZ3NbaV0udHlwZX0gaW1hZ2U9e2xpc3RpbmdzW2ldLmltYWdlVXJsfS8+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RvZ2dsZVN0YXR1cyA9PT0gJ3VzZXJMaXN0aW5ncycgPyA8RmxvYXRpbmdCdXR0b24vPiA6IDxzcGFuPjwvc3Bhbj59XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5ncyA+ICp7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Listings/Listings.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ })

})
//# sourceMappingURL=listings.js.e0312140c897c476aaae.hot-update.js.map