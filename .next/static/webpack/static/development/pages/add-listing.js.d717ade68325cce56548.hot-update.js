webpackHotUpdate("static/development/pages/add-listing.js",{

/***/ "./pages/add-listing.js":
/*!******************************!*\
  !*** ./pages/add-listing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./components/Dashboard/Dashboard.js");



var _jsxFileName = "/Users/kenny/eazyrent/pages/add-listing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var addlisting = function addlisting() {
  //user: "abgfigu143668"
  var imagesToBeUploaded = [];

  var submitForm = function submitForm() {
    var dataToPost, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function submitForm$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dataToPost = {
              user: "j64ew0u143668",
              name: document.getElementById('title').value,
              address: document.getElementById('address').value,
              price: document.getElementById('price').value,
              type: document.getElementById('payment').value,
              city: document.getElementById('city').value,
              state: document.getElementById('state').value,
              beds: document.getElementById('beds').value,
              baths: document.getElementById('baths').value,
              description: document.getElementById('description').value,
              images: imagesToBeUploaded,
              likes: []
            };
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch('http://localhost:3004/listings', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(dataToPost)
            }));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

          case 6:
            data = _context.sent;
            console.log('Success', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data));
            next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/listings');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var getImages = function getImages(images) {
    imagesToBeUploaded = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(images), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var image = _step.value;
        convertImages(image);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var convertImages = function convertImages(image) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      imagesToBeUploaded.push(reader.result);
    });
    reader.readAsDataURL(image);
  };

  return __jsx(_components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    route: "add-listing",
    addListing: submitForm,
    getImages: getImages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (addlisting);

/***/ })

})
//# sourceMappingURL=add-listing.js.d717ade68325cce56548.hot-update.js.map