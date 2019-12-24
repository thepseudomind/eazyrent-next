webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/FloatingButton/FloatingButton.js":
/*!*****************************************************!*\
  !*** ./components/FloatingButton/FloatingButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kenny/eazyrent/components/FloatingButton/FloatingButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var FloatingButton = function FloatingButton(_ref) {
  var changeForm = _ref.changeForm,
      showAlert = _ref.showAlert,
      route = _ref.route;
  return __jsx("span", {
    className: "jsx-641074616",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    onClick: function onClick() {
      if (route) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(route);
      } else {
        showAlert('');
        changeForm('add');
      }
    },
    className: "jsx-641074616" + " " + "floating-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-641074616" + " " + "floating-button__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "+")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "641074616",
    __self: this
  }, ".floating-button.jsx-641074616{color:black;}.floating-button.jsx-641074616:link,.floating-button.jsx-641074616:link.jsx-641074616:active{position:fixed;-webkit-text-decoration:none;text-decoration:none;bottom:2rem;right:2rem;height:6rem;width:6rem;border-radius:50%;background-color:white;box-shadow:0 .2rem 3rem rgba(0,0,0,0.8);cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.floating-button__icon.jsx-641074616{font-size:4rem;color:transparent;background-clip:text;-webkit-background-clip:text;background-image:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQixBQUdxQyxBQUlHLEFBaUJBLFlBcEJuQixHQUl5QixBQWlCSCxrQkFDRyxxQkFDUSxXQWxCakIsWUFDRCxNQWtCc0QsS0FqQnJELFlBQ0QsV0FDTyxrQkFDSyxtQkFlM0IsSUFkK0Msd0NBQzVCLGVBQ1Msd0RBQ1gsMEVBQ1UsbUdBRTNCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEZsb2F0aW5nQnV0dG9uID0gKHtjaGFuZ2VGb3JtLCBzaG93QWxlcnQsIHJvdXRlfSk9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxvYXRpbmctYnV0dG9uXCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICBpZihyb3V0ZSl7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHJvdXRlKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRm9ybSgnYWRkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRpbmctYnV0dG9uX19pY29uXCI+Kzwvc3Bhbj48L2E+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5mbG9hdGluZy1idXR0b257XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5mbG9hdGluZy1idXR0b246bGluaywgLmZsb2F0aW5nLWJ1dHRvbjpsaW5rOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLjJyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZmxvYXRpbmctYnV0dG9uX19pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YyOTk0YSAwJSwjZjJjOTRjIDEwMCUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdCdXR0b247Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/FloatingButton/FloatingButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingButton);

/***/ })

})
//# sourceMappingURL=profile.js.0d1eec7725e954d4b90a.hot-update.js.map