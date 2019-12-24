webpackHotUpdate("static/development/pages/listings.js",{

/***/ "./components/ImageGallery/ImageGallery.js":
/*!*************************************************!*\
  !*** ./components/ImageGallery/ImageGallery.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/ImageGallery/ImageGallery.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ImageGallery = function ImageGallery() {
  var images = ['/img/home-1.jpg', '/img/home-2.jpg', '/img/home-3.jpg', '/img/home-4.jpg', '/img/home-5.jpg'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(images[0]),
      activeImage = _useState[0],
      changeImage = _useState[1];

  return __jsx("div", {
    className: "jsx-3727729929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3727729929" + " " + "image-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    alt: "mainImage",
    src: activeImage,
    className: "jsx-3727729929" + " " + "image-gallery__active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3727729929" + " " + "image-gallery__inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, images.map(function (v, i) {
    if (images[i] === activeImage) {
      return __jsx("img", {
        key: images[i],
        alt: "activeImage",
        src: images[i],
        onClick: function onClick() {
          return changeImage(images[i]);
        },
        className: "jsx-3727729929" + " " + "image-gallery__inactive--images image-gallery__inactive--images--active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    } else {
      return __jsx("img", {
        key: images[i],
        alt: "inactiveImage",
        src: images[i],
        onClick: function onClick() {
          return changeImage(images[i]);
        },
        className: "jsx-3727729929" + " " + "image-gallery__inactive--images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3727729929",
    __self: this
  }, ".image-gallery.jsx-3727729929{width:35rem;min-height:30rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.image-gallery__active.jsx-3727729929{height:20rem;width:100%;border-radius:1rem;margin-bottom:2rem;cursor:pointer;}.image-gallery__inactive.jsx-3727729929{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;}.image-gallery__inactive--images.jsx-3727729929{width:7.5rem;border-radius:.5rem;margin-bottom:1rem;cursor:pointer;}.image-gallery__inactive--images--active.jsx-3727729929{outline:.2rem solid #f2994a;outline-offset:.2rem;}.image-gallery__inactive--images.jsx-3727729929:hover{outline:.2rem solid #f2994a;outline-offset:.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS9JbWFnZUdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JpQixBQUdxQyxBQVFDLEFBUUYsQUFTRSxBQU9lLEFBS0EsV0FuQmYsQ0FqQkksQ0FRTixBQWlCUyxXQWhCRCxJQXVCRSxBQUtBLENBcENSLElBeUJNLFVBaEJBLE1BdUJ2QixBQUtBLEdBWG1CLFVBaEJBLEtBaUJuQixVQWhCQSxRQU1tQixrQkFoQk8sdUNBaUJRLHVDQWhCQSw0RUFpQkgsdUNBaEIvQix1REFpQkEiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5L0ltYWdlR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZUdhbGxlcnkgPSAoKT0+e1xuICAgIGNvbnN0IGltYWdlcyA9IFsnL2ltZy9ob21lLTEuanBnJywgJy9pbWcvaG9tZS0yLmpwZycsICcvaW1nL2hvbWUtMy5qcGcnLCAnL2ltZy9ob21lLTQuanBnJywgJy9pbWcvaG9tZS01LmpwZyddO1xuICAgIGNvbnN0IFthY3RpdmVJbWFnZSwgY2hhbmdlSW1hZ2VdID0gdXNlU3RhdGUoaW1hZ2VzWzBdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1nYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJtYWluSW1hZ2VcIiBjbGFzc05hbWU9XCJpbWFnZS1nYWxsZXJ5X19hY3RpdmVcIiBzcmM9e2FjdGl2ZUltYWdlfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW1hZ2VzW2ldID09PSBhY3RpdmVJbWFnZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aW1hZ2VzW2ldfSBhbHQ9XCJhY3RpdmVJbWFnZVwiIGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlfX2luYWN0aXZlLS1pbWFnZXMgaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlcy0tYWN0aXZlXCIgc3JjPXtpbWFnZXNbaV19IG9uQ2xpY2s9eygpPT4gY2hhbmdlSW1hZ2UoaW1hZ2VzW2ldKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBrZXk9e2ltYWdlc1tpXX0gYWx0PVwiaW5hY3RpdmVJbWFnZVwiIGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlfX2luYWN0aXZlLS1pbWFnZXNcIiBzcmM9e2ltYWdlc1tpXX0gb25DbGljaz17KCk9PiBjaGFuZ2VJbWFnZShpbWFnZXNbaV0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1nYWxsZXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWdhbGxlcnlfX2FjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1pbi1oZWlnaHQ6IDEycmVtOyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWdhbGxlcnlfX2luYWN0aXZlLS1pbWFnZXN7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNy41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlcy0tYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogLjJyZW0gc29saWQgI2YyOTk0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWdhbGxlcnlfX2luYWN0aXZlLS1pbWFnZXM6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAuMnJlbSBzb2xpZCAjZjI5OTRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC4ycmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNy41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9ICovXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBJbWFnZUdhbGxlcnk7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ImageGallery/ImageGallery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ })

})
//# sourceMappingURL=listings.js.d6359542b78bb33ec50e.hot-update.js.map