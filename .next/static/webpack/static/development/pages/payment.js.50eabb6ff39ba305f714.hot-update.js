webpackHotUpdate("static/development/pages/payment.js",{

/***/ "./components/Dashboard/Dashboard.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meta_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Meta/Meta */ "./components/Meta/Meta.js");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./components/Sidebar/Sidebar.js");
/* harmony import */ var _MainContent_MainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainContent/MainContent */ "./components/MainContent/MainContent.js");
/* harmony import */ var _ProfileForm_ProfileForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProfileForm/ProfileForm */ "./components/ProfileForm/ProfileForm.js");
/* harmony import */ var _ProfileBox_ProfileBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProfileBox/ProfileBox */ "./components/ProfileBox/ProfileBox.js");
/* harmony import */ var _AlertBox_AlertBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AlertBox/AlertBox */ "./components/AlertBox/AlertBox.js");
/* harmony import */ var _Bank_Bank__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Bank/Bank */ "./components/Bank/Bank.js");
/* harmony import */ var _FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FloatingButton/FloatingButton */ "./components/FloatingButton/FloatingButton.js");
/* harmony import */ var _PaymentForm_PaymentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PaymentForm/PaymentForm */ "./components/PaymentForm/PaymentForm.js");
/* harmony import */ var _Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Searchbar/Searchbar */ "./components/Searchbar/Searchbar.js");
/* harmony import */ var _ListingTitle_ListingTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ListingTitle/ListingTitle */ "./components/ListingTitle/ListingTitle.js");
/* harmony import */ var _Listings_Listings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Listings/Listings */ "./components/Listings/Listings.js");
/* harmony import */ var _BackButton_BackButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../BackButton/BackButton */ "./components/BackButton/BackButton.js");
/* harmony import */ var _ImageGallery_ImageGallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ImageGallery/ImageGallery */ "./components/ImageGallery/ImageGallery.js");
/* harmony import */ var _DetailBox_DetailBox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../DetailBox/DetailBox */ "./components/DetailBox/DetailBox.js");
/* harmony import */ var _DescriptionBox_DescriptionBox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../DescriptionBox/DescriptionBox */ "./components/DescriptionBox/DescriptionBox.js");
/* harmony import */ var _Map_Map__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Map/Map */ "./components/Map/Map.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/Dashboard/Dashboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















var Dashboard = function Dashboard(props) {
  var componentToRender;

  switch (props.route) {
    case "main":
      componentToRender = __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "I'm the main");
      break;

    case "listings":
      componentToRender = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(_Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx(_ListingTitle_ListingTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
        toggle: props.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx(_Listings_Listings__WEBPACK_IMPORTED_MODULE_13__["default"], {
        listings: props.listings,
        toggleStatus: props.toggleStatus,
        testUser: props.testUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
      break;

    case "add-listing":
      componentToRender = __jsx("div", {
        className: "jsx-1784096716",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Back to listings",
        route: "/listings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("h1", {
        className: "jsx-1784096716" + " " + "add-listing__title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Add listing"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1784096716",
        __self: this
      }, ".add-listing__title.jsx-1784096716{margin-top:5rem;font-size:3.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN5QixBQUdpRCxnQkFDQyxpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXRhIGZyb20gJy4uL01ldGEvTWV0YSc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9TaWRlYmFyL1NpZGViYXInO1xuaW1wb3J0IE1haW5Db250ZW50IGZyb20gJy4uL01haW5Db250ZW50L01haW5Db250ZW50JztcbmltcG9ydCBQcm9maWxlRm9ybSBmcm9tICcuLi9Qcm9maWxlRm9ybS9Qcm9maWxlRm9ybSc7XG5pbXBvcnQgUHJvZmlsZUJveCBmcm9tICcuLi9Qcm9maWxlQm94L1Byb2ZpbGVCb3gnO1xuaW1wb3J0IEFsZXJ0Qm94IGZyb20gJy4uL0FsZXJ0Qm94L0FsZXJ0Qm94JztcbmltcG9ydCBCYW5rIGZyb20gJy4uL0JhbmsvQmFuayc7XG5pbXBvcnQgRmxvYXRpbmdCdXR0b24gZnJvbSAnLi4vRmxvYXRpbmdCdXR0b24vRmxvYXRpbmdCdXR0b24nO1xuaW1wb3J0IFBheW1lbnRGb3JtIGZyb20gJy4uL1BheW1lbnRGb3JtL1BheW1lbnRGb3JtJztcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnLi4vU2VhcmNoYmFyL1NlYXJjaGJhcic7XG5pbXBvcnQgTGlzdGluZ1RpdGxlIGZyb20gJy4uL0xpc3RpbmdUaXRsZS9MaXN0aW5nVGl0bGUnO1xuaW1wb3J0IExpc3RpbmdzIGZyb20gJy4uL0xpc3RpbmdzL0xpc3RpbmdzJztcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uL0JhY2tCdXR0b24vQmFja0J1dHRvbic7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uL0ltYWdlR2FsbGVyeS9JbWFnZUdhbGxlcnknO1xuaW1wb3J0IERldGFpbEJveCBmcm9tICcuLi9EZXRhaWxCb3gvRGV0YWlsQm94JztcbmltcG9ydCBEZXNjcmlwdGlvbkJveCBmcm9tICcuLi9EZXNjcmlwdGlvbkJveC9EZXNjcmlwdGlvbkJveCc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL01hcC9NYXAnO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpPT4ge1xuICAgIGxldCBjb21wb25lbnRUb1JlbmRlcjtcbiAgICBzd2l0Y2ggKHByb3BzLnJvdXRlKSB7XG4gICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxwPkknbSB0aGUgbWFpbjwvcD47XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibGlzdGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ1RpdGxlIHRvZ2dsZT17cHJvcHMudG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0aW5ncyBsaXN0aW5ncz17cHJvcHMubGlzdGluZ3N9IHRvZ2dsZVN0YXR1cz17cHJvcHMudG9nZ2xlU3RhdHVzfSB0ZXN0VXNlcj17cHJvcHMudGVzdFVzZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWRkLWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhZGQtbGlzdGluZ19fdGl0bGVcIj5BZGQgbGlzdGluZzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQtbGlzdGluZ19fdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInZpZXctbGlzdGluZ1wiOlxuICAgICAgICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJhY2tCdXR0b24gdGV4dD1cIkJhY2sgdG8gbGlzdGluZ3NcIiByb3V0ZT1cIi9saXN0aW5nc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUdhbGxlcnkgaW1hZ2VzPXtwcm9wcy5saXN0aW5nLmltYWdlc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbEJveCBsaXN0aW5nPXtwcm9wcy5saXN0aW5nfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uQm94Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tZGV0YWlsc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuYXBwX19tYWluLS1kZXRhaWxzOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicHJvZmlsZVwiOlxuICAgICAgICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVCb3gvPlxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUZvcm0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJzZXR0aW5nc1wiOlxuICAgICAgICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8aDE+U2V0dGluZ3MgcGFnZTwvaDE+O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInBheW1lbnRcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydEJveCBtZXNzYWdlPXtwcm9wcy5hbGVydH0vPlxuICAgICAgICAgICAgICAgICAgICA8QmFuayBiYW5rcz17cHJvcHMuYmFua3N9IGVkaXRCYW5rPXtwcm9wcy5lZGl0QmFua30gZGVsZXRlQmFuaz17cHJvcHMuZGVsZXRlQmFua30gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0vPlxuICAgICAgICAgICAgICAgICAgICA8UGF5bWVudEZvcm0gY2hhbmdlSW5wdXQ9e3Byb3BzLmNoYW5nZUlucHV0fSBmb3JtPXtwcm9wcy5mb3JtfSBjaGFuZ2VGb3JtPXtwcm9wcy5jaGFuZ2VGb3JtfSBhZGRUb0JhbmtzPXtwcm9wcy5hZGRCYW5rfSBvdmVyd3JpdGVCYW5rPXtwcm9wcy5vdmVyd3JpdGVCYW5rfSBiYW5rVG9FZGl0PXtwcm9wcy5iYW5rVG9FZGl0fS8+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5mb3JtID09PSAnJyA/IDxGbG9hdGluZ0J1dHRvbiBjaGFuZ2VGb3JtPXtwcm9wcy5jaGFuZ2VGb3JtfSBzaG93QWxlcnQ9e3Byb3BzLnNob3dBbGVydH0vPiA6IDxzcGFuPjwvc3Bhbj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNZXRhIHBhZ2VUaXRsZT17cHJvcHMucGFnZVRpdGxlfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIHJvdXRlPXtwcm9wcy5yb3V0ZX0vPlxuICAgICAgICAgICAgICAgIDxNYWluQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudFRvUmVuZGVyfVxuICAgICAgICAgICAgICAgIDwvTWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmFwcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHAgPiAqe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Dashboard/Dashboard.js */"));
      break;

    case "view-listing":
      componentToRender = __jsx("div", {
        className: "jsx-800398638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Back to listings",
        route: "/listings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-800398638" + " " + "app__main--details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_ImageGallery_ImageGallery__WEBPACK_IMPORTED_MODULE_15__["default"], {
        images: props.listing.images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx(_DetailBox_DetailBox__WEBPACK_IMPORTED_MODULE_16__["default"], {
        listing: props.listing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-800398638" + " " + "app__main--details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_DescriptionBox_DescriptionBox__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx(_Map_Map__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "800398638",
        __self: this
      }, ".app__main--details.jsx-800398638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:5rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUV5QixBQUc4QywwRUFDaUIsbUhBQ2hCLGNBRWxCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9NZXRhL01ldGEnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9NYWluQ29udGVudC9NYWluQ29udGVudCc7XG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi4vUHJvZmlsZUZvcm0vUHJvZmlsZUZvcm0nO1xuaW1wb3J0IFByb2ZpbGVCb3ggZnJvbSAnLi4vUHJvZmlsZUJveC9Qcm9maWxlQm94JztcbmltcG9ydCBBbGVydEJveCBmcm9tICcuLi9BbGVydEJveC9BbGVydEJveCc7XG5pbXBvcnQgQmFuayBmcm9tICcuLi9CYW5rL0JhbmsnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9QYXltZW50Rm9ybS9QYXltZW50Rm9ybSc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4uL1NlYXJjaGJhci9TZWFyY2hiYXInO1xuaW1wb3J0IExpc3RpbmdUaXRsZSBmcm9tICcuLi9MaXN0aW5nVGl0bGUvTGlzdGluZ1RpdGxlJztcbmltcG9ydCBMaXN0aW5ncyBmcm9tICcuLi9MaXN0aW5ncy9MaXN0aW5ncyc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uL0JhY2tCdXR0b24nO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9JbWFnZUdhbGxlcnkvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBEZXRhaWxCb3ggZnJvbSAnLi4vRGV0YWlsQm94L0RldGFpbEJveCc7XG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vRGVzY3JpcHRpb25Cb3gvRGVzY3JpcHRpb25Cb3gnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAvTWFwJztcblxuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKT0+IHtcbiAgICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gICAgc3dpdGNoIChwcm9wcy5yb3V0ZSkge1xuICAgICAgICBjYXNlIFwibWFpblwiOlxuICAgICAgICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8cD5JJ20gdGhlIG1haW48L3A+O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImxpc3RpbmdzXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoYmFyLz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RpbmdUaXRsZSB0b2dnbGU9e3Byb3BzLnRvZ2dsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ3MgbGlzdGluZ3M9e3Byb3BzLmxpc3RpbmdzfSB0b2dnbGVTdGF0dXM9e3Byb3BzLnRvZ2dsZVN0YXR1c30gdGVzdFVzZXI9e3Byb3BzLnRlc3RVc2VyfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImFkZC1saXN0aW5nXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QmFja0J1dHRvbiB0ZXh0PVwiQmFjayB0byBsaXN0aW5nc1wiIHJvdXRlPVwiL2xpc3RpbmdzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWRkLWxpc3RpbmdfX3RpdGxlXCI+QWRkIGxpc3Rpbmc8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkLWxpc3RpbmdfX3RpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ2aWV3LWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IGltYWdlcz17cHJvcHMubGlzdGluZy5pbWFnZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxCb3ggbGlzdGluZz17cHJvcHMubGlzdGluZ30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJveC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmFwcF9fbWFpbi0tZGV0YWlsczpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInByb2ZpbGVcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGb3JtLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPGgxPlNldHRpbmdzIHBhZ2U8L2gxPjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwYXltZW50XCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRCb3ggbWVzc2FnZT17cHJvcHMuYWxlcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmsgYmFua3M9e3Byb3BzLmJhbmtzfSBlZGl0QmFuaz17cHJvcHMuZWRpdEJhbmt9IGRlbGV0ZUJhbms9e3Byb3BzLmRlbGV0ZUJhbmt9IGNoYW5nZUZvcm09e3Byb3BzLmNoYW5nZUZvcm19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtIGNoYW5nZUlucHV0PXtwcm9wcy5jaGFuZ2VJbnB1dH0gZm9ybT17cHJvcHMuZm9ybX0gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gYWRkVG9CYW5rcz17cHJvcHMuYWRkQmFua30gb3ZlcndyaXRlQmFuaz17cHJvcHMub3ZlcndyaXRlQmFua30gYmFua1RvRWRpdD17cHJvcHMuYmFua1RvRWRpdH0vPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybSA9PT0gJycgPyA8RmxvYXRpbmdCdXR0b24gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gc2hvd0FsZXJ0PXtwcm9wcy5zaG93QWxlcnR9Lz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWV0YSBwYWdlVGl0bGU9e3Byb3BzLnBhZ2VUaXRsZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciByb3V0ZT17cHJvcHMucm91dGV9Lz5cbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cbiAgICAgICAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Dashboard/Dashboard.js */"));
      break;

    case "profile":
      componentToRender = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_ProfileBox_ProfileBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx(_ProfileForm_ProfileForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }));
      break;

    case "settings":
      componentToRender = __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Settings page");
      break;

    case "payment":
      componentToRender = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(_AlertBox_AlertBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: props.alert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx(_Bank_Bank__WEBPACK_IMPORTED_MODULE_8__["default"], {
        banks: props.banks,
        editBank: props.editBank,
        deleteBank: props.deleteBank,
        changeForm: props.changeForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx(_PaymentForm_PaymentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        changeInput: props.changeInput,
        form: props.form,
        changeForm: props.changeForm,
        addToBanks: props.addBank,
        overwriteBank: props.overwriteBank,
        bankToEdit: props.bankToEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), props.form === '' ? __jsx(_FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        changeForm: props.changeForm,
        showAlert: props.showAlert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }) : __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
      break;
  }

  return __jsx("div", {
    className: "jsx-3993600936",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(_Meta_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: props.pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3993600936" + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: props.route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, componentToRender)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3993600936",
    __self: this
  }, ".app.jsx-3993600936{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.app.jsx-3993600936>*.jsx-3993600936{height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUhpQixBQUdvQyxBQU1JLFdBTEYsSUFNakIsU0FMaUIsMEVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9NZXRhL01ldGEnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9NYWluQ29udGVudC9NYWluQ29udGVudCc7XG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi4vUHJvZmlsZUZvcm0vUHJvZmlsZUZvcm0nO1xuaW1wb3J0IFByb2ZpbGVCb3ggZnJvbSAnLi4vUHJvZmlsZUJveC9Qcm9maWxlQm94JztcbmltcG9ydCBBbGVydEJveCBmcm9tICcuLi9BbGVydEJveC9BbGVydEJveCc7XG5pbXBvcnQgQmFuayBmcm9tICcuLi9CYW5rL0JhbmsnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9QYXltZW50Rm9ybS9QYXltZW50Rm9ybSc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4uL1NlYXJjaGJhci9TZWFyY2hiYXInO1xuaW1wb3J0IExpc3RpbmdUaXRsZSBmcm9tICcuLi9MaXN0aW5nVGl0bGUvTGlzdGluZ1RpdGxlJztcbmltcG9ydCBMaXN0aW5ncyBmcm9tICcuLi9MaXN0aW5ncy9MaXN0aW5ncyc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uL0JhY2tCdXR0b24nO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9JbWFnZUdhbGxlcnkvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBEZXRhaWxCb3ggZnJvbSAnLi4vRGV0YWlsQm94L0RldGFpbEJveCc7XG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vRGVzY3JpcHRpb25Cb3gvRGVzY3JpcHRpb25Cb3gnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAvTWFwJztcblxuY29uc3QgRGFzaGJvYXJkID0gKHByb3BzKT0+IHtcbiAgICBsZXQgY29tcG9uZW50VG9SZW5kZXI7XG4gICAgc3dpdGNoIChwcm9wcy5yb3V0ZSkge1xuICAgICAgICBjYXNlIFwibWFpblwiOlxuICAgICAgICAgICAgY29tcG9uZW50VG9SZW5kZXIgPSA8cD5JJ20gdGhlIG1haW48L3A+O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImxpc3RpbmdzXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoYmFyLz5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RpbmdUaXRsZSB0b2dnbGU9e3Byb3BzLnRvZ2dsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ3MgbGlzdGluZ3M9e3Byb3BzLmxpc3RpbmdzfSB0b2dnbGVTdGF0dXM9e3Byb3BzLnRvZ2dsZVN0YXR1c30gdGVzdFVzZXI9e3Byb3BzLnRlc3RVc2VyfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImFkZC1saXN0aW5nXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QmFja0J1dHRvbiB0ZXh0PVwiQmFjayB0byBsaXN0aW5nc1wiIHJvdXRlPVwiL2xpc3RpbmdzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWRkLWxpc3RpbmdfX3RpdGxlXCI+QWRkIGxpc3Rpbmc8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkLWxpc3RpbmdfX3RpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ2aWV3LWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IGltYWdlcz17cHJvcHMubGlzdGluZy5pbWFnZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxCb3ggbGlzdGluZz17cHJvcHMubGlzdGluZ30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJveC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmFwcF9fbWFpbi0tZGV0YWlsczpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInByb2ZpbGVcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGb3JtLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPGgxPlNldHRpbmdzIHBhZ2U8L2gxPjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwYXltZW50XCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRCb3ggbWVzc2FnZT17cHJvcHMuYWxlcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmsgYmFua3M9e3Byb3BzLmJhbmtzfSBlZGl0QmFuaz17cHJvcHMuZWRpdEJhbmt9IGRlbGV0ZUJhbms9e3Byb3BzLmRlbGV0ZUJhbmt9IGNoYW5nZUZvcm09e3Byb3BzLmNoYW5nZUZvcm19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtIGNoYW5nZUlucHV0PXtwcm9wcy5jaGFuZ2VJbnB1dH0gZm9ybT17cHJvcHMuZm9ybX0gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gYWRkVG9CYW5rcz17cHJvcHMuYWRkQmFua30gb3ZlcndyaXRlQmFuaz17cHJvcHMub3ZlcndyaXRlQmFua30gYmFua1RvRWRpdD17cHJvcHMuYmFua1RvRWRpdH0vPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybSA9PT0gJycgPyA8RmxvYXRpbmdCdXR0b24gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gc2hvd0FsZXJ0PXtwcm9wcy5zaG93QWxlcnR9Lz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWV0YSBwYWdlVGl0bGU9e3Byb3BzLnBhZ2VUaXRsZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciByb3V0ZT17cHJvcHMucm91dGV9Lz5cbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cbiAgICAgICAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Dashboard/Dashboard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=payment.js.50eabb6ff39ba305f714.hot-update.js.map