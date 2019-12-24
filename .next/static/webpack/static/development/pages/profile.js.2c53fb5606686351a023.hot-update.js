webpackHotUpdate("static/development/pages/profile.js",{

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


var ImageGallery = function ImageGallery(_ref) {
  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(images[0]),
      activeImage = _useState[0],
      changeImage = _useState[1];

  return __jsx("div", {
    className: "jsx-3727729929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3727729929" + " " + "image-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    alt: "mainImage",
    src: activeImage,
    className: "jsx-3727729929" + " " + "image-gallery__active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3727729929" + " " + "image-gallery__inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
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
          lineNumber: 13
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
          lineNumber: 15
        },
        __self: this
      });
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3727729929",
    __self: this
  }, ".image-gallery.jsx-3727729929{width:35rem;min-height:30rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.image-gallery__active.jsx-3727729929{height:20rem;width:100%;border-radius:1rem;margin-bottom:2rem;cursor:pointer;}.image-gallery__inactive.jsx-3727729929{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;}.image-gallery__inactive--images.jsx-3727729929{width:7.5rem;border-radius:.5rem;margin-bottom:1rem;cursor:pointer;}.image-gallery__inactive--images--active.jsx-3727729929{outline:.2rem solid #f2994a;outline-offset:.2rem;}.image-gallery__inactive--images.jsx-3727729929:hover{outline:.2rem solid #f2994a;outline-offset:.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS9JbWFnZUdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUdxQyxBQVFDLEFBUUYsQUFTRSxBQU9lLEFBS0EsV0FuQmYsQ0FqQkksQ0FRTixBQWlCUyxXQWhCRCxJQXVCRSxBQUtBLENBcENSLElBeUJNLFVBaEJBLE1BdUJ2QixBQUtBLEdBWG1CLFVBaEJBLEtBaUJuQixVQWhCQSxRQU1tQixrQkFoQk8sdUNBaUJRLHVDQWhCQSw0RUFpQkgsdUNBaEIvQix1REFpQkEiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5L0ltYWdlR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZUdhbGxlcnkgPSAoe2ltYWdlc30pPT57XG4gICAgY29uc3QgW2FjdGl2ZUltYWdlLCBjaGFuZ2VJbWFnZV0gPSB1c2VTdGF0ZShpbWFnZXNbMF0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1haW5JbWFnZVwiIGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlfX2FjdGl2ZVwiIHNyYz17YWN0aXZlSW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlfX2luYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbWFnZXNbaV0gPT09IGFjdGl2ZUltYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpbWFnZXNbaV19IGFsdD1cImFjdGl2ZUltYWdlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlcyBpbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZS0taW1hZ2VzLS1hY3RpdmVcIiBzcmM9e2ltYWdlc1tpXX0gb25DbGljaz17KCk9PiBjaGFuZ2VJbWFnZShpbWFnZXNbaV0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aW1hZ2VzW2ldfSBhbHQ9XCJpbmFjdGl2ZUltYWdlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlc1wiIHNyYz17aW1hZ2VzW2ldfSBvbkNsaWNrPXsoKT0+IGNoYW5nZUltYWdlKGltYWdlc1tpXSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWdhbGxlcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9fYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWluLWhlaWdodDogMTJyZW07ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3LjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZS0taW1hZ2VzLS1hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAuMnJlbSBzb2xpZCAjZjI5OTRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC4ycmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlczpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IC4ycmVtIHNvbGlkICNmMjk5NGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qIC5pbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZS0taW1hZ2Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3LjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeTsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ImageGallery/ImageGallery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ })

})
//# sourceMappingURL=profile.js.2c53fb5606686351a023.hot-update.js.map