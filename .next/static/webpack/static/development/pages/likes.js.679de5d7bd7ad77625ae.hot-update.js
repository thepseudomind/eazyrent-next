webpackHotUpdate("static/development/pages/likes.js",{

/***/ "./components/LikedHomes/LikedHomes.js":
/*!*********************************************!*\
  !*** ./components/LikedHomes/LikedHomes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListingCard/ListingCard */ "./components/ListingCard/ListingCard.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/LikedHomes/LikedHomes.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var LikedHomes = function LikedHomes(_ref) {
  var likedHomes = _ref.likedHomes;
  return __jsx("div", {
    className: "jsx-1567069336",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, likedHomes.length === 0 ? __jsx("h1", {
    className: "jsx-1567069336" + " " + "likes__none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "No homes liked...") : likedHomes.map(function (v, i) {
    return __jsx(_ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: likedHomes[i].id,
      id: likedHomes[i].id,
      name: likedHomes[i].name,
      address: likedHomes[i].address,
      price: likedHomes[i].price,
      type: likedHomes[i].type,
      image: likedHomes[i].images[0],
      beds: likedHomes[i].beds,
      baths: likedHomes[i].baths,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1567069336",
    __self: this
  }, ".likes__none.jsx-1567069336{-webkit-transform:translateY(17.5vh);-ms-transform:translateY(17.5vh);transform:translateY(17.5vh);font-size:5rem;font-weight:500;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpa2VkSG9tZXMvTGlrZWRIb21lcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFHc0QsbUdBQ2QsZUFDQyxnQkFDRSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvTGlrZWRIb21lcy9MaWtlZEhvbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3RpbmdDYXJkIGZyb20gXCIuLi9MaXN0aW5nQ2FyZC9MaXN0aW5nQ2FyZFwiXG5cbmNvbnN0IExpa2VkSG9tZXMgPSAoe2xpa2VkSG9tZXN9KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgIHtsaWtlZEhvbWVzLmxlbmd0aCA9PT0gMCA/IDxoMSBjbGFzc05hbWU9XCJsaWtlc19fbm9uZVwiPk5vIGhvbWVzIGxpa2VkLi4uPC9oMT4gOiBsaWtlZEhvbWVzLm1hcCgodiwgaSk9PiA8TGlzdGluZ0NhcmQga2V5PXtsaWtlZEhvbWVzW2ldLmlkfSBpZD17bGlrZWRIb21lc1tpXS5pZH0gbmFtZT17bGlrZWRIb21lc1tpXS5uYW1lfSBhZGRyZXNzPXtsaWtlZEhvbWVzW2ldLmFkZHJlc3N9IHByaWNlPXtsaWtlZEhvbWVzW2ldLnByaWNlfSB0eXBlPXtsaWtlZEhvbWVzW2ldLnR5cGV9IGltYWdlPXtsaWtlZEhvbWVzW2ldLmltYWdlc1swXX0gYmVkcz17bGlrZWRIb21lc1tpXS5iZWRzfSBiYXRocz17bGlrZWRIb21lc1tpXS5iYXRoc30vPil9XG4gICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAubGlrZXNfX25vbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTcuNXZoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VkSG9tZXM7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/LikedHomes/LikedHomes.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LikedHomes);

/***/ })

})
//# sourceMappingURL=likes.js.679de5d7bd7ad77625ae.hot-update.js.map