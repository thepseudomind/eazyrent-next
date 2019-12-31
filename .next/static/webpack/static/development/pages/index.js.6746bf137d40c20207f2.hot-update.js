webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LikedHomes/LikedHomes.js":
/*!*********************************************!*\
  !*** ./components/LikedHomes/LikedHomes.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ListingCard/ListingCard */ "./components/ListingCard/ListingCard.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/LikedHomes/LikedHomes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var LikedHomes = function LikedHomes(_ref) {
  var likedHomes = _ref.likedHomes;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, likedHomes.length === 0 ? __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "No homes liked") : likedHomes.map(function (v, i) {
    return __jsx(_ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LikedHomes);

/***/ })

})
//# sourceMappingURL=index.js.6746bf137d40c20207f2.hot-update.js.map