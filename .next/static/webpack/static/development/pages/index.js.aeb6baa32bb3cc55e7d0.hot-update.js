webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ActionBox/ActionBox.js":
/*!*******************************************!*\
  !*** ./components/ActionBox/ActionBox.js ***!
  \*******************************************/
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
var _jsxFileName = "/Users/kenny/eazyrent/components/ActionBox/ActionBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ActionBox = function ActionBox(_ref) {
  var numberOfLikes = _ref.numberOfLikes,
      numberOfHomes = _ref.numberOfHomes;
  return __jsx("div", {
    className: "jsx-3430453090",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3430453090" + " " + "actions__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "overview"), __jsx("div", {
    className: "jsx-3430453090" + " " + "actions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/listings');
    },
    className: "jsx-3430453090" + " " + "action-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3430453090" + " " + "action-box__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: "/img/home-rent.png",
    className: "jsx-3430453090" + " " + "action-box__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3430453090" + " " + "action-box__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Your homes"), __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, numberOfHomes)))), __jsx("div", {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/likes');
    },
    className: "jsx-3430453090" + " " + "action-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3430453090" + " " + "action-box__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: "/img/like.png",
    className: "jsx-3430453090" + " " + "action-box__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3430453090" + " " + "action-box__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Liked Homes"), __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, numberOfLikes)))), __jsx("div", {
    className: "jsx-3430453090" + " " + "action-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3430453090" + " " + "action-box__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    src: "/img/paid.png",
    className: "jsx-3430453090" + " " + "action-box__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3430453090" + " " + "action-box__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Rent Paid"), __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\u20A6625,000")))), __jsx("div", {
    className: "jsx-3430453090" + " " + "action-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3430453090" + " " + "action-box__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: "/img/payout.png",
    className: "jsx-3430453090" + " " + "action-box__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-3430453090" + " " + "action-box__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Payouts made"), __jsx("span", {
    className: "jsx-3430453090" + " " + "action-box__text--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\u20A61,350,000"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3430453090",
    __self: this
  }, ".actions.jsx-3430453090{margin-top:1.5rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.actions__title.jsx-3430453090{margin-top:5rem;font-size:1.5rem;font-weight:500;text-transform:uppercase;}.action-box.jsx-3430453090{height:10rem;width:19rem;border-radius:1rem;background-color:white;box-shadow:0 .3rem 3rem rgba(0,0,0,0.1);cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;overflow:hidden;-webkit-transition:all .2s ease;transition:all .2s ease;}.action-box.jsx-3430453090:hover{background:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );}.action-box.jsx-3430453090:hover .action-box__content.jsx-3430453090,.action-box.jsx-3430453090:hover .action-box__content.jsx-3430453090 .action-box__text--title.jsx-3430453090{color:white;}.action-box.jsx-3430453090:hover .action-box__icon.jsx-3430453090{opacity:.1;}.action-box__content.jsx-3430453090{margin-left:2rem;width:70%;z-index:2;}.action-box__icon.jsx-3430453090{width:9rem;height:9rem;-webkit-transform:rotate(345deg);-ms-transform:rotate(345deg);transform:rotate(345deg);top:0;right:-.5rem;opacity:.3;z-index:1;position:absolute;-webkit-transition:all .2s ease;transition:all .2s ease;}.action-box__text--title.jsx-3430453090{display:block;text-transform:uppercase;font-size:1.1rem;font-weight:500;color:rgba(0,0,0,0.5);}.action-box__text--subtitle.jsx-3430453090{font-size:2.5rem;font-weight:600;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0FjdGlvbkJveC9BY3Rpb25Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNpQixBQUcyQyxBQU9GLEFBT0gsQUFlOEMsQUFJL0MsQUFJRCxBQUtNLEFBTU4sQUFZRyxBQVFHLFdBN0JyQixBQVVnQixDQWZoQixDQW5CZ0IsQ0E4Q2EsRUFyRFIsQ0FtQ1AsQUEwQk0sQ0FwRUwsS0FpRGMsRUFsQ04sRUE0QlQsRUExQ0csSUFPRyxBQTZEcEIsSUF6QkEsRUFpQnFCLEtBN0NNLEtBUEUsT0FxRFQsR0FqQ3BCLFFBWjZDLEtBOENsQixFQXJEM0Isb0JBc0RBLFNBOURrQyxJQWdCZixHQWdDVCxNQUNPLE1BaENBLE9BaUNGLFdBQ0QsVUFDUSxrQkFDTSw0QkFuQ0wsc0JBakJ2QixNQXFEQSxpRUFuQ3NCLGtCQUNGLGdCQUNRLHdEQUU1QiIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9BY3Rpb25Cb3gvQWN0aW9uQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEFjdGlvbkJveCA9ICh7bnVtYmVyT2ZMaWtlcywgbnVtYmVyT2ZIb21lc30pPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY3Rpb25zX190aXRsZVwiPm92ZXJ2aWV3PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWJveFwiIG9uQ2xpY2s9eygpPT5Sb3V0ZXIucHVzaCgnL2xpc3RpbmdzJyl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWN0aW9uLWJveF9faWNvblwiIHNyYz1cIi9pbWcvaG9tZS1yZW50LnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY3Rpb24tYm94X190ZXh0LS10aXRsZVwiPllvdXIgaG9tZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX3RleHQtLXN1YnRpdGxlXCI+e251bWJlck9mSG9tZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1ib3hcIiBvbkNsaWNrPXsoKT0+Um91dGVyLnB1c2goJy9saWtlcycpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYm94X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX2ljb25cIiBzcmM9XCIvaW1nL2xpa2UucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWN0aW9uLWJveF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX3RleHQtLXRpdGxlXCI+TGlrZWQgSG9tZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX3RleHQtLXN1YnRpdGxlXCI+e251bWJlck9mTGlrZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYm94X19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX2ljb25cIiBzcmM9XCIvaW1nL3BhaWQucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWN0aW9uLWJveF9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX3RleHQtLXRpdGxlXCI+UmVudCBQYWlkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9XCJhY3Rpb24tYm94X190ZXh0LS1zdWJ0aXRsZVwiPuKCpjYyNSwwMDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWN0aW9uLWJveF9faWNvblwiIHNyYz1cIi9pbWcvcGF5b3V0LnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjdGlvbi1ib3hfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY3Rpb24tYm94X190ZXh0LS10aXRsZVwiPlBheW91dHMgbWFkZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPVwiYWN0aW9uLWJveF9fdGV4dC0tc3VidGl0bGVcIj7igqYxLDM1MCwwMDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb25ze1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uc19fdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb24tYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLjNyZW0gM3JlbSByZ2JhKDAsMCwwLCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uLWJveDpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjI5OTRhIDAlLCNmMmM5NGMgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1ib3g6aG92ZXIgLmFjdGlvbi1ib3hfX2NvbnRlbnQsIC5hY3Rpb24tYm94OmhvdmVyIC5hY3Rpb24tYm94X19jb250ZW50IC5hY3Rpb24tYm94X190ZXh0LS10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb24tYm94OmhvdmVyIC5hY3Rpb24tYm94X19pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNzVkZWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1ib3hfX2NvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1ib3hfX2ljb257XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM0NWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFjdGlvbi1ib3hfX3RleHQtLXRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uLWJveF9fdGV4dC0tc3VidGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAuYWN0aW9uLWJveC0tMXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZDM4MzEyIDAlLCNhODMyNzkgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gLmFjdGlvbi1ib3gtLTJ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNGU1MCAwJSwjZjlkNDIzIDEwMCUgKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIC5hY3Rpb24tYm94LS0ze1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmUyNTkgMCUsI2ZmYTc1MSAxMDAlICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQm94OyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ActionBox/ActionBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ActionBox);

/***/ })

})
//# sourceMappingURL=index.js.aeb6baa32bb3cc55e7d0.hot-update.js.map