module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AlertBox/AlertBox.js":
/*!*****************************************!*\
  !*** ./components/AlertBox/AlertBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AlertBoxStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertBoxStyle */ "./components/AlertBox/AlertBoxStyle.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/AlertBox/AlertBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AlertBox = ({
  message
}) => {
  switch (message) {
    case 'Bank added':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: undefined
      }, __jsx("div", {
        className: "alert-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: undefined
      }, __jsx("p", {
        className: "alert-box__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      }, "Bank added")), __jsx(_AlertBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: undefined
      }));

    case 'Bank already added':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }, __jsx("div", {
        className: "alert-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, __jsx("p", {
        className: "alert-box__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, "Bank already added")), __jsx(_AlertBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: undefined
      }));

    case 'Maximum of 3 banks allowed':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }, __jsx("div", {
        className: "alert-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }, __jsx("p", {
        className: "alert-box__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: undefined
      }, "Maximum of 3 banks allowed")), __jsx(_AlertBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }));

    case 'Bank details changed':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: undefined
      }, __jsx("div", {
        className: "alert-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      }, __jsx("p", {
        className: "alert-box__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: undefined
      }, "Bank details changed")), __jsx(_AlertBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }));

    case 'Bank deleted':
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }, __jsx("div", {
        className: "alert-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      }, __jsx("p", {
        className: "alert-box__message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: undefined
      }, "Bank deleted")), __jsx(_AlertBoxStyle__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: undefined
      }));

    default:
      return __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: undefined
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (AlertBox);

/***/ }),

/***/ "./components/AlertBox/AlertBoxStyle.js":
/*!**********************************************!*\
  !*** ./components/AlertBox/AlertBoxStyle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kenny/eazyrent/components/AlertBox/AlertBoxStyle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AlertBoxStyle = () => {
  return __jsx("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, `
                .alert-box{
                    position: absolute;
                    top: 3rem;
                    right: 3rem;
                    height: 4rem;
                    width: 25rem;
                    border-radius: .5rem;
                    background-color: white;
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
                    opacity: 0;
                    visibility: hidden;
                    animation: fadeInOut 2s none ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .alert-box__message{
                    font-size: 1.5rem;
                }
                
                @keyframes fadeInOut{
                    0%{
                        transform: translateY(-2rem);
                        opacity: 0;
                        visibility: hidden;
                    }
                
                    50%{
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }
                
                    100%{
                        transform: translateY(0);
                        opacity: .5;
                        visibility: hidden;
                    }
                }
            `);
};

/* harmony default export */ __webpack_exports__["default"] = (AlertBoxStyle);

/***/ }),

/***/ "./components/BackButton/BackButton.js":
/*!*********************************************!*\
  !*** ./components/BackButton/BackButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kenny/eazyrent/components/BackButton/BackButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const BackButton = ({
  text,
  route
}) => {
  return __jsx("div", {
    className: "jsx-4229967566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4229967566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, text ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route ? route : '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-4229967566" + " " + "app__main--back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-4229967566" + " " + "app__main--back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\u2190"), text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route ? route : '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-4229967566" + " " + "app__main--back--notext",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-4229967566" + " " + "app__main--back-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "\u2190"), text))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4229967566",
    __self: undefined
  }, ".app__main--back.jsx-4229967566{color:black;}.app__main--back.jsx-4229967566:link,.app__main--back.jsx-4229967566:active{-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:18rem;font-size:1.75rem;font-weight:500;}.app__main--back--notext.jsx-4229967566:link,.app__main--back--notext.jsx-4229967566:active{-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:18rem;font-size:1.75rem;font-weight:500;}.app__main--back-button.jsx-4229967566{font-size:3rem;background-clip:text;-webkit-background-clip:text;color:transparent;background-image:linear-gradient(to right bottom,#f2994a 0%,#f2c94c 50%,#f2994a 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0JhY2tCdXR0b24vQmFja0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZaUIsQUFHcUMsQUFJUyxBQVVBLEFBVU4sWUF2Qm5CLEdBd0J5QixxQkFDUSxjQXJCaEIsQUFVQSxlQVlLLGtCQUNzRSx5Q0F0QjNELEFBVUYsOENBYS9CLDJEQVp1QixrQkFWQSwyRUFXUCxZQUNNLE1BWE4sWUFDTSxBQVdGLGdCQUNwQixFQVhvQixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvQmFja0J1dHRvbi9CYWNrQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQmFja0J1dHRvbiA9ICh7dGV4dCwgcm91dGV9KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHRleHQpID8gPExpbmsgaHJlZj17KHJvdXRlKSA/IHJvdXRlOiAnLyd9PjxhIGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tYmFja1wiPjxzcGFuIGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tYmFjay1idXR0b25cIj4mbGFycjs8L3NwYW4+e3RleHR9PC9hPjwvTGluaz4gOlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsocm91dGUpID8gcm91dGU6ICcvJ30+PGEgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1iYWNrLS1ub3RleHRcIj48c3BhbiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWJhY2stYnV0dG9uXCI+JmxhcnI7PC9zcGFuPnt0ZXh0fTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWJhY2t7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWJhY2s6bGluaywgLmFwcF9fbWFpbi0tYmFjazphY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tYmFjay0tbm90ZXh0OmxpbmssIC5hcHBfX21haW4tLWJhY2stLW5vdGV4dDphY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWJhY2stYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmMjk5NGEgMCUsI2YyYzk0YyA1MCUsICNmMjk5NGEgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/BackButton/BackButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./components/Bank/Bank.js":
/*!*********************************!*\
  !*** ./components/Bank/Bank.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/Bank/Bank.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Bank = ({
  banks,
  editBank,
  deleteBank,
  changeForm
}) => {
  return __jsx("div", {
    className: "jsx-685627423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-685627423" + " " + "banks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, banks.length >= 1 ? banks.map((v, i) => {
    return __jsx("div", {
      id: i,
      key: i,
      onClick: e => {
        if (e.target.id !== '') {
          changeForm('edit');
          editBank(e.target.id);
        }
      },
      className: "jsx-685627423" + " " + "bank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, __jsx("span", {
      onClick: e => {
        if (e.target.className.slice(14, 32) === "bank__delete") {
          deleteBank(e.target.parentNode.id);
        } else if (e.target.className.slice(14, 32) === "bank__delete--img") {
          deleteBank(e.target.parentNode.parentNode.id);
        }
      },
      className: "jsx-685627423" + " " + "bank__delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, __jsx("img", {
      src: "img/bin.png",
      alt: "delete bank",
      className: "jsx-685627423" + " " + "bank__delete--img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    })), __jsx("div", {
      className: "jsx-685627423" + " " + "bank__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, __jsx("p", {
      className: "jsx-685627423" + " " + "bank__content--name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, banks[i].name), __jsx("p", {
      className: "jsx-685627423" + " " + "bank__content--account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, banks[i].account), __jsx("span", {
      className: "jsx-685627423" + " " + "bank__content--status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-685627423" + " " + "bank__content--indicator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }), banks[i].status)));
  }) : __jsx("div", {
    className: "jsx-685627423" + " " + "banks empty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-685627423" + " " + "bank__empty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/crying.png",
    className: "jsx-685627423" + " " + "bank__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), "No banks are currently added to your account ", __jsx("img", {
    src: "/img/crying.png",
    className: "jsx-685627423" + " " + "bank__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "685627423",
    __self: undefined
  }, ".banks.jsx-685627423{height:20rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:3rem;}.banks.empty.jsx-685627423{height:20rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.banks.jsx-685627423>*.jsx-685627423{margin:1rem;}.bank.jsx-685627423{background:linear-gradient(90deg,#ff4e50 0%,#f9d423 100% );box-shadow:0 .2rem 2rem rgba(0,0,0,0.205);height:15rem;width:30%;border-radius:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;text-transform:uppercase;cursor:pointer;position:relative;}.bank__empty.jsx-685627423{font-size:2rem;fontweight:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.bank__img.jsx-685627423{width:5%;margin:0 1.5rem;opacity:.8;-webkit-transform:translateY(-.75rem);-ms-transform:translateY(-.75rem);transform:translateY(-.75rem);}.bank.inactive.jsx-685627423{background:linear-gradient(90deg,#1e130c 0%,#9a8478 100% );box-shadow:0 .2rem 2rem rgba(0,0,0,0.205);height:15rem;width:30%;border-radius:1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;text-transform:uppercase;}.bank.jsx-685627423:hover .bank__delete.jsx-685627423{opacity:1;}.bank__delete.jsx-685627423{position:absolute;top:.75rem;right:.75rem;display:inline-block;height:2.5rem;width:2.5rem;border-radius:50%;background-color:rgba(0,0,0,0.6);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;-webkit-transition:all .5s ease;transition:all .5s ease;}.bank__delete--img.jsx-685627423{width:1.5rem;}.bank__content.jsx-685627423{width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.bank__content--name.jsx-685627423{font-size:1.5rem;font-weight:300;-webkit-letter-spacing:.4rem;-moz-letter-spacing:.4rem;-ms-letter-spacing:.4rem;letter-spacing:.4rem;}.bank__content--account.jsx-685627423{font-size:3rem;font-weight:600;-webkit-letter-spacing:.35rem;-moz-letter-spacing:.35rem;-ms-letter-spacing:.35rem;letter-spacing:.35rem;}.bank__content--status.jsx-685627423{margin-top:.5rem;padding:.5rem 1.5rem;background-color:#f9d423;border-radius:5rem;font-weight:600;}.bank__content--indicator.jsx-685627423{margin-right:.5rem;display:inline-block;height:.5rem;width:.5rem;border-radius:50%;background-color:#3FBC43;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0JhbmsvQmFuay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2lCLEFBSXNDLEFBVUEsQUFRRCxBQUkrQyxBQWU1QyxBQVFOLEFBT2tELEFBYWpELEFBSVEsQUFnQkwsQUFJSCxBQVNPLEFBTUYsQUFNRSxBQVlFLFNBNUVILENBb0JwQixBQXlCaUIsRUF4RWpCLENBbEJlLEFBVUEsQUEyRWYsRUFoRG1CLEFBbUVDLEVBTkEsQUFZSyxDQXpDVixDQXFEVSxLQXpIUixBQVVBLENBbUNGLElBd0JFLENBaENBLENBbUVTLEVBTkQsR0FwRFMsRUFnRUwsRUFZWixFQXBEUSxXQXFEVCxNQXRHaUMsQUE4QkEsSUFvQi9CLEFBeUNLLEVBWUQsWUFwREwsS0F5Q0csQ0FZUyxDQW5DSCxNQWpCSixRQXhFUyxBQVVKLEFBMEczQixHQS9GaUIsQUE4QkEsR0FkVSxJQW9DYSxBQW9EeEMsTUF2R2MsQUE4QkEsVUE3QlMsQUE4QkEsVUE2Q3ZCLEVBTUEsRUExREEsR0E0QmlCLEVBbERBLEFBOEJBLG1CQW9DTSxtQ0E5RXZCLE1BWG1CLEFBcUNRLFlBcUNBLEVBbERBLEFBOEJBLHNDQW9DQSxLQXpGSixtQkFDdkIsaUNBb0NBLEVBcUN1QixFQWxEQSxBQThCQSxzQ0FvQ3ZCLHFEQWZjLEVBbERFLEFBOEJBLFFBcUJZLElBbERDLEFBOEJBLHlCQTdCVixBQThCbkIsZUE3QnNCLFlBaUR0QixNQWhEQSIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9CYW5rL0JhbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCYW5rID0gKHtiYW5rcywgZWRpdEJhbmssIGRlbGV0ZUJhbmssIGNoYW5nZUZvcm19KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbmtzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAoYmFua3MubGVuZ3RoID49IDEpID8gYmFua3MubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2l9IGtleT17aX0gY2xhc3NOYW1lPVwiYmFua1wiIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRm9ybSgnZWRpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRCYW5rKGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhbmtfX2RlbGV0ZVwiIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKDE0LCAzMikgPT09IFwiYmFua19fZGVsZXRlXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCYW5rKGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZSgxNCwgMzIpID09PSBcImJhbmtfX2RlbGV0ZS0taW1nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCYW5rKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2ltZy9iaW4ucG5nJyBhbHQ9XCJkZWxldGUgYmFua1wiIGNsYXNzTmFtZT1cImJhbmtfX2RlbGV0ZS0taW1nXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFua19fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmFua19fY29udGVudC0tbmFtZVwiPntiYW5rc1tpXS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJhbmtfX2NvbnRlbnQtLWFjY291bnRcIj57YmFua3NbaV0uYWNjb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYW5rX19jb250ZW50LS1zdGF0dXNcIj48c3BhbiBjbGFzc05hbWU9XCJiYW5rX19jb250ZW50LS1pbmRpY2F0b3JcIj48L3NwYW4+e2JhbmtzW2ldLnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSA6IDxkaXYgY2xhc3NOYW1lPVwiYmFua3MgZW1wdHlcIj48cCBjbGFzc05hbWU9XCJiYW5rX19lbXB0eVwiPjxpbWcgc3JjPVwiL2ltZy9jcnlpbmcucG5nXCIgY2xhc3NOYW1lPVwiYmFua19faW1nXCIvPk5vIGJhbmtzIGFyZSBjdXJyZW50bHkgYWRkZWQgdG8geW91ciBhY2NvdW50IDxpbWcgc3JjPVwiL2ltZy9jcnlpbmcucG5nXCIgY2xhc3NOYW1lPVwiYmFua19faW1nXCIvPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmJhbmtze1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJhbmtzLmVtcHR5e1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5iYW5rcyA+ICp7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5iYW5re1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjRlNTAgMCUsI2Y5ZDQyMyAxMDAlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC4ycmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjIwNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5iYW5rX19lbXB0eXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnR3ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJhbmtfX2ltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjc1cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmJhbmsuaW5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFlMTMwYyAwJSwjOWE4NDc4IDEwMCUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLjJyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYmFuazpob3ZlciAuYmFua19fZGVsZXRle1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmJhbmtfX2RlbGV0ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYmFua19fZGVsZXRlLS1pbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYmFua19fY29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkOyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5iYW5rX19jb250ZW50LS1uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC40cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYmFua19fY29udGVudC0tYWNjb3VudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjM1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYmFua19fY29udGVudC0tc3RhdHVze1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlkNDIzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYmFua19fY29udGVudC0taW5kaWNhdG9ye1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0ZCQzQzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbms7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Bank/Bank.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Bank);

/***/ }),

/***/ "./components/Dashboard/Dashboard.js":
/*!*******************************************!*\
  !*** ./components/Dashboard/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var _ImagePicker_ImagePicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ImagePicker/ImagePicker */ "./components/ImagePicker/ImagePicker.js");
/* harmony import */ var _ListingForm_ListingForm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ListingForm/ListingForm */ "./components/ListingForm/ListingForm.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/Dashboard/Dashboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




















const Dashboard = props => {
  let componentToRender;

  switch (props.route) {
    case "main":
      componentToRender = __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }, "I'm the main");
      break;

    case "listings":
      componentToRender = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: undefined
      }, __jsx(_Searchbar_Searchbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }), __jsx(_ListingTitle_ListingTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
        toggle: props.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }), __jsx(_Listings_Listings__WEBPACK_IMPORTED_MODULE_13__["default"], {
        listings: props.listings,
        toggleStatus: props.toggleStatus,
        testUser: props.testUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }));
      break;

    case "add-listing":
      componentToRender = __jsx("div", {
        className: "jsx-4293982657",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: undefined
      }, __jsx(_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Back to listings",
        route: "/listings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }), __jsx("div", {
        className: "jsx-4293982657" + " " + "app__main--details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: undefined
      }, __jsx(_ListingForm_ListingForm__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: undefined
      }), __jsx(_ImagePicker_ImagePicker__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "4293982657",
        __self: undefined
      }, ".app__main--details.jsx-4293982657{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:5rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEN5QixBQUc4QywwRUFDaUIsbUhBQ2hCLGNBRWxCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9NZXRhL01ldGEnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9NYWluQ29udGVudC9NYWluQ29udGVudCc7XG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi4vUHJvZmlsZUZvcm0vUHJvZmlsZUZvcm0nO1xuaW1wb3J0IFByb2ZpbGVCb3ggZnJvbSAnLi4vUHJvZmlsZUJveC9Qcm9maWxlQm94JztcbmltcG9ydCBBbGVydEJveCBmcm9tICcuLi9BbGVydEJveC9BbGVydEJveCc7XG5pbXBvcnQgQmFuayBmcm9tICcuLi9CYW5rL0JhbmsnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9QYXltZW50Rm9ybS9QYXltZW50Rm9ybSc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4uL1NlYXJjaGJhci9TZWFyY2hiYXInO1xuaW1wb3J0IExpc3RpbmdUaXRsZSBmcm9tICcuLi9MaXN0aW5nVGl0bGUvTGlzdGluZ1RpdGxlJztcbmltcG9ydCBMaXN0aW5ncyBmcm9tICcuLi9MaXN0aW5ncy9MaXN0aW5ncyc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uL0JhY2tCdXR0b24nO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9JbWFnZUdhbGxlcnkvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBEZXRhaWxCb3ggZnJvbSAnLi4vRGV0YWlsQm94L0RldGFpbEJveCc7XG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vRGVzY3JpcHRpb25Cb3gvRGVzY3JpcHRpb25Cb3gnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAvTWFwJztcbmltcG9ydCBJbWFnZVBpY2tlciBmcm9tICcuLi9JbWFnZVBpY2tlci9JbWFnZVBpY2tlcic7XG5pbXBvcnQgTGlzdGluZ0Zvcm0gZnJvbSAnLi4vTGlzdGluZ0Zvcm0vTGlzdGluZ0Zvcm0nO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpPT4ge1xuICAgIGxldCBjb21wb25lbnRUb1JlbmRlcjtcbiAgICBzd2l0Y2ggKHByb3BzLnJvdXRlKSB7XG4gICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxwPkknbSB0aGUgbWFpbjwvcD47XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibGlzdGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ1RpdGxlIHRvZ2dsZT17cHJvcHMudG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0aW5ncyBsaXN0aW5ncz17cHJvcHMubGlzdGluZ3N9IHRvZ2dsZVN0YXR1cz17cHJvcHMudG9nZ2xlU3RhdHVzfSB0ZXN0VXNlcj17cHJvcHMudGVzdFVzZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWRkLWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ0Zvcm0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlUGlja2VyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ2aWV3LWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IGltYWdlcz17cHJvcHMubGlzdGluZy5pbWFnZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxCb3ggbGlzdGluZz17cHJvcHMubGlzdGluZ30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJveC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmFwcF9fbWFpbi0tZGV0YWlsczpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInByb2ZpbGVcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGb3JtLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPGgxPlNldHRpbmdzIHBhZ2U8L2gxPjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwYXltZW50XCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRCb3ggbWVzc2FnZT17cHJvcHMuYWxlcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmsgYmFua3M9e3Byb3BzLmJhbmtzfSBlZGl0QmFuaz17cHJvcHMuZWRpdEJhbmt9IGRlbGV0ZUJhbms9e3Byb3BzLmRlbGV0ZUJhbmt9IGNoYW5nZUZvcm09e3Byb3BzLmNoYW5nZUZvcm19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtIGNoYW5nZUlucHV0PXtwcm9wcy5jaGFuZ2VJbnB1dH0gZm9ybT17cHJvcHMuZm9ybX0gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gYWRkVG9CYW5rcz17cHJvcHMuYWRkQmFua30gb3ZlcndyaXRlQmFuaz17cHJvcHMub3ZlcndyaXRlQmFua30gYmFua1RvRWRpdD17cHJvcHMuYmFua1RvRWRpdH0vPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybSA9PT0gJycgPyA8RmxvYXRpbmdCdXR0b24gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gc2hvd0FsZXJ0PXtwcm9wcy5zaG93QWxlcnR9Lz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWV0YSBwYWdlVGl0bGU9e3Byb3BzLnBhZ2VUaXRsZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciByb3V0ZT17cHJvcHMucm91dGV9Lz5cbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cbiAgICAgICAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Dashboard/Dashboard.js */"));
      break;

    case "view-listing":
      componentToRender = __jsx("div", {
        className: "jsx-800398638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }, __jsx(_BackButton_BackButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Back to listings",
        route: "/listings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: undefined
      }), __jsx("div", {
        className: "jsx-800398638" + " " + "app__main--details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: undefined
      }, __jsx(_ImageGallery_ImageGallery__WEBPACK_IMPORTED_MODULE_15__["default"], {
        images: props.listing.images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: undefined
      }), __jsx(_DetailBox_DetailBox__WEBPACK_IMPORTED_MODULE_16__["default"], {
        listing: props.listing,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: undefined
      })), __jsx("div", {
        className: "jsx-800398638" + " " + "app__main--details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: undefined
      }, __jsx(_DescriptionBox_DescriptionBox__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: undefined
      }), __jsx(_Map_Map__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: undefined
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "800398638",
        __self: undefined
      }, ".app__main--details.jsx-800398638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:5rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0V5QixBQUc4QywwRUFDaUIsbUhBQ2hCLGNBRWxCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9NZXRhL01ldGEnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9NYWluQ29udGVudC9NYWluQ29udGVudCc7XG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi4vUHJvZmlsZUZvcm0vUHJvZmlsZUZvcm0nO1xuaW1wb3J0IFByb2ZpbGVCb3ggZnJvbSAnLi4vUHJvZmlsZUJveC9Qcm9maWxlQm94JztcbmltcG9ydCBBbGVydEJveCBmcm9tICcuLi9BbGVydEJveC9BbGVydEJveCc7XG5pbXBvcnQgQmFuayBmcm9tICcuLi9CYW5rL0JhbmsnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9QYXltZW50Rm9ybS9QYXltZW50Rm9ybSc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4uL1NlYXJjaGJhci9TZWFyY2hiYXInO1xuaW1wb3J0IExpc3RpbmdUaXRsZSBmcm9tICcuLi9MaXN0aW5nVGl0bGUvTGlzdGluZ1RpdGxlJztcbmltcG9ydCBMaXN0aW5ncyBmcm9tICcuLi9MaXN0aW5ncy9MaXN0aW5ncyc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uL0JhY2tCdXR0b24nO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9JbWFnZUdhbGxlcnkvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBEZXRhaWxCb3ggZnJvbSAnLi4vRGV0YWlsQm94L0RldGFpbEJveCc7XG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vRGVzY3JpcHRpb25Cb3gvRGVzY3JpcHRpb25Cb3gnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAvTWFwJztcbmltcG9ydCBJbWFnZVBpY2tlciBmcm9tICcuLi9JbWFnZVBpY2tlci9JbWFnZVBpY2tlcic7XG5pbXBvcnQgTGlzdGluZ0Zvcm0gZnJvbSAnLi4vTGlzdGluZ0Zvcm0vTGlzdGluZ0Zvcm0nO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpPT4ge1xuICAgIGxldCBjb21wb25lbnRUb1JlbmRlcjtcbiAgICBzd2l0Y2ggKHByb3BzLnJvdXRlKSB7XG4gICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxwPkknbSB0aGUgbWFpbjwvcD47XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibGlzdGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ1RpdGxlIHRvZ2dsZT17cHJvcHMudG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0aW5ncyBsaXN0aW5ncz17cHJvcHMubGlzdGluZ3N9IHRvZ2dsZVN0YXR1cz17cHJvcHMudG9nZ2xlU3RhdHVzfSB0ZXN0VXNlcj17cHJvcHMudGVzdFVzZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWRkLWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ0Zvcm0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlUGlja2VyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ2aWV3LWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IGltYWdlcz17cHJvcHMubGlzdGluZy5pbWFnZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxCb3ggbGlzdGluZz17cHJvcHMubGlzdGluZ30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJveC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmFwcF9fbWFpbi0tZGV0YWlsczpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInByb2ZpbGVcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGb3JtLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPGgxPlNldHRpbmdzIHBhZ2U8L2gxPjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwYXltZW50XCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRCb3ggbWVzc2FnZT17cHJvcHMuYWxlcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmsgYmFua3M9e3Byb3BzLmJhbmtzfSBlZGl0QmFuaz17cHJvcHMuZWRpdEJhbmt9IGRlbGV0ZUJhbms9e3Byb3BzLmRlbGV0ZUJhbmt9IGNoYW5nZUZvcm09e3Byb3BzLmNoYW5nZUZvcm19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtIGNoYW5nZUlucHV0PXtwcm9wcy5jaGFuZ2VJbnB1dH0gZm9ybT17cHJvcHMuZm9ybX0gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gYWRkVG9CYW5rcz17cHJvcHMuYWRkQmFua30gb3ZlcndyaXRlQmFuaz17cHJvcHMub3ZlcndyaXRlQmFua30gYmFua1RvRWRpdD17cHJvcHMuYmFua1RvRWRpdH0vPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybSA9PT0gJycgPyA8RmxvYXRpbmdCdXR0b24gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gc2hvd0FsZXJ0PXtwcm9wcy5zaG93QWxlcnR9Lz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWV0YSBwYWdlVGl0bGU9e3Byb3BzLnBhZ2VUaXRsZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciByb3V0ZT17cHJvcHMucm91dGV9Lz5cbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cbiAgICAgICAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Dashboard/Dashboard.js */"));
      break;

    case "profile":
      componentToRender = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: undefined
      }, __jsx(_ProfileBox_ProfileBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: undefined
      }), __jsx(_ProfileForm_ProfileForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: undefined
      }));
      break;

    case "settings":
      componentToRender = __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: undefined
      }, "Settings page");
      break;

    case "payment":
      componentToRender = __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: undefined
      }, __jsx(_AlertBox_AlertBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: props.alert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: undefined
      }), __jsx(_Bank_Bank__WEBPACK_IMPORTED_MODULE_8__["default"], {
        banks: props.banks,
        editBank: props.editBank,
        deleteBank: props.deleteBank,
        changeForm: props.changeForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: undefined
      }), __jsx(_PaymentForm_PaymentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        changeInput: props.changeInput,
        form: props.form,
        changeForm: props.changeForm,
        addToBanks: props.addBank,
        overwriteBank: props.overwriteBank,
        bankToEdit: props.bankToEdit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: undefined
      }), props.form === '' ? __jsx(_FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        changeForm: props.changeForm,
        showAlert: props.showAlert,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: undefined
      }) : __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: undefined
      }));
      break;
  }

  return __jsx("div", {
    className: "jsx-3993600936",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx(_Meta_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: props.pageTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3993600936" + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: props.route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), __jsx(_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, componentToRender)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3993600936",
    __self: undefined
  }, ".app.jsx-3993600936{width:100%;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.app.jsx-3993600936>*.jsx-3993600936{height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEhpQixBQUdvQyxBQU1JLFdBTEYsSUFNakIsU0FMaUIsMEVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9NZXRhL01ldGEnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhci9TaWRlYmFyJztcbmltcG9ydCBNYWluQ29udGVudCBmcm9tICcuLi9NYWluQ29udGVudC9NYWluQ29udGVudCc7XG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi4vUHJvZmlsZUZvcm0vUHJvZmlsZUZvcm0nO1xuaW1wb3J0IFByb2ZpbGVCb3ggZnJvbSAnLi4vUHJvZmlsZUJveC9Qcm9maWxlQm94JztcbmltcG9ydCBBbGVydEJveCBmcm9tICcuLi9BbGVydEJveC9BbGVydEJveCc7XG5pbXBvcnQgQmFuayBmcm9tICcuLi9CYW5rL0JhbmsnO1xuaW1wb3J0IEZsb2F0aW5nQnV0dG9uIGZyb20gJy4uL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uJztcbmltcG9ydCBQYXltZW50Rm9ybSBmcm9tICcuLi9QYXltZW50Rm9ybS9QYXltZW50Rm9ybSc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJy4uL1NlYXJjaGJhci9TZWFyY2hiYXInO1xuaW1wb3J0IExpc3RpbmdUaXRsZSBmcm9tICcuLi9MaXN0aW5nVGl0bGUvTGlzdGluZ1RpdGxlJztcbmltcG9ydCBMaXN0aW5ncyBmcm9tICcuLi9MaXN0aW5ncy9MaXN0aW5ncyc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uL0JhY2tCdXR0b24nO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9JbWFnZUdhbGxlcnkvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBEZXRhaWxCb3ggZnJvbSAnLi4vRGV0YWlsQm94L0RldGFpbEJveCc7XG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vRGVzY3JpcHRpb25Cb3gvRGVzY3JpcHRpb25Cb3gnO1xuaW1wb3J0IE1hcCBmcm9tICcuLi9NYXAvTWFwJztcbmltcG9ydCBJbWFnZVBpY2tlciBmcm9tICcuLi9JbWFnZVBpY2tlci9JbWFnZVBpY2tlcic7XG5pbXBvcnQgTGlzdGluZ0Zvcm0gZnJvbSAnLi4vTGlzdGluZ0Zvcm0vTGlzdGluZ0Zvcm0nO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpPT4ge1xuICAgIGxldCBjb21wb25lbnRUb1JlbmRlcjtcbiAgICBzd2l0Y2ggKHByb3BzLnJvdXRlKSB7XG4gICAgICAgIGNhc2UgXCJtYWluXCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IDxwPkknbSB0aGUgbWFpbjwvcD47XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibGlzdGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ1RpdGxlIHRvZ2dsZT17cHJvcHMudG9nZ2xlfS8+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0aW5ncyBsaXN0aW5ncz17cHJvcHMubGlzdGluZ3N9IHRvZ2dsZVN0YXR1cz17cHJvcHMudG9nZ2xlU3RhdHVzfSB0ZXN0VXNlcj17cHJvcHMudGVzdFVzZXJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWRkLWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGluZ0Zvcm0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlUGlja2VyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ2aWV3LWxpc3RpbmdcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIHRleHQ9XCJCYWNrIHRvIGxpc3RpbmdzXCIgcm91dGU9XCIvbGlzdGluZ3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluLS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VHYWxsZXJ5IGltYWdlcz17cHJvcHMubGlzdGluZy5pbWFnZXN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxCb3ggbGlzdGluZz17cHJvcHMubGlzdGluZ30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkJveC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFwLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWRldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmFwcF9fbWFpbi0tZGV0YWlsczpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInByb2ZpbGVcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlQm94Lz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGb3JtLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjpcbiAgICAgICAgICAgIGNvbXBvbmVudFRvUmVuZGVyID0gPGgxPlNldHRpbmdzIHBhZ2U8L2gxPjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwYXltZW50XCI6XG4gICAgICAgICAgICBjb21wb25lbnRUb1JlbmRlciA9IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QWxlcnRCb3ggbWVzc2FnZT17cHJvcHMuYWxlcnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbmsgYmFua3M9e3Byb3BzLmJhbmtzfSBlZGl0QmFuaz17cHJvcHMuZWRpdEJhbmt9IGRlbGV0ZUJhbms9e3Byb3BzLmRlbGV0ZUJhbmt9IGNoYW5nZUZvcm09e3Byb3BzLmNoYW5nZUZvcm19Lz5cbiAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRGb3JtIGNoYW5nZUlucHV0PXtwcm9wcy5jaGFuZ2VJbnB1dH0gZm9ybT17cHJvcHMuZm9ybX0gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gYWRkVG9CYW5rcz17cHJvcHMuYWRkQmFua30gb3ZlcndyaXRlQmFuaz17cHJvcHMub3ZlcndyaXRlQmFua30gYmFua1RvRWRpdD17cHJvcHMuYmFua1RvRWRpdH0vPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybSA9PT0gJycgPyA8RmxvYXRpbmdCdXR0b24gY2hhbmdlRm9ybT17cHJvcHMuY2hhbmdlRm9ybX0gc2hvd0FsZXJ0PXtwcm9wcy5zaG93QWxlcnR9Lz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWV0YSBwYWdlVGl0bGU9e3Byb3BzLnBhZ2VUaXRsZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciByb3V0ZT17cHJvcHMucm91dGV9Lz5cbiAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHtjb21wb25lbnRUb1JlbmRlcn1cbiAgICAgICAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Dashboard/Dashboard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./components/DescriptionBox/DescriptionBox.js":
/*!*****************************************************!*\
  !*** ./components/DescriptionBox/DescriptionBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/DescriptionBox/DescriptionBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const DescriptionBox = () => {
  return __jsx("div", {
    className: "jsx-3227130586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3227130586" + " " + "description-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3227130586" + " " + "description-box__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "description"), __jsx("p", {
    className: "jsx-3227130586" + " " + "description-box__subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "A on-of-the-kind apartment with blah blah blah and so so so till he gbes gbes gbes and tututu. A on-of-the-kind apartment with blah blah blah and so so so till he gbes gbes gbes and tututu. A on-of-the-kind apartment with blah blah blah and so so so till he gbes gbes gbes and tututu.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3227130586",
    __self: undefined
  }, ".description-box.jsx-3227130586{width:35rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.description-box__title.jsx-3227130586{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;font-size:1.5rem;font-weight:600;text-transform:uppercase;border-bottom:.1rem solid #f2994a;color:black;background-clip:text;-webkit-background-clip:text;color:transparent;background-image:linear-gradient(to right bottom,#f2994a 0%,#f2c94c 50%,#f2994a 100% );}.description-box__subtitle.jsx-3227130586{margin-top:1rem;font-size:1.75rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rlc2NyaXB0aW9uQm94L0Rlc2NyaXB0aW9uQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQixBQUlxQyxBQU1VLEFBYU4sWUFsQkgsSUFtQkssa0JBQ3RCLDRDQWRxQixRQUxLLFNBTU4sZ0JBQ1MseUJBQ1MsNEJBUHRDLE1BUWUsWUFDVSxxQkFDUSw2QkFDWCxrQkFDc0UsdUZBQzVGIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Rlc2NyaXB0aW9uQm94L0Rlc2NyaXB0aW9uQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRGVzY3JpcHRpb25Cb3ggPSAoKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYm94X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYm94X19zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBBIG9uLW9mLXRoZS1raW5kIGFwYXJ0bWVudCB3aXRoIGJsYWggYmxhaCBibGFoIGFuZCBzbyBzbyBzbyB0aWxsIGhlIGdiZXMgZ2JlcyBnYmVzIGFuZCB0dXR1dHUuXG4gICAgICAgICAgICAgICAgICAgIEEgb24tb2YtdGhlLWtpbmQgYXBhcnRtZW50IHdpdGggYmxhaCBibGFoIGJsYWggYW5kIHNvIHNvIHNvIHRpbGwgaGUgZ2JlcyBnYmVzIGdiZXMgYW5kIHR1dHV0dS5cbiAgICAgICAgICAgICAgICAgICAgQSBvbi1vZi10aGUta2luZCBhcGFydG1lbnQgd2l0aCBibGFoIGJsYWggYmxhaCBhbmQgc28gc28gc28gdGlsbCBoZSBnYmVzIGdiZXMgZ2JlcyBhbmQgdHV0dXR1LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24tYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxleDogMCAwIDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24tYm94X190aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjFyZW0gc29saWQgI2YyOTk0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmMjk5NGEgMCUsI2YyYzk0YyA1MCUsICNmMjk5NGEgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24tYm94X19zdWJ0aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25Cb3g7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/DescriptionBox/DescriptionBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DescriptionBox);

/***/ }),

/***/ "./components/DetailBox/DetailBox.js":
/*!*******************************************!*\
  !*** ./components/DetailBox/DetailBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/DetailBox/DetailBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const DetailBox = ({
  listing
}) => {
  return __jsx("div", {
    className: "jsx-1122312004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1122312004" + " " + "detail-box__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, listing.name), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Summary"), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Rent type"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, listing.type)), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Price"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, listing.price)), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Location"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Ketu, Lagos"))), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Bedrooms"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, listing.name[0])), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Bathrooms"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, listing.name[0])), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Road"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__info--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Good"))), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__address--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Address"), __jsx("p", {
    className: "jsx-1122312004" + " " + "detail-box__address--subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, `21, Gbajabiamila street off Ikosi`))), __jsx("div", {
    className: "jsx-1122312004" + " " + "detail-box__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1122312004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Fav"), __jsx("span", {
    className: "jsx-1122312004",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Share"), __jsx("a", {
    href: "/",
    className: "jsx-1122312004" + " " + "detail-box__btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Book now"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1122312004",
    __self: undefined
  }, ".detail-box.jsx-1122312004{height:32.5rem;width:40rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.detail-box__title.jsx-1122312004{font-size:3.5rem;text-transform:capitalize;color:black;}.detail-box__summary.jsx-1122312004{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;font-size:1.5rem;font-weight:600;text-transform:uppercase;border-bottom:.1rem solid #f2994a;background-clip:text;-webkit-background-clip:text;color:transparent;background-image:linear-gradient(to right bottom,#f2994a 0%,#f2c94c 50%,#f2994a 100% );}.detail-box__details.jsx-1122312004{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.detail-box__info.jsx-1122312004{width:30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:white;}.detail-box__info--title.jsx-1122312004,.detail-box__address--title.jsx-1122312004{font-size:1.1rem;color:#565656;}.detail-box__info--subtitle.jsx-1122312004,.detail-box__address--subtitle.jsx-1122312004{font-size:2rem;font-weight:500;text-transform:capitalize;color:black;}.detail-box__buttons.jsx-1122312004{width:65%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.detail-box__btn.jsx-1122312004{color:white;}.detail-box__btn.jsx-1122312004:link,.detail-box__btn.jsx-1122312004:active{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;-webkit-text-decoration:none;text-decoration:none;display:inline-block;font-size:1.5rem;padding:1rem 2rem;background:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );border-radius:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0RldGFpbEJveC9EZXRhaWxCb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURpQixBQUd3QyxBQVNFLEFBVUssQUFZVCxBQUtILEFBT08sQUFLRixBQU9MLEFBT0MsQUFJVyxVQTdCVCxBQW1CQSxFQU9qQixHQTdEZ0IsQUErQ0ksRUF2Q1UsQUFrQ1osVUF6Q0QsSUEwQ2pCLEFBSzhCLFlBdkNmLFlBS2YsRUFtQ2dCLFlBQ2hCLEtBcEJrQyxJQVpiLEFBK0NJLE1BN0JDLEFBbUJRLFdBcENkLE1BakJNLFVBa0JHLGlCQThDSixRQTdDYSxhQThDakIsYUE5QkwsSUErQk0sSUE5Q0csSUFnQnpCLEtBbkNrQyxLQW1FNkIsS0F2Qy9ELEVBUmlDLFFBaUNWLHFCQWhDRCxrQkFDc0UsS0E4Q3BFLG9CQUN4Qiw2QkFmQSxFQXJEQSwrQkFzQkEiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvRGV0YWlsQm94L0RldGFpbEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERldGFpbEJveCA9ICh7bGlzdGluZ30pPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkZXRhaWwtYm94X190aXRsZVwiPntsaXN0aW5nLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19zdW1tYXJ5XCI+U3VtbWFyeTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvLS10aXRsZVwiPlJlbnQgdHlwZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXN1YnRpdGxlXCI+e2xpc3RpbmcudHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXRpdGxlXCI+UHJpY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvLS1zdWJ0aXRsZVwiPntsaXN0aW5nLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9faW5mby0tdGl0bGVcIj5Mb2NhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXN1YnRpdGxlXCI+S2V0dSwgTGFnb3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9fZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXRpdGxlXCI+QmVkcm9vbXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvLS1zdWJ0aXRsZVwiPntsaXN0aW5nLm5hbWVbMF19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvLS10aXRsZVwiPkJhdGhyb29tczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXN1YnRpdGxlXCI+e2xpc3RpbmcubmFtZVswXX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXRpdGxlXCI+Um9hZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2luZm8tLXN1YnRpdGxlXCI+R29vZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9fYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9fYWRkcmVzcy0tdGl0bGVcIj5BZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9fYWRkcmVzcy0tc3VidGl0bGVcIj57YDIxLCBHYmFqYWJpYW1pbGEgc3RyZWV0IG9mZiBJa29zaWB9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9faW5mby0tdGl0bGVcIj5GdXJuaXNoZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvLS1zdWJ0aXRsZVwiPk5vPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWwtYm94X19pbmZvLS10aXRsZVwiPkVsZWN0cmljaXR5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9faW5mby0tc3VidGl0bGVcIj5Nb2RlcmF0ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLWJveF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GYXY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNoYXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImRldGFpbC1ib3hfX2J0blwiPkJvb2sgbm93PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWwtYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxleDogMCAwIDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsLWJveF9fdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2YyOTk0YSAwJSwjZjJjOTRjIDUwJSwgI2YyOTk0YSAxMDAlICk7ICovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWwtYm94X19zdW1tYXJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAuMXJlbSBzb2xpZCAjZjI5OTRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNmMjk5NGEgMCUsI2YyYzk0YyA1MCUsICNmMjk5NGEgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsLWJveF9fZGV0YWlsc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWwtYm94X19pbmZve1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsLWJveF9faW5mby0tdGl0bGUsIC5kZXRhaWwtYm94X19hZGRyZXNzLS10aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWwtYm94X19pbmZvLS1zdWJ0aXRsZSwgLmRldGFpbC1ib3hfX2FkZHJlc3MtLXN1YnRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsLWJveF9fYnV0dG9uc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmRldGFpbC1ib3hfX2J0bntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGV0YWlsLWJveF9fYnRuOmxpbmssIC5kZXRhaWwtYm94X19idG46YWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YyOTk0YTsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjI5OTRhIDAlLCNmMmM5NGMgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsQm94OyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/DetailBox/DetailBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBox);

/***/ }),

/***/ "./components/FloatingButton/FloatingButton.js":
/*!*****************************************************!*\
  !*** ./components/FloatingButton/FloatingButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kenny/eazyrent/components/FloatingButton/FloatingButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const FloatingButton = ({
  changeForm,
  showAlert,
  route
}) => {
  return __jsx("span", {
    className: "jsx-641074616",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, route ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-641074616" + " " + "floating-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-641074616" + " " + "floating-button__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "+"))) : __jsx("a", {
    href: "#",
    onClick: () => {
      showAlert('');
      changeForm('add');
    },
    className: "jsx-641074616" + " " + "floating-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-641074616" + " " + "floating-button__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "+")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "641074616",
    __self: undefined
  }, ".floating-button.jsx-641074616{color:black;}.floating-button.jsx-641074616:link,.floating-button.jsx-641074616:link.jsx-641074616:active{position:fixed;-webkit-text-decoration:none;text-decoration:none;bottom:2rem;right:2rem;height:6rem;width:6rem;border-radius:50%;background-color:white;box-shadow:0 .2rem 3rem rgba(0,0,0,0.8);cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.floating-button__icon.jsx-641074616{font-size:4rem;color:transparent;background-clip:text;-webkit-background-clip:text;background-image:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQixBQUdxQyxBQUlHLEFBaUJBLFlBcEJuQixHQUl5QixBQWlCSCxrQkFDRyxxQkFDUSxXQWxCakIsWUFDRCxNQWtCc0QsS0FqQnJELFlBQ0QsV0FDTyxrQkFDSyxtQkFlM0IsSUFkK0Msd0NBQzVCLGVBQ1Msd0RBQ1gsMEVBQ1UsbUdBRTNCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0Zsb2F0aW5nQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRmxvYXRpbmdCdXR0b24gPSAoe2NoYW5nZUZvcm0sIHNob3dBbGVydCwgcm91dGV9KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIChyb3V0ZSkgPyBcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyb3V0ZX0+PGEgY2xhc3NOYW1lPVwiZmxvYXRpbmctYnV0dG9uXCI+PHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRpbmctYnV0dG9uX19pY29uXCI+Kzwvc3Bhbj48L2E+PC9MaW5rPiA6XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbG9hdGluZy1idXR0b25cIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoJycpO1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VGb3JtKCdhZGQnKTtcbiAgICAgICAgICAgICAgICB9fT48c3BhbiBjbGFzc05hbWU9XCJmbG9hdGluZy1idXR0b25fX2ljb25cIj4rPC9zcGFuPjwvYT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmZsb2F0aW5nLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZsb2F0aW5nLWJ1dHRvbjpsaW5rLCAuZmxvYXRpbmctYnV0dG9uOmxpbms6YWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAuMnJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5mbG9hdGluZy1idXR0b25fX2ljb257XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjI5OTRhIDAlLCNmMmM5NGMgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ0J1dHRvbjsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/FloatingButton/FloatingButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingButton);

/***/ }),

/***/ "./components/ImageGallery/ImageGallery.js":
/*!*************************************************!*\
  !*** ./components/ImageGallery/ImageGallery.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/ImageGallery/ImageGallery.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ImageGallery = ({
  images
}) => {
  const {
    0: activeImage,
    1: changeImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(images[0]);
  return __jsx("div", {
    className: "jsx-3727729929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3727729929" + " " + "image-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    alt: "mainImage",
    src: activeImage,
    className: "jsx-3727729929" + " " + "image-gallery__active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3727729929" + " " + "image-gallery__inactive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, images.map((v, i) => {
    if (images[i] === activeImage) {
      return __jsx("img", {
        key: images[i],
        alt: "activeImage",
        src: images[i],
        onClick: () => changeImage(images[i]),
        className: "jsx-3727729929" + " " + "image-gallery__inactive--images image-gallery__inactive--images--active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      });
    } else {
      return __jsx("img", {
        key: images[i],
        alt: "inactiveImage",
        src: images[i],
        onClick: () => changeImage(images[i]),
        className: "jsx-3727729929" + " " + "image-gallery__inactive--images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      });
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3727729929",
    __self: undefined
  }, ".image-gallery.jsx-3727729929{width:35rem;min-height:30rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.image-gallery__active.jsx-3727729929{height:20rem;width:100%;border-radius:1rem;margin-bottom:2rem;cursor:pointer;}.image-gallery__inactive.jsx-3727729929{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-around;-ms-flex-line-pack:space-around;align-content:space-around;}.image-gallery__inactive--images.jsx-3727729929{width:7.5rem;border-radius:.5rem;margin-bottom:1rem;cursor:pointer;}.image-gallery__inactive--images--active.jsx-3727729929{outline:.2rem solid #f2994a;outline-offset:.2rem;}.image-gallery__inactive--images.jsx-3727729929:hover{outline:.2rem solid #f2994a;outline-offset:.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS9JbWFnZUdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUdxQyxBQVFDLEFBUUYsQUFTRSxBQU9lLEFBS0EsV0FuQmYsQ0FqQkksQ0FRTixBQWlCUyxXQWhCRCxJQXVCRSxBQUtBLENBcENSLElBeUJNLFVBaEJBLE1BdUJ2QixBQUtBLEdBWG1CLFVBaEJBLEtBaUJuQixVQWhCQSxRQU1tQixrQkFoQk8sdUNBaUJRLHVDQWhCQSw0RUFpQkgsdUNBaEIvQix1REFpQkEiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5L0ltYWdlR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZUdhbGxlcnkgPSAoe2ltYWdlc30pPT57XG4gICAgY29uc3QgW2FjdGl2ZUltYWdlLCBjaGFuZ2VJbWFnZV0gPSB1c2VTdGF0ZShpbWFnZXNbMF0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIm1haW5JbWFnZVwiIGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlfX2FjdGl2ZVwiIHNyYz17YWN0aXZlSW1hZ2V9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWdhbGxlcnlfX2luYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbWFnZXNbaV0gPT09IGFjdGl2ZUltYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcga2V5PXtpbWFnZXNbaV19IGFsdD1cImFjdGl2ZUltYWdlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlcyBpbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZS0taW1hZ2VzLS1hY3RpdmVcIiBzcmM9e2ltYWdlc1tpXX0gb25DbGljaz17KCk9PiBjaGFuZ2VJbWFnZShpbWFnZXNbaV0pfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17aW1hZ2VzW2ldfSBhbHQ9XCJpbmFjdGl2ZUltYWdlXCIgY2xhc3NOYW1lPVwiaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlc1wiIHNyYz17aW1hZ2VzW2ldfSBvbkNsaWNrPXsoKT0+IGNoYW5nZUltYWdlKGltYWdlc1tpXSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLWdhbGxlcnl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9fYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWluLWhlaWdodDogMTJyZW07ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3LjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZS0taW1hZ2VzLS1hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAuMnJlbSBzb2xpZCAjZjI5OTRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC4ycmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtZ2FsbGVyeV9faW5hY3RpdmUtLWltYWdlczpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IC4ycmVtIHNvbGlkICNmMjk5NGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qIC5pbWFnZS1nYWxsZXJ5X19pbmFjdGl2ZS0taW1hZ2Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3LjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEltYWdlR2FsbGVyeTsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ImageGallery/ImageGallery.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ }),

/***/ "./components/ImagePicker/ImagePicker.js":
/*!***********************************************!*\
  !*** ./components/ImagePicker/ImagePicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/kenny/eazyrent/components/ImagePicker/ImagePicker.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


const ImagePicker = () => {
  const {
    0: images,
    1: chooseImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);

  const recieveImages = files => {
    chooseImages(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(files));
  };

  const renderImage = (image, i) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      document.getElementById(`preview-${i}`).style.backgroundImage = `url(${reader.result})`;
    });
    reader.readAsDataURL(image);
  };

  const deleteImage = e => {
    const id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.parentNode.id.slice(-1));

    images.splice(id, 1);
    chooseImages([...images]);
  };

  return __jsx("div", {
    className: "jsx-3703500617",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => {
      const imagePicker = document.getElementById('images');
      imagePicker.click();
    },
    className: "jsx-3703500617" + " " + "image-picker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("input", {
    type: "file",
    id: "images",
    accept: "image/*",
    multiple: true,
    onChange: e => {
      recieveImages(e.target.files);
    },
    className: "jsx-3703500617" + " " + "image-picker__picker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3703500617" + " " + "image-picker__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3703500617" + " " + "image-picker__btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3703500617" + " " + "image-picker__btn--icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "+")), __jsx("p", {
    className: "jsx-3703500617" + " " + "image-picker__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Add images"))), __jsx("div", {
    className: "jsx-3703500617" + " " + "image-picker__preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, images.map((v, i, a) => {
    renderImage(a[i], i);
    return __jsx("div", {
      key: `preview-${i}`,
      id: `preview-${i}`,
      className: "jsx-3703500617" + " " + "image-picker__img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx("span", {
      onClick: deleteImage,
      className: "jsx-3703500617" + " " + "image-picker__del",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "x"));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3703500617",
    __self: undefined
  }, ".image-picker.jsx-3703500617{margin-top:8.5rem;height:15rem;width:30rem;border-radius:.5rem;border:.2rem dashed #dddddd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}.image-picker__picker.jsx-3703500617{display:none;}.image-picker__content.jsx-3703500617{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.image-picker__btn.jsx-3703500617{color:#dddddd;}.image-picker__btn.jsx-3703500617:link,.image-picker__btn.jsx-3703500617:active{display:inline-block;-webkit-text-decoration:none;text-decoration:none;height:5rem;width:5rem;border:.2rem dashed #dddddd;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.image-picker__btn--icon.jsx-3703500617{font-size:3.5rem;}.image-picker__label.jsx-3703500617{margin-top:.5rem;font-size:1.5rem;color:#dddddd;}.image-picker__preview.jsx-3703500617{margin-top:1rem;max-width:31rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.image-picker__img.jsx-3703500617{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;width:6.5rem;height:6.5rem;margin-right:3%;margin-bottom:.75rem;border-radius:.5rem;background-repeat:no-repeat;background-size:contain;background-position:center;box-shadow:0 .3rem 1rem rgba(0,0,0,0.2);cursor:pointer;position:relative;}.image-picker__img.jsx-3703500617:hover .image-picker__del.jsx-3703500617{opacity:1;}.image-picker__del.jsx-3703500617{position:absolute;top:-.5rem;right:-.5rem;height:1.5rem;width:1.5rem;text-align:center;border-radius:50%;color:white;background-color:red;font-size:1rem;font-weight:500;opacity:0;-webkit-transition:all .2s ease;transition:all .2s ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0ltYWdlUGlja2VyL0ltYWdlUGlja2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEaUIsQUFHMkMsQUFZTCxBQUlBLEFBT0MsQUFJTyxBQVlKLEFBSUEsQUFNRCxBQVFILEFBZUgsQUFJUSxVQUh0QixHQTVEQSxDQVdBLEVBMEJvQixDQVZwQixBQUlxQixDQTNDSixBQTRFRixHQWpEVSxRQWtEUixFQTVFRCxDQWlEQyxFQU5DLFFBa0NBLENBNUVNLEtBMkN4QixHQVlpQixLQXNCQSxPQTVFZSxDQXVEZCxLQXNCSSxFQXBETixHQVpVLElBMkNOLEtBOUJMLElBb0RPLElBN0VMLEdBMEJlLEFBOEJQLFdBc0JULENBL0JHLFNBVUssRUFzQkMsS0FwREgsYUErQlUsR0FzQmIsRUFwREYsWUFmVSxDQW9FUCxVQWpDVyxBQVdILEVBMURELElBaUZiLFVBQ2MsUUF2QkcsMkJBL0JKLEFBZ0NvQixxQkF1Qi9DLGdCQXRFdUIsR0FnREosVUE1REksSUErQ3ZCLENBY3NCLGtCQUN0QiwwQkFqQ0EsK0JBaEJBLGFBWm1CLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0ltYWdlUGlja2VyL0ltYWdlUGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW1hZ2VQaWNrZXIgPSAoKT0+e1xuICAgIGNvbnN0W2ltYWdlcywgY2hvb3NlSW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IHJlY2lldmVJbWFnZXMgPSAoZmlsZXMpPT57XG4gICAgICAgIGNob29zZUltYWdlcyhBcnJheS5mcm9tKGZpbGVzKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVySW1hZ2UgPSAoaW1hZ2UsIGkpPT57XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcmV2aWV3LSR7aX1gKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVhZGVyLnJlc3VsdH0pYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlKTsgXG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSW1hZ2UgPSAoZSk9PntcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkLnNsaWNlKC0xKSk7XG4gICAgICAgIGltYWdlcy5zcGxpY2UoaWQsIDEpO1xuICAgICAgICBjaG9vc2VJbWFnZXMoWy4uLmltYWdlc10pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXBpY2tlclwiIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVBpY2tlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImltYWdlc1wiIGNsYXNzTmFtZT1cImltYWdlLXBpY2tlcl9fcGlja2VyXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG11bHRpcGxlIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lldmVJbWFnZXMoZS50YXJnZXQuZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1waWNrZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbWFnZS1waWNrZXJfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW1hZ2UtcGlja2VyX19idG4tLWljb25cIj4rPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImltYWdlLXBpY2tlcl9fbGFiZWxcIj5BZGQgaW1hZ2VzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXBpY2tlcl9fcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgodiwgaSwgYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW1hZ2UoYVtpXSwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgcHJldmlldy0ke2l9YH0gaWQ9e2BwcmV2aWV3LSR7aX1gfSBjbGFzc05hbWU9XCJpbWFnZS1waWNrZXJfX2ltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbWFnZS1waWNrZXJfX2RlbFwiIG9uQ2xpY2s9e2RlbGV0ZUltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXBpY2tlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDguNXJlbTsgLy9KdXN0IGZvciB0aGlzIHByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjJyZW0gZGFzaGVkICNkZGRkZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtcGlja2VyX19waWNrZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtcGlja2VyX19jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1waWNrZXJfX2J0bntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtcGlja2VyX19idG46bGluaywgLmltYWdlLXBpY2tlcl9fYnRuOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuMnJlbSBkYXNoZWQgI2RkZGRkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZS1waWNrZXJfX2J0bi0taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtcGlja2VyX19sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RkZGRkZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXBpY2tlcl9fcHJldmlld3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXBpY2tlcl9faW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDMwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2LjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC4zcmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW1hZ2UtcGlja2VyX19pbWc6aG92ZXIgLmltYWdlLXBpY2tlcl9fZGVse1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmltYWdlLXBpY2tlcl9fZGVse1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VQaWNrZXI7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ImagePicker/ImagePicker.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePicker);

/***/ }),

/***/ "./components/ListingCard/ListingCard.js":
/*!***********************************************!*\
  !*** ./components/ListingCard/ListingCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kenny/eazyrent/components/ListingCard/ListingCard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ListingCard = listing => {
  return __jsx("div", {
    className: "jsx-1861494464",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1861494464" + " " + "listing-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1861494464" + " " + "listing-card__img-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: listing.image,
    alt: listing.name,
    className: "jsx-1861494464" + " " + "listing-card__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-1861494464" + " " + "listing-card__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-1861494464" + " " + "listing-card__text--name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, listing.name), __jsx("p", {
    className: "jsx-1861494464" + " " + "listing-card__text--address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, listing.address), __jsx("div", {
    className: "jsx-1861494464" + " " + "listing-card__text--details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1861494464" + " " + "listing-card__icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "2", __jsx("img", {
    src: "/img/bed.png",
    alt: "bedrooms",
    className: "jsx-1861494464" + " " + "listing-card__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), __jsx("span", {
    className: "jsx-1861494464" + " " + "listing-card__icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "2", __jsx("img", {
    src: "/img/bathtub.png",
    alt: "bathrooms",
    className: "jsx-1861494464" + " " + "listing-card__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("span", {
    className: "jsx-1861494464" + " " + "listing-card__icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Good", __jsx("img", {
    src: "img/road.png",
    alt: "roads",
    className: "jsx-1861494464" + " " + "listing-card__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("span", {
    className: "jsx-1861494464" + " " + "listing-card__icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Great", __jsx("img", {
    src: "/img/electricity.png",
    alt: "lectricity",
    className: "jsx-1861494464" + " " + "listing-card__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })))), __jsx("div", {
    className: "jsx-1861494464" + " " + "listing-card__details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-1861494464" + " " + "listing-card__details--price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "\u20A6", listing.price), __jsx("p", {
    className: "jsx-1861494464" + " " + "listing-card__details--type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, listing.type), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/view-listing/?id=${listing.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-1861494464" + " " + "listing-card__btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "View")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1861494464",
    __self: undefined
  }, ".listing-card.jsx-1861494464{width:100%;padding:2rem 0;margin-bottom:1.5rem;background-color:white;border-radius:2rem;box-shadow:.3rem .3rem .5rem #d6d6d6;border:.1rem solid #fdf4eb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;}.listing-card.jsx-1861494464:hover{background:linear-gradient(to right bottom,#f2994a 0%,#f2c94c 100% );border:.1rem solid #f2c94c;}.listing-card.jsx-1861494464:hover .listing-card__text.jsx-1861494464,.listing-card.jsx-1861494464:hover .listing-card__details.jsx-1861494464,.listing-card.jsx-1861494464:hover .listing-card__text--name.jsx-1861494464{color:white;}.listing-card.jsx-1861494464:hover .listing-card__icon.jsx-1861494464{opacity:1;}.listing-card.jsx-1861494464:hover .listing-card__btn.jsx-1861494464{color:#683507;background-color:white;}.listing-card__img.jsx-1861494464{width:100%;border-radius:.5rem;}.listing-card__img-box.jsx-1861494464{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;}.listing-card__text.jsx-1861494464{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#683507;-webkit-transition:all .2s ease;transition:all .2s ease;}.listing-card__text.jsx-1861494464>*.jsx-1861494464:not(:last-child){margin-bottom:1rem;}.listing-card__text--name.jsx-1861494464{font-size:3rem;font-weight:700;}.listing-card__text--address.jsx-1861494464{font-size:1.5rem;}.listing-card__text--details.jsx-1861494464{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.listing-card__icons.jsx-1861494464{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.5rem;}.listing-card__icon.jsx-1861494464{width:2.5rem;margin-left:.75rem;opacity:.5;-webkit-transition:all .3s ease;transition:all .3s ease;}.listing-card__details.jsx-1861494464{height:10rem;-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;color:#683507;-webkit-transition:all .2s ease;transition:all .2s ease;}.listing-card__details--price.jsx-1861494464{margin-top:-.5rem;font-size:3rem;font-weight:500;}.listing-card__details--type.jsx-1861494464{margin-top:-1rem;margin-right:.25rem;font-size:1rem;font-weight:600;}.listing-card__btn.jsx-1861494464{color:white;}.listing-card__btn.jsx-1861494464:link,.listing-card__btn.jsx-1861494464:active{margin-top:2rem;font-size:1.5rem;font-weight:600;display:inline-block;-webkit-text-decoration:none;text-decoration:none;background-color:#683507;box-shadow:0 .2rem 1rem #565656;border-radius:.5rem;padding:1rem 2.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdDYXJkL0xpc3RpbmdDYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCaUIsQUFHb0MsQUFlMEQsQUFLekQsQUFJRixBQUlJLEFBS0gsQUFLRSxBQUtBLEFBU00sQUFJSixBQUtFLEFBSU4sQUFPRSxBQU1BLEFBT0EsQUFXSyxBQU9ELEFBUUwsQUFJSSxVQTFGcEIsQ0F4Qm1CLEFBaUNLLEFBZ0NQLENBN0NqQixBQTJGQSxDQWpDdUIsQUFPTixDQXpEVSxDQTRCUCxDQTJEQyxDQXREckIsQUEwQ3dCLENBUEwsQ0E1Q25CLE9BbkR5QixLQWlDekIsQUF1QkEsQ0FzQmUsQ0FrQkssQUFtQkEsSUF2RnBCLEFBMkVtQixNQXhCUyxJQTlFRCxFQWlHM0IsQUFrQnlCLEVBL0V6QixBQUtpQixDQThERyxZQW5CSCxJQW9CakIsQ0EzRmdDLENBWlQsQUFtSEUsSUE5Q0YsV0FOVyxJQTlETyxPQVl6QyxHQWlFQSxxQkFzQzZCLEtBM0VILENBdkNLLFlBa0ZMLE9BaUNVLFFBbEhuQixjQW1FSSxVQWdERyxPQS9DeEIsYUFnRHdCLEdBdkRDLEdBdEJTLGFBMkNBLENBbUNsQyxVQXBIaUMsMEVBNkRqQyxpQkF0QmlCLGFBMkNRLENBMUNHLGtCQXZDTCxzQ0F3Q3ZCLDRDQTBDa0IsV0FqRkMsR0FrRlMsWUFqRkEsNENBa0Y1QixZQWpGQSIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9MaXN0aW5nQ2FyZC9MaXN0aW5nQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IExpc3RpbmdDYXJkID0gKGxpc3RpbmcpPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWNhcmRfX2ltZy1ib3hcIj48aW1nIHNyYz17bGlzdGluZy5pbWFnZX0gYWx0PXtsaXN0aW5nLm5hbWV9IGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9faW1nXCIvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX190ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJsaXN0aW5nLWNhcmRfX3RleHQtLW5hbWVcIj57bGlzdGluZy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9fdGV4dC0tYWRkcmVzc1wiPntsaXN0aW5nLmFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9fdGV4dC0tZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX19pY29uc1wiPjI8aW1nIHNyYz1cIi9pbWcvYmVkLnBuZ1wiIGFsdD1cImJlZHJvb21zXCIgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX19pY29uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9faWNvbnNcIj4yPGltZyBzcmM9XCIvaW1nL2JhdGh0dWIucG5nXCIgYWx0PVwiYmF0aHJvb21zXCIgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX19pY29uXCIvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9faWNvbnNcIj5Hb29kPGltZyBzcmM9XCJpbWcvcm9hZC5wbmdcIiBhbHQ9XCJyb2Fkc1wiIGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9faWNvblwiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nLWNhcmRfX2ljb25zXCI+R3JlYXQ8aW1nIHNyYz1cIi9pbWcvZWxlY3RyaWNpdHkucG5nXCIgYWx0PVwibGVjdHJpY2l0eVwiIGNsYXNzTmFtZT1cImxpc3RpbmctY2FyZF9faWNvblwiLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJsaXN0aW5nLWNhcmRfX2RldGFpbHMtLXByaWNlXCI+4oKme2xpc3RpbmcucHJpY2V9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX19kZXRhaWxzLS10eXBlXCI+e2xpc3RpbmcudHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avdmlldy1saXN0aW5nLz9pZD0ke2xpc3RpbmcuaWR9YH0+PGEgY2xhc3NOYW1lPVwibGlzdGluZy1jYXJkX19idG5cIj5WaWV3PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZy1jYXJke1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAuM3JlbSAuM3JlbSAuNXJlbSAjZDZkNmQ2O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuMXJlbSBzb2xpZCAjZmRmNGViO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZDpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2YyOTk0YSAwJSwjZjJjOTRjIDEwMCUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgI2YyYzk0YyA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWNhcmQ6aG92ZXIgLmxpc3RpbmctY2FyZF9fdGV4dCwgLmxpc3RpbmctY2FyZDpob3ZlciAubGlzdGluZy1jYXJkX19kZXRhaWxzLCAubGlzdGluZy1jYXJkOmhvdmVyIC5saXN0aW5nLWNhcmRfX3RleHQtLW5hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWNhcmQ6aG92ZXIgLmxpc3RpbmctY2FyZF9faWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWNhcmQ6aG92ZXIgLmxpc3RpbmctY2FyZF9fYnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2ODM1MDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9faW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9faW1nLWJveHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWNhcmRfX3RleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBoZWlnaHQ6IDEyLjVyZW07ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNjgzNTA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZy1jYXJkX190ZXh0ID4gKjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9fdGV4dC0tbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWNhcmRfX3RleHQtLWFkZHJlc3N7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9fdGV4dC0tZGV0YWlsc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9faWNvbnN7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZy1jYXJkX19pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9fZGV0YWlsc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTByZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY4MzUwNztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9fZGV0YWlscy0tcHJpY2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogY29sb3I6IHJlZDsgKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9fZGV0YWlscy0tdHlwZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctY2FyZF9fYnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZy1jYXJkX19idG46bGluaywgLmxpc3RpbmctY2FyZF9fYnRuOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjgzNTA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAuMnJlbSAxcmVtICM1NjU2NTY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdDYXJkOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ListingCard/ListingCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListingCard);

/***/ }),

/***/ "./components/ListingForm/ListingForm.js":
/*!***********************************************!*\
  !*** ./components/ListingForm/ListingForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/ListingForm/ListingForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const ListingForm = () => {
  return __jsx("div", {
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-2196872280" + " " + "listing-form__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "Add new home"), __jsx("form", {
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "2 bedroom flat",
    id: "title",
    className: "jsx-2196872280" + " " + "listing-form__input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "title",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "title")), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "56, Bolanle Avenue",
    id: "address",
    className: "jsx-2196872280" + " " + "listing-form__input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "address",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "address")), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("input", {
    type: "number",
    placeholder: "250000",
    id: "price",
    className: "jsx-2196872280" + " " + "listing-form__price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "price",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "price")), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("select", {
    placeholder: "Choose one",
    id: "payment",
    className: "jsx-2196872280" + " " + "listing-form__type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("option", {
    value: "none",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Choose one"), __jsx("option", {
    value: "monthly",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Monthly"), __jsx("option", {
    value: "yearly",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Yearly")), __jsx("label", {
    htmlFor: "payment",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "payment type"))), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("select", {
    placeholder: "Bedrooms",
    id: "state",
    className: "jsx-2196872280" + " " + "listing-form__type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("option", {
    value: "none",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Choose one"), __jsx("option", {
    value: "1",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Lagos"), __jsx("option", {
    value: "2",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Abuja"), __jsx("option", {
    value: "3",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Ogun"), __jsx("option", {
    value: "4",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Port Harcourt"), __jsx("option", {
    value: "5",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Oyo")), __jsx("label", {
    htmlFor: "state",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "state")), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("select", {
    placeholder: "Bedrooms",
    id: "city",
    className: "jsx-2196872280" + " " + "listing-form__type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("option", {
    value: "none",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Choose one"), __jsx("option", {
    value: "1",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Ikeja"), __jsx("option", {
    value: "2",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Victoria Island"), __jsx("option", {
    value: "3",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Yaba")), __jsx("label", {
    htmlFor: "city",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "city"))), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("select", {
    placeholder: "Bedrooms",
    id: "beds",
    className: "jsx-2196872280" + " " + "listing-form__type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("option", {
    value: "none",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Choose one"), __jsx("option", {
    value: "1",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "1"), __jsx("option", {
    value: "2",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "4"), __jsx("option", {
    value: "5",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "5")), __jsx("label", {
    htmlFor: "beds",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "no of bedrooms")), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("select", {
    placeholder: "Bedrooms",
    id: "baths",
    className: "jsx-2196872280" + " " + "listing-form__type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("option", {
    value: "none",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Choose one"), __jsx("option", {
    value: "1",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "1"), __jsx("option", {
    value: "2",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-2196872280",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "3")), __jsx("label", {
    htmlFor: "baths",
    className: "jsx-2196872280" + " " + "listing-form__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "no of bathrooms"))), __jsx("div", {
    className: "jsx-2196872280" + " " + "listing-form__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-2196872280" + " " + "listing-form__btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Add new home")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2196872280",
    __self: undefined
  }, ".listing-form.jsx-2196872280{width:45rem;}.listing-form__title.jsx-2196872280{font-size:3.5rem;margin-bottom:2rem;}.listing-form__form.jsx-2196872280{margin:0 auto;width:inherit;margin-bottom:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.listing-form__label.jsx-2196872280{color:black;font-size:1.1rem;text-transform:capitalize;margin-bottom:.5rem;}.listing-form__input.jsx-2196872280,.listing-form__price.jsx-2196872280{width:inherit;padding:1.25rem 2rem;border-radius:.5rem;border:.2rem solid #e8edf7;font-family:'Quicksand',sans-serif;font-size:1.5rem;}.listing-form__input.jsx-2196872280:focus,.listing-form__price.jsx-2196872280:focus,.listing-form__type.jsx-2196872280:focus{outline:none;border:.2rem solid #f2994a;}.listing-form__input.jsx-2196872280::-webkit-input-placeholder,.listing-form__price.jsx-2196872280::-webkit-input-placeholder{color:#e8edf7;}.listing-form__row.jsx-2196872280{margin:0 auto;width:45rem;margin-bottom:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.listing-form__col.jsx-2196872280{-webkit-flex:0 0 47%;-ms-flex:0 0 47%;flex:0 0 47%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.listing-form__type.jsx-2196872280{height:4.6rem;border-radius:.5rem;background-color:white;border:.2rem solid #e8edf7;font-family:'Quicksand',sans-serif;font-size:1.75rem;cursor:pointer;}.listing-form__footer.jsx-2196872280{margin-top:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.listing-form__btn.jsx-2196872280{color:white;}.listing-form__btn.jsx-2196872280:active,.listing-form__btn.jsx-2196872280:link{display:inline-block;-webkit-text-decoration:none;text-decoration:none;margin:0 auto;font-size:1.5rem;padding:1.25rem 2.5rem;background-color:#f2994a;border-radius:.5rem;background:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdGb3JtL0xpc3RpbmdGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFaUIsQUFHcUMsQUFJSyxBQUtILEFBUUgsQUFPRyxBQVNELEFBU0MsQUFJQSxBQVFELEFBTUMsQUFVRSxBQU1KLEFBSVMsWUEvRXpCLEFBaUJxQixBQTJEckIsQ0EzQ2dDLENBeEJkLEFBZU8sQUFrQnpCLEFBSWdCLEFBY1EsRUFVUCxDQWxFTSxJQTRFRSxLQWpDQSxFQXJDQSxDQVFLLEtBMkNILENBcENILENBcEJ4QixJQTZCQSxPQWNpQixFQXJDQSxFQTJDQSxJQW5DTyxBQU9PLEVBb0NBLGNBbUJiLElBN0RsQixPQU93QyxFQW9DQSxDQW1CbkIsS0FYTSxZQVlBLGVBdkROLEVBb0NDLEVBZlksRUFyQ0EsRUEyQ0EsQUE2QkwsU0F2RDdCLEdBb0NtQixhQW9CSyxFQW5CeEIsa0JBb0IrRCxtQkFkL0Qsb0NBM0RBLEVBMkNBLEVBK0JBLE9BckNBIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdGb3JtL0xpc3RpbmdGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdGluZ0Zvcm0gPSAoKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX3RpdGxlXCI+QWRkIG5ldyBob21lPC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9faW5wdXRcIiBwbGFjZWhvbGRlcj1cIjIgYmVkcm9vbSBmbGF0XCIgaWQ9XCJ0aXRsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2xhYmVsXCIgaHRtbEZvcj1cInRpdGxlXCI+dGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9faW5wdXRcIiBwbGFjZWhvbGRlcj1cIjU2LCBCb2xhbmxlIEF2ZW51ZVwiIGlkPVwiYWRkcmVzc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2xhYmVsXCIgaHRtbEZvcj1cImFkZHJlc3NcIj5hZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX19jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fcHJpY2VcIiBwbGFjZWhvbGRlcj1cIjI1MDAwMFwiIGlkPVwicHJpY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fbGFiZWxcIiBodG1sRm9yPVwicHJpY2VcIj5wcmljZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX19jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fdHlwZVwiIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIG9uZVwiIGlkPVwicGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiPkNob29zZSBvbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbnRobHlcIj5Nb250aGx5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5ZWFybHlcIj5ZZWFybHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX19sYWJlbFwiIGh0bWxGb3I9XCJwYXltZW50XCI+cGF5bWVudCB0eXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2NvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX190eXBlXCIgcGxhY2Vob2xkZXI9XCJCZWRyb29tc1wiIGlkPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5DaG9vc2Ugb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+TGFnb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5BYnVqYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk9ndW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5Qb3J0IEhhcmNvdXJ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+T3lvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fbGFiZWxcIiBodG1sRm9yPVwic3RhdGVcIj5zdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX19jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fdHlwZVwiIHBsYWNlaG9sZGVyPVwiQmVkcm9vbXNcIiBpZD1cImNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5DaG9vc2Ugb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SWtlamE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5WaWN0b3JpYSBJc2xhbmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5ZYWJhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fbGFiZWxcIiBodG1sRm9yPVwiY2l0eVwiPmNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX3R5cGVcIiBwbGFjZWhvbGRlcj1cIkJlZHJvb21zXCIgaWQ9XCJiZWRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCI+Q2hvb3NlIG9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj41PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fbGFiZWxcIiBodG1sRm9yPVwiYmVkc1wiPm5vIG9mIGJlZHJvb21zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2NvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwibGlzdGluZy1mb3JtX190eXBlXCIgcGxhY2Vob2xkZXI9XCJCZWRyb29tc1wiIGlkPVwiYmF0aHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj5DaG9vc2Ugb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fbGFiZWxcIiBodG1sRm9yPVwiYmF0aHNcIj5ubyBvZiBiYXRocm9vbXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmctZm9ybV9fZm9vdGVyXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0aW5nLWZvcm1fX2J0blwiPkFkZCBuZXcgaG9tZTwvYT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybV9fdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWZvcm1fX2Zvcm17XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybV9fbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybV9faW5wdXQsIC5saXN0aW5nLWZvcm1fX3ByaWNle1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjJyZW0gc29saWQgI2U4ZWRmNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZy1mb3JtX19pbnB1dDpmb2N1cywgLmxpc3RpbmctZm9ybV9fcHJpY2U6Zm9jdXMsIC5saXN0aW5nLWZvcm1fX3R5cGU6Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuMnJlbSBzb2xpZCAjZjI5OTRhIDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyogLmxpc3RpbmctZm9ybV9faW5wdXQ6Zm9jdXMgKyAubGlzdGluZy1mb3JtX19sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjI5OTRhIDtcbiAgICAgICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5saXN0aW5nLWZvcm1fX3ByaWNlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlOGVkZjc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWZvcm1fX3Jvd3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybV9fY29se1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDQ3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWZvcm1fX3R5cGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IC4ycmVtIHNvbGlkICNlOGVkZjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWZvcm1fX2Zvb3RlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saXN0aW5nLWZvcm1fX2J0bntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmctZm9ybV9fYnRuOmFjdGl2ZSwgLmxpc3RpbmctZm9ybV9fYnRuOmxpbmt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI5OTRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YyOTk0YSAwJSwjZjJjOTRjIDEwMCUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nRm9ybTsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ListingForm/ListingForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListingForm);

/***/ }),

/***/ "./components/ListingTitle/ListingTitle.js":
/*!*************************************************!*\
  !*** ./components/ListingTitle/ListingTitle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toggler_Toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Toggler/Toggler */ "./components/Toggler/Toggler.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/ListingTitle/ListingTitle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ListingTitle = ({
  toggle
}) => {
  return __jsx("div", {
    className: "jsx-175545569",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-175545569" + " " + "app__main--listing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-175545569" + " " + "app__main--listing--title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Listings"), __jsx(_Toggler_Toggler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toggle: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "175545569",
    __self: undefined
  }, ".app__main--listing.jsx-175545569{margin-top:5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.app__main--listing--title.jsx-175545569{font-size:3.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdUaXRsZS9MaXN0aW5nVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWlCLEFBR3lDLEFBT0MsZ0JBTkosQ0FPakIseUVBTmtDLG1IQUNYLDZGQUN2QiIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9MaXN0aW5nVGl0bGUvTGlzdGluZ1RpdGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZ2dsZXIgZnJvbSAnLi4vVG9nZ2xlci9Ub2dnbGVyJztcblxuY29uc3QgTGlzdGluZ1RpdGxlID0gKHt0b2dnbGV9KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tbGlzdGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhcHBfX21haW4tLWxpc3RpbmctLXRpdGxlXCI+TGlzdGluZ3M8L2gyPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVyIHRvZ2dsZT17dG9nZ2xlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tbGlzdGluZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLWxpc3RpbmctLXRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ1RpdGxlOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ListingTitle/ListingTitle.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ListingTitle);

/***/ }),

/***/ "./components/Listings/Listings.js":
/*!*****************************************!*\
  !*** ./components/Listings/Listings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListingCard/ListingCard */ "./components/ListingCard/ListingCard.js");
/* harmony import */ var _FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FloatingButton/FloatingButton */ "./components/FloatingButton/FloatingButton.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/Listings/Listings.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Listings = ({
  listings,
  toggleStatus
}) => {
  return __jsx("div", {
    className: "jsx-4086089231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4086089231" + " " + "listings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, listings.map((v, i) => __jsx(_ListingCard_ListingCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    __self: undefined
  }))), toggleStatus === 'userListings' ? __jsx(_FloatingButton_FloatingButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    route: "/add-listing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }) : __jsx("span", {
    className: "jsx-4086089231",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4086089231",
    __self: undefined
  }, ".listings.jsx-4086089231{margin-top:5rem;}.listings.jsx-4086089231>*.jsx-4086089231{margin-bottom:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdzL0xpc3RpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQixBQUd5QyxBQUlHLGdCQUh2QixHQUlBIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL0xpc3RpbmdzL0xpc3RpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3RpbmdDYXJkIGZyb20gJy4uL0xpc3RpbmdDYXJkL0xpc3RpbmdDYXJkJztcbmltcG9ydCBGbG9hdGluZ0J1dHRvbiBmcm9tICcuLi9GbG9hdGluZ0J1dHRvbi9GbG9hdGluZ0J1dHRvbic7XG5cbmNvbnN0IExpc3RpbmdzID0gKHtsaXN0aW5ncywgdG9nZ2xlU3RhdHVzfSkgPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RpbmdzLm1hcCgodiwgaSk9PiA8TGlzdGluZ0NhcmQga2V5PXtsaXN0aW5nc1tpXS5pZH0gaWQ9e2xpc3RpbmdzW2ldLmlkfSBuYW1lPXtsaXN0aW5nc1tpXS5uYW1lfSBhZGRyZXNzPXtsaXN0aW5nc1tpXS5hZGRyZXNzfSBwcmljZT17bGlzdGluZ3NbaV0ucHJpY2V9IHR5cGU9e2xpc3RpbmdzW2ldLnR5cGV9IGltYWdlPXtsaXN0aW5nc1tpXS5pbWFnZXNbMF19Lz4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dG9nZ2xlU3RhdHVzID09PSAndXNlckxpc3RpbmdzJyA/IDxGbG9hdGluZ0J1dHRvbiByb3V0ZT1cIi9hZGQtbGlzdGluZ1wiLz4gOiA8c3Bhbj48L3NwYW4+fVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAubGlzdGluZ3N7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmxpc3RpbmdzID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Listings/Listings.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ }),

/***/ "./components/MainContent/MainContent.js":
/*!***********************************************!*\
  !*** ./components/MainContent/MainContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/MainContent/MainContent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MainContent = props => {
  return __jsx("div", {
    className: "jsx-3704775158" + " " + "app__main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3704775158" + " " + "app__main--content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3704775158",
    __self: undefined
  }, ".app__main.jsx-3704775158{background-color:#fefcf5;overflow-y:scroll;-webkit-flex:0 0 80%;-ms-flex:0 0 80%;flex:0 0 80%;padding:5rem 0;}.app__main--content.jsx-3704775158{width:80%;margin:0 auto;}.app__main--listing.jsx-3704775158{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#683507;}.app__main--details.jsx-3704775158{background-color:olive display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.app__main--details.jsx-3704775158:not(:last-child){margin-bottom:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL01haW5Db250ZW50L01haW5Db250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNpQixBQUdrRCxBQVdmLEFBVUcsQUFTQSxBQUtNLFVBdkJMLFNBd0JsQixLQXZCQSxDQVpzQixXQThCWSxPQTdCakIsK0JBb0JpQixvQkFuQmYsZUFLbkIsMENBd0JBLHNDQVR1Qiw2RkFDTCxjQUVsQiIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9NYWluQ29udGVudC9NYWluQ29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1haW5Db250ZW50ID0gKHByb3BzKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwX19tYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YCAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW57XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2Y1O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwX19tYWluLS1jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAuYXBwX19tYWluLS1jb250ZW50Om5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tbGlzdGluZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2ODM1MDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0OyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tZGV0YWlsc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9saXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwX19tYWluLS1kZXRhaWxzOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiAuYXBwX19tYWluLS1kZXRhaWxzID4gKnsgXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDsgIl19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/MainContent/MainContent.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./components/Map/Map.js":
/*!*******************************!*\
  !*** ./components/Map/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/Map/Map.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Map = () => {
  return __jsx("div", {
    className: "jsx-3498619328",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3498619328" + " " + "map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Map goes here"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3498619328",
    __self: undefined
  }, ".map.jsx-3498619328{width:40rem;background-color:coral;height:22.5rem;border-radius:.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL01hcC9NYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2lCLEFBSXFDLFlBQ1csdUJBQ1IsZUFDSyxvQkFFUCwwRUFDVSxtR0FDSiw2RkFDUCxZQUNHLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL01hcC9NYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXAgPSAoKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcFwiPlxuICAgICAgICAgICAgICAgIE1hcCBnb2VzIGhlcmVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAubWFwe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxleDogMCAwIDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBURVNUIE9OTFkgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Map/Map.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Meta/Meta.js":
/*!*********************************!*\
  !*** ./components/Meta/Meta.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kenny/eazyrent/components/Meta/Meta.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Meta = ({
  pageTitle
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-4269711741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), ">", __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-4269711741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), ">", __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge",
    className: "jsx-4269711741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("link", {
    type: "text/css",
    href: "https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap",
    rel: "stylesheet",
    className: "jsx-4269711741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("title", {
    className: "jsx-4269711741",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, pageTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4269711741",
    __self: undefined
  }, "*{padding:0;margin:0;border-box:box-sizing;}*::before,*::after{padding:0;margin:0;border-box:box-sizing;}html{font-size:62.5%;}body{font-family:'Quicksand',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL01ldGEvTWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXYSxBQUttQyxBQU1BLEFBTU0sQUFJb0IsVUFmM0IsQUFNQSxNQU1iLEdBWDBCLEFBTUEsZ0JBUzFCLE1BZEEsQUFNQSIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9NZXRhL01ldGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBNZXRhID0gKHtwYWdlVGl0bGV9KT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz4+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+PlxuICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICAgICAgPGxpbmsgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJveDogYm94LXNpemluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJveDogYm94LXNpemluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGh0bWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Meta/Meta.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/PaymentForm/PaymentForm.js":
/*!***********************************************!*\
  !*** ./components/PaymentForm/PaymentForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/types */ "./types/types.js");
/* harmony import */ var _PaymentFormStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaymentFormStyle */ "./components/PaymentForm/PaymentFormStyle.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/PaymentForm/PaymentForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PaymentForm = ({
  changeInput,
  form,
  changeForm,
  addToBanks,
  overwriteBank,
  bankToEdit
}) => {
  {
    switch (form) {
      case 'add':
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-bg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: undefined
        }, __jsx("h1", {
          className: "payment-form__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: undefined
        }, "Add new bank"), __jsx("a", {
          href: "#",
          className: "payment-form__close",
          onClick: () => changeForm(''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: undefined
        }, __jsx("span", {
          className: "payment-from__close--icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: undefined
        }, "X")))), __jsx("form", {
          className: "payment-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "bank",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: undefined
        }, "bank name"), __jsx("input", {
          type: "input",
          placeholder: "XYZ Bank",
          className: "payment-form__form--input",
          id: "bank",
          autoComplete: "off",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: undefined
        }), __jsx("label", {
          htmlFor: "bank",
          className: "payment-form__form--error",
          id: "bank-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: undefined
        }, "Kindly put in a valid bank name")), __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "account",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: undefined
        }, "account number"), __jsx("input", {
          type: "input",
          placeholder: "0011223344",
          className: "payment-form__form--input",
          id: "account",
          autoComplete: "off",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: undefined
        }), __jsx("label", {
          htmlFor: "account",
          className: "payment-form__form--error",
          id: "account-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: undefined
        }, "Invalid account number"))), __jsx("div", {
          className: "payment-form__row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "bvn",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: undefined
        }, "bvn number"), __jsx("input", {
          type: "text",
          placeholder: "99887766554433",
          className: "payment-form__form--input",
          id: "bvn",
          autoComplete: "off",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: undefined
        }), __jsx("label", {
          htmlFor: "bvn",
          className: "payment-form__form--error",
          id: "bvn-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: undefined
        }, "Invalid BVN number")), __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "type",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: undefined
        }, "Account Type"), __jsx("select", {
          className: "payment-form__form--select",
          id: "type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: undefined
        }, __jsx("option", {
          value: "none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: undefined
        }, "None"), __jsx("option", {
          value: "current",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: undefined
        }, "Current"), __jsx("option", {
          value: "savings",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: undefined
        }, "Savings"), __jsx("option", {
          value: "domiciliary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: undefined
        }, "Domicilary")), __jsx("label", {
          htmlFor: "type",
          className: "payment-form__form--error",
          id: "type-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: undefined
        }, "Kindly choose account type"))), __jsx("a", {
          href: "#",
          className: "payment-form__btn",
          onClick: () => {
            validateForm();
            addToBankAfterValidation(addToBanks, changeForm);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: undefined
        }, "Save changes"))), __jsx(_PaymentFormStyle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: undefined
        }));

      case 'edit':
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-bg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: undefined
        }, __jsx("h1", {
          className: "payment-form__title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: undefined
        }, "Edit bank"), __jsx("a", {
          href: "#",
          className: "payment-form__close",
          onClick: () => changeForm(''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: undefined
        }, __jsx("span", {
          className: "payment-from__close--icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: undefined
        }, "X"))), __jsx("form", {
          className: "payment-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "bank",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: undefined
        }, "bank name"), __jsx("input", {
          type: "input",
          placeholder: "XYZ Bank",
          className: "payment-form__form--input",
          id: "bank",
          autoComplete: "off",
          defaultValue: bankToEdit.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: undefined
        }), __jsx("label", {
          htmlFor: "bank",
          className: "payment-form__form--error",
          id: "bank-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: undefined
        }, "Kindly put in a valid bank name")), __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "account",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: undefined
        }, "account number"), __jsx("input", {
          type: "input",
          placeholder: "0011223344",
          className: "payment-form__form--input",
          id: "account",
          autoComplete: "off",
          defaultValue: bankToEdit.account,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: undefined
        }), __jsx("label", {
          htmlFor: "account",
          className: "payment-form__form--error",
          id: "account-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: undefined
        }, "Invalid account number"))), __jsx("div", {
          className: "payment-form__row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "bvn",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: undefined
        }, "bvn number"), __jsx("input", {
          type: "text",
          placeholder: "99887766554433",
          className: "payment-form__form--input",
          id: "bvn",
          autoComplete: "off",
          defaultValue: bankToEdit.bvn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: undefined
        }), __jsx("label", {
          htmlFor: "bvn",
          className: "payment-form__form--error",
          id: "bvn-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: undefined
        }, "Invalid BVN number")), __jsx("div", {
          className: "payment-form__form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: undefined
        }, __jsx("label", {
          htmlFor: "type",
          className: "payment-form__form--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: undefined
        }, "Account Type"), __jsx("select", {
          className: "payment-form__form--select",
          id: "type",
          defaultValue: bankToEdit.type,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: undefined
        }, __jsx("option", {
          value: "none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: undefined
        }, "None"), __jsx("option", {
          value: "current",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: undefined
        }, "Current"), __jsx("option", {
          value: "savings",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: undefined
        }, "Savings"), __jsx("option", {
          value: "domiciliary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: undefined
        }, "Domicilary")), __jsx("label", {
          htmlFor: "type",
          className: "payment-form__form--error",
          id: "type-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: undefined
        }, "Kindly choose account type"))), __jsx("a", {
          href: "#",
          className: "payment-form__btn",
          onClick: () => {
            validateForm();
            overwriteBankAfterValidation(overwriteBank, bankToEdit, changeForm);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: undefined
        }, "Save changes"))), __jsx(_PaymentFormStyle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: undefined
        }));

      default:
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: undefined
        }, __jsx("div", {
          className: "payment-bg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: undefined
        }, __jsx("p", {
          className: "payment-bg__text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: undefined
        }, "Click on a bank card to edit it or add a new Bank with the floating button")), __jsx(_PaymentFormStyle__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: undefined
        }));
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentForm); //FUNCTIONS FOR FORM VALIDATION AND SUBMITTING

const validateForm = () => {
  if (!document.getElementById('bank').value) {
    console.log('Kindly put in a valid bank name');
    document.getElementById('bank').classList.toggle('invalid');
    document.getElementById('bank-label').classList.toggle('active');
  }

  if (document.getElementById('account').value.length !== 10 && !isNaN(document.getElementById('account').value)) {
    console.log('Invalid account number');
    document.getElementById('account').classList.toggle('invalid');
    document.getElementById('account-label').classList.toggle('active');
  }

  if (document.getElementById('bvn').value.length !== 11 && !isNaN(document.getElementById('bvn').value)) {
    console.log('Invalid BVN number');
    document.getElementById('bvn').classList.toggle('invalid');
    document.getElementById('bvn-label').classList.toggle('active');
  }

  if (document.getElementById('type').value === 'none') {
    console.log('Kindly choose account type');
    document.getElementById('type').classList.toggle('invalid');
    document.getElementById('type-label').classList.toggle('active');
  }
}; //ADD TO BANK IF ALL VALIDATION IS PASSED


const addToBankAfterValidation = (addToBanks, changeForm) => {
  if (document.getElementById('bank').value && document.getElementById('account').value.length === 10 && document.getElementById('bvn').value.length === 11 && document.getElementById('type').value !== 'none') {
    addToBanks(new _types_types__WEBPACK_IMPORTED_MODULE_1__["Bank"](Math.floor(Math.random() * (100000 - 10000) + 10000), document.getElementById('bank').value, document.getElementById('account').value, document.getElementById('type').value, document.getElementById('bvn').value, 'under review'));
    changeForm('');
  }
}; //OVERWRITE BANK IF ALL VALIDATION IS PASSED


const overwriteBankAfterValidation = (overwriteBank, bankToEdit, changeForm) => {
  if (document.getElementById('bank').value && document.getElementById('account').value.length === 10 && document.getElementById('bvn').value.length === 11 && document.getElementById('type').value !== 'none') {
    overwriteBank(new _types_types__WEBPACK_IMPORTED_MODULE_1__["Bank"](bankToEdit.id, document.getElementById('bank').value, document.getElementById('account').value, document.getElementById('type').value, document.getElementById('bvn').value, bankToEdit.status));
    changeForm('');
  }
};

/***/ }),

/***/ "./components/PaymentForm/PaymentFormStyle.js":
/*!****************************************************!*\
  !*** ./components/PaymentForm/PaymentFormStyle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kenny/eazyrent/components/PaymentForm/PaymentFormStyle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PaymentFormStyle = () => {
  return __jsx("style", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, `
                .payment-bg{
                    // margin-top: 5rem;
                    width: 100%;
                    padding: 3.5rem 0;
                    color:white;
                    text-align: center;
                    border-radius: 2rem;
                    background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    transition: all .5s ease;
                }

                .payment-bg__text{
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                
                .payment-form{
                    margin: 0 auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                .payment-form__row{
                    width: 85%;
                    margin: 0 auto;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                }
                
                .payment-form__row:not(:last-child){
                    margin-bottom: 2rem;
                }

                .payment-form__header{
                    margin-bottom: 3.5rem; 
                }
                
                .payment-form__title{
                    font-size: 4rem;
                    text-transform: uppercase;
                }
                
                .payment-form__close:link, .payment-form__close:active{
                    display: inline-block;
                    text-decoration: none;
                    height: 5rem;
                    width: 5rem;
                    border-radius: 50%;
                    background-color: white;
                    box-shadow: 0 .5rem 3rem rgba(0, 0, 0, 0.2);
                    align-self: center;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .payment-form__close:focus{
                    outline: none;
                    box-shadow: 0 .5rem 3rem #f2984a8e;
                }
                
                .payment-from__close--icon{
                    font-size: 2rem;
                    color: transparent;
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-image:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                }
                
                .payment-form__form{
                    display: flex;
                    flex-direction: column;
                }
                
                .payment-form__form--input, .payment-form__form--select{
                    display: block;
                    font-family: 'Quicksand', sans-serif;
                    font-size: 1.8rem;
                    padding: 1rem 2.5rem;
                    width: 26.5rem;
                    border: .2rem solid #e8edf7;
                    border-radius: .5rem;
                    transition: all .2s ease;
                }
                
                .payment-form__form--select{
                    height: 100%;
                    width: 32rem;
                }
                
                .payment-form__form--input.invalid, .payment-form__form--select.invalid{
                    border: .2rem solid red;
                }
                
                .payment-form__form--input::placeholder, .payment-form__form--input::-moz-placeholder, .payment-form__form--input::-webkit-input-placeholder, .payment-form__form--input::-ms-input-placeholder{
                    /* font-family: 'Quicksand', sans-serif; */
                    font-size: 2rem;
                    color:#e8edf7;
                    color:red;
                    text-transform: capitalize;
                }
                
                .payment-form__form--input:focus, .payment-form__form--select:focus{
                    outline: none;
                    border: .2rem solid #f2994a ;
                }
                
                .payment-form__form--label{
                    color:rgba(0, 0, 0, 0.4);
                    font-size: 1.3rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    margin-bottom: .5rem;
                    align-self: flex-start;
                    display: block;
                }
                
                .payment-form__form--error{
                    color:rgba(255, 0, 0, 0.4);
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    /* margin-top: .5rem; */
                    align-self: flex-start;
                    transition: all .2s ease;
                    opacity: 0;
                    visibility: hidden;
                }
                
                .payment-form__form--error.active{
                    opacity: 1;
                    visibility: visible;
                }
                
                .payment-form__btn{
                    color:white;
                }
                
                .payment-form__btn:link, .profile-form__btn:active{
                    margin-top: 2rem;
                    display: inline-block;
                    align-self: center;
                    text-decoration: none;
                    font-size: 1.5rem;
                    padding: 1.25rem 2.5rem;
                    border-radius: .5rem;
                    background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    box-shadow: 0 .5rem 3rem rgba(0, 0, 0, 0.3);
                }
            `);
};

/* harmony default export */ __webpack_exports__["default"] = (PaymentFormStyle);

/***/ }),

/***/ "./components/ProfileBox/ProfileBox.js":
/*!*********************************************!*\
  !*** ./components/ProfileBox/ProfileBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserAvatar_UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserAvatar/UserAvatar */ "./components/UserAvatar/UserAvatar.js");
var _jsxFileName = "/Users/kenny/eazyrent/components/ProfileBox/ProfileBox.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ProfileBox = () => {
  return __jsx("div", {
    className: "jsx-4272723396",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4272723396" + " " + "profile-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_UserAvatar_UserAvatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-4272723396" + " " + "profile-box__user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-4272723396" + " " + "profile-box__user--name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Batholomew Arinzeabalaga"), __jsx("p", {
    className: "jsx-4272723396" + " " + "profile-box__user--location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Lagos, Nigeria"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4272723396",
    __self: undefined
  }, ".profile-box.jsx-4272723396{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:40%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-bottom:2.5rem;}.profile-box__user.jsx-4272723396{-webkit-flex:0 0 40%;-ms-flex:0 0 40%;flex:0 0 40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.profile-box__user--name.jsx-4272723396{font-size:2rem;}.profile-box__user--location.jsx-4272723396{font-size:1.3rem;font-weight:400;color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1Byb2ZpbGVCb3gvUHJvZmlsZUJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhaUIsQUFHc0MsQUFRQSxBQVFFLEFBSUUsZUFIckIsRUFLb0IsZ0JBQ0wsV0FDZixPQWZpQix1QkFSSCxVQUNTLHlDQVFSLFdBQ1cseUNBUk8scUNBU0Esc0ZBUlIscUJBQ3pCLGdCQVFBIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1Byb2ZpbGVCb3gvUHJvZmlsZUJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQXZhdGFyIGZyb20gJy4uL1VzZXJBdmF0YXIvVXNlckF2YXRhcic7XG5cbmNvbnN0IFByb2ZpbGVCb3ggPSAoKT0+e1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm94XCI+XG4gICAgICAgICAgICAgICAgPFVzZXJBdmF0YXIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib3hfX3VzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2ZpbGUtYm94X191c2VyLS1uYW1lXCI+QmF0aG9sb21ldyBBcmluemVhYmFsYWdhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZmlsZS1ib3hfX3VzZXItLWxvY2F0aW9uXCI+TGFnb3MsIE5pZ2VyaWE8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWJveF9fdXNlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWJveF9fdXNlci0tbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtYm94X191c2VyLS1sb2NhdGlvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVCb3g7Il19 */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ProfileBox/ProfileBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileBox);

/***/ }),

/***/ "./components/ProfileForm/ProfileForm.js":
/*!***********************************************!*\
  !*** ./components/ProfileForm/ProfileForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/ProfileForm/ProfileForm.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const ProfileForm = () => {
  return __jsx("form", {
    className: "jsx-2282522916" + " " + "profile-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("input", {
    type: "input",
    placeholder: "Joe",
    id: "name",
    className: "jsx-2282522916" + " " + "profile-form__form--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "name",
    className: "jsx-2282522916" + " " + "profile-form__form--label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "name")), __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("input", {
    type: "input",
    placeholder: "Doe",
    id: "fullname",
    className: "jsx-2282522916" + " " + "profile-form__form--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "fullname",
    className: "jsx-2282522916" + " " + "profile-form__form--label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "full name"))), __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("input", {
    type: "email",
    placeholder: "john@doe@xyz.com",
    id: "email",
    className: "jsx-2282522916" + " " + "profile-form__form--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "email",
    className: "jsx-2282522916" + " " + "profile-form__form--label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Email address")), __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("input", {
    type: "phone",
    placeholder: "+2349080000000",
    id: "phone",
    className: "jsx-2282522916" + " " + "profile-form__form--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "phone",
    className: "jsx-2282522916" + " " + "profile-form__form--label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Phone Number"))), __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("input", {
    type: "input",
    placeholder: "e.g. Lagos, Nigeria",
    id: "location",
    className: "jsx-2282522916" + " " + "profile-form__form--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "location",
    className: "jsx-2282522916" + " " + "profile-form__form--label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Location")), __jsx("div", {
    className: "jsx-2282522916" + " " + "profile-form__form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "100253",
    id: "postalcode",
    className: "jsx-2282522916" + " " + "profile-form__form--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "postalcode",
    className: "jsx-2282522916" + " " + "profile-form__form--label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Postal code"))), __jsx("a", {
    href: "/",
    className: "jsx-2282522916" + " " + "profile-form__btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Save changes"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2282522916",
    __self: undefined
  }, ".profile-form.jsx-2282522916{width:100%;padding:2rem 0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.profile-form__row.jsx-2282522916{width:90%;margin:0 auto;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.profile-form__row.jsx-2282522916:not(:last-child){margin-bottom:3rem;}.profile-form__form.jsx-2282522916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.profile-form__form--input.jsx-2282522916{display:block;font-family:'Quicksand',sans-serif;font-size:1.8rem;padding:1rem 2.5rem;width:30rem;border:.2rem solid #e8edf7;border-radius:.5rem;-webkit-transition:all .2s ease;transition:all .2s ease;}.profile-form__form--input.jsx-2282522916::-webkit-input-placeholder,.profile-form__form--input.jsx-2282522916::-moz-placeholder,.profile-form__form--input.jsx-2282522916::-webkit-input-placeholder,.profile-form__form--input.jsx-2282522916::-ms-input-placeholder{font-size:2rem;color:#e8edf7;color:red;text-transform:capitalize;}.profile-form__form--input.jsx-2282522916::-moz-placeholder,.profile-form__form--input.jsx-2282522916::-moz-placeholder,.profile-form__form--input.jsx-2282522916::-webkit-input-placeholder,.profile-form__form--input.jsx-2282522916::-ms-input-placeholder{font-size:2rem;color:#e8edf7;color:red;text-transform:capitalize;}.profile-form__form--input.jsx-2282522916:-ms-input-placeholder,.profile-form__form--input.jsx-2282522916::-moz-placeholder,.profile-form__form--input.jsx-2282522916::-webkit-input-placeholder,.profile-form__form--input.jsx-2282522916::-ms-input-placeholder{font-size:2rem;color:#e8edf7;color:red;text-transform:capitalize;}.profile-form__form--input.jsx-2282522916::placeholder,.profile-form__form--input.jsx-2282522916::-moz-placeholder,.profile-form__form--input.jsx-2282522916::-webkit-input-placeholder,.profile-form__form--input.jsx-2282522916::-ms-input-placeholder{font-size:2rem;color:#e8edf7;color:red;text-transform:capitalize;}.profile-form__form--input.jsx-2282522916:focus{outline:none;border:.2rem solid #f2994a;}.profile-form__form--label.jsx-2282522916{color:black;font-size:1.3rem;text-transform:capitalize;margin-bottom:.5rem;}.profile-form__btn.jsx-2282522916{color:white;}.profile-form__btn.jsx-2282522916:link,.profile-form__btn.jsx-2282522916:active{margin-top:2rem;display:inline-block;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-text-decoration:none;text-decoration:none;font-size:1.5rem;padding:1.25rem 2.5rem;border-radius:.5rem;background:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1Byb2ZpbGVGb3JtL1Byb2ZpbGVGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DaUIsQUFHb0MsQUFTRCxBQVFTLEFBSU4sQUFLQyxBQVlDLEFBT0YsQUFLRixBQU9BLEFBSUssVUFuREYsQ0FUQyxDQWtERSxBQU9yQixDQVpnQyxDQW5CUSxDQVl2QixDQXVCUSxHQTVDekIsS0FQZSxFQVRBLEdBc0NGLEFBWWlCLE9BeENiLENBbURLLENBNURMLENBc0NhLENBTTlCLFNBbkJxQixNQXlCRyxVQVh4QixDQWJ3QixRQVBVLENBZ0NsQyxXQXhCZ0IsWUFDZSxVQWlDTixFQW5EUyxFQVRSLGFBNEJGLG9CQUNJLGFBZ0NQLGlCQUNNLENBM0MzQixjQWxCMkIsUUE4REgsR0FqQ3hCLGlCQWtDK0QsT0F0RC9ELG9EQXVEQSxZQS9EQSIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9Qcm9maWxlRm9ybS9Qcm9maWxlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFByb2ZpbGVGb3JtID0gKCk9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZm9ybV9fZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJKb2VcIiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX2Zvcm0tLWlucHV0XCIgaWQ9XCJuYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX2Zvcm0tLWxhYmVsXCI+bmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiRG9lXCIgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtLS1pbnB1dFwiIGlkPVwiZnVsbG5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbG5hbWVcIiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX2Zvcm0tLWxhYmVsXCI+ZnVsbCBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX3Jvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImpvaG5AZG9lQHh5ei5jb21cIiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX2Zvcm0tLWlucHV0XCIgaWQ9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInByb2ZpbGUtZm9ybV9fZm9ybS0tbGFiZWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZm9ybV9fZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCIrMjM0OTA4MDAwMDAwMFwiIGNsYXNzTmFtZT1cInByb2ZpbGUtZm9ybV9fZm9ybS0taW5wdXRcIiBpZD1cInBob25lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCIgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtLS1sYWJlbFwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtZm9ybV9fZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCJlLmcuIExhZ29zLCBOaWdlcmlhXCIgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtLS1pbnB1dFwiIGlkPVwibG9jYXRpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIiBjbGFzc05hbWU9XCJwcm9maWxlLWZvcm1fX2Zvcm0tLWxhYmVsXCI+TG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMTAwMjUzXCIgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtLS1pbnB1dFwiIGlkPVwicG9zdGFsY29kZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3N0YWxjb2RlXCIgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19mb3JtLS1sYWJlbFwiPlBvc3RhbCBjb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPVwicHJvZmlsZS1mb3JtX19idG5cIj5TYXZlIGNoYW5nZXM8L2E+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWZvcm17XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtZm9ybV9fcm93e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1mb3JtX19yb3c6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWZvcm1fX2Zvcm17XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1mb3JtX19mb3JtLS1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjJyZW0gc29saWQgI2U4ZWRmNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1mb3JtX19mb3JtLS1pbnB1dDo6cGxhY2Vob2xkZXIsIC5wcm9maWxlLWZvcm1fX2Zvcm0tLWlucHV0OjotbW96LXBsYWNlaG9sZGVyLCAucHJvZmlsZS1mb3JtX19mb3JtLS1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLnByb2ZpbGUtZm9ybV9fZm9ybS0taW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNlOGVkZjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtZm9ybV9fZm9ybS0taW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAuMnJlbSBzb2xpZCAjZjI5OTRhIDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtZm9ybV9fZm9ybS0tbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtZm9ybV9fYnRue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWZvcm1fX2J0bjpsaW5rLCAucHJvZmlsZS1mb3JtX19idG46YWN0aXZle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZjI5OTRhIDAlLCNmMmM5NGMgMTAwJSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRm9ybTsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/ProfileForm/ProfileForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileForm);

/***/ }),

/***/ "./components/Searchbar/Searchbar.js":
/*!*******************************************!*\
  !*** ./components/Searchbar/Searchbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/Searchbar/Searchbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SearchBar = () => {
  return __jsx("div", {
    className: "jsx-2205436651",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("form", {
    autoComplete: "off",
    className: "jsx-2205436651" + " " + "app__main--searchbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("input", {
    type: "search",
    placeholder: "Search for your dream home",
    id: "search",
    className: "jsx-2205436651" + " " + "app__main--searchbar--input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("img", {
    src: "/img/searchicon.png",
    alt: "searchIcon",
    className: "jsx-2205436651" + " " + "app__main--searchbar--icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2205436651",
    __self: undefined
  }, ".app__main--searchbar.jsx-2205436651{width:100%;height:6rem;position:relative;}.app__main--searchbar--input.jsx-2205436651{width:inherit;height:inherit;padding:1.5rem 2rem;padding-left:6rem;font-size:1.5rem;font-family:Quicksand,'sans-serif';border:1px solid #F6F8FC;border-radius:1rem;box-shadow:0 .1rem .05rem .005rem rgba(black,.1);}.app__main--searchbar--input.jsx-2205436651::-webkit-input-placeholder{color:#CAC8CF;}.app__main--searchbar--input.jsx-2205436651:focus{outline:none;}.app__main--searchbar--icon.jsx-2205436651{width:3%;position:absolute;left:1.5rem;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);opacity:.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1NlYXJjaGJhci9TZWFyY2hiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWlCLEFBR29DLEFBTUcsQUFZQSxBQUlELEFBSUosU0FDUyxFQTFCTixFQXNCaEIsQ0FoQm1CLEFBWW5CLFNBakJzQixJQTBCTixFQXBCUSxVQXFCWixFQTFCWixNQTJCK0IsRUFyQlQsa0JBQ0QsaUJBQ21CLG1DQUNYLHFCQW1CZCxJQWxCUSxPQW1CdkIsWUFsQnNELGlEQUN0RCIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9TZWFyY2hiYXIvU2VhcmNoYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VhcmNoQmFyID0gKCk9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXBwX19tYWluLS1zZWFyY2hiYXJcIiBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tc2VhcmNoYmFyLS1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB5b3VyIGRyZWFtIGhvbWVcIiBpZD1cInNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9zZWFyY2hpY29uLnBuZycgYWx0PVwic2VhcmNoSWNvblwiIGNsYXNzTmFtZT1cImFwcF9fbWFpbi0tc2VhcmNoYmFyLS1pY29uXCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuYXBwX19tYWluLS1zZWFyY2hiYXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tc2VhcmNoYmFyLS1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsICdzYW5zLXNlcmlmJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNkY4RkM7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAuMXJlbSAuMDVyZW0gLjAwNXJlbSByZ2JhKGJsYWNrLCAuMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLXNlYXJjaGJhci0taW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NBQzhDRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fbWFpbi0tc2VhcmNoYmFyLS1pbnB1dDpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX21haW4tLXNlYXJjaGJhci0taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Searchbar/Searchbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kenny/eazyrent/components/Sidebar/Sidebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Sidebar = ({
  route
}) => {
  return __jsx("section", {
    className: "jsx-2518800425" + " " + "app__sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2518800425" + " " + "app__sidebar--logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/logo-test.png",
    alt: "logo",
    className: "jsx-2518800425" + " " + "app__sidebar--logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2518800425" + " " + "app__sidebar--menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2518800425" + " " + `app__sidebar--menu--items ${route === "main" ? "active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/home.png",
    alt: "home",
    className: "jsx-2518800425" + " " + "app__sidebar--menu--icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), "Home"))), __jsx("li", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/listings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2518800425" + " " + `app__sidebar--menu--items ${route === "listings" ? "active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/chart.png",
    alt: "listing",
    className: "jsx-2518800425" + " " + "app__sidebar--menu--icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), "Listings"))), __jsx("li", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2518800425" + " " + `app__sidebar--menu--items ${route === "profile" ? "active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/man.png",
    alt: "profile",
    className: "jsx-2518800425" + " " + "app__sidebar--menu--icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), "Profile"))), __jsx("li", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2518800425" + " " + `app__sidebar--menu--items ${route === "settings" ? "active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/settings.png",
    alt: "settings",
    className: "jsx-2518800425" + " " + "app__sidebar--menu--icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), " Settings"))), __jsx("li", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/payment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2518800425" + " " + `app__sidebar--menu--items ${route === "payment" ? "active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/payment.png",
    alt: "payment",
    className: "jsx-2518800425" + " " + "app__sidebar--menu--icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), " Payments"))), __jsx("li", {
    className: "jsx-2518800425",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    href: "/",
    className: "jsx-2518800425" + " " + `app__sidebar--menu--items`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/signout.png",
    alt: "signout",
    className: "jsx-2518800425" + " " + "app__sidebar--menu--icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), " Log out")))), __jsx("div", {
    className: "jsx-2518800425" + " " + "app__sidebar--banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2518800425",
    __self: undefined
  }, ".app__sidebar.jsx-2518800425{box-shadow:0 0 5rem rgba(0,0,0,0.1);background-color:white;-webkit-flex:0 0 20%;-ms-flex:0 0 20%;flex:0 0 20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:-webkit-sticky;position:sticky;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:2rem 0;}.app__sidebar--logo-box.jsx-2518800425{-webkit-flex:0 0 5%;-ms-flex:0 0 5%;flex:0 0 5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.app__sidebar--logo.jsx-2518800425{width:5rem;height:5rem;}.app__sidebar--menu.jsx-2518800425{-webkit-flex:0 0 55%;-ms-flex:0 0 55%;flex:0 0 55%;width:100%;}.app__sidebar--menu.jsx-2518800425 ul.jsx-2518800425{list-style:none;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.app__sidebar--menu.jsx-2518800425 li.jsx-2518800425{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.app__sidebar--menu--items.jsx-2518800425{color:black;}.app__sidebar--menu--icons.jsx-2518800425{width:10%;-webkit-transform:translateY(-.3rem);-ms-transform:translateY(-.3rem);transform:translateY(-.3rem);position:absolute;left:3rem;opacity:.5;}.app__sidebar--menu--items.jsx-2518800425:link,.app__sidebar--menu--items.jsx-2518800425:active{width:100%;text-align:center;display:inline-block;-webkit-text-decoration:none;text-decoration:none;padding:1rem 0;font-size:1.5rem;border-top-right-radius:.3rem;border-bottom-right-radius:.3rem;border-right:.3rem solid transparent;-webkit-transition:all .3s ease;transition:all .3s ease;position:relative;}.app__sidebar--menu--items.jsx-2518800425:hover,.app__sidebar--menu--items.active.jsx-2518800425{background-color:#f6f7f7;border-right:.3rem solid #f2994a;}.app__sidebar--menu--items.jsx-2518800425:hover .app__sidebar--menu--icons.jsx-2518800425,.app__sidebar--menu--items.active.jsx-2518800425 .app__sidebar--menu--icons.jsx-2518800425{opacity :.8;}.app__sidebar--banner.jsx-2518800425{-webkit-flex:0 0 30%;-ms-flex:0 0 30%;flex:0 0 30%;width:70%;border-radius:.5rem;background:linear-gradient(90deg,#f2994a 0%,#f2c94c 100% );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmlCLEFBSWdFLEFBcUIzQixBQU1ELEFBS0UsQUFLRyxBQVNMLEFBS0EsQUFJRCxBQVVDLEFBY2MsQUFNYixBQUlDLFVBaENnQixDQTdCakIsQUFtQkMsQUFtQkssQ0FkdEIsQUFrQ0EsSUFoRGdCLE9BVGhCLEVBb0RzQyxHQTFDckIsQ0E0QlEsT0FsRUUsWUFxQlYsRUE4Q1EsQ0FuQ1YsQUF5REQsT0FSZCxDQWhGaUIsRUF5Rk8sQ0F6RHhCLG1CQTBEK0QsSUE1Qy9ELGVBcUJtQixFQTdCTyxPQWtCSixDQXZETCxLQW1FSSxPQS9DTSxLQW9DYixLQVlvQixLQVhuQixHQWlDZixRQS9CQSxjQVVxQyxrQkEvQkosSUFyQ2IsV0FxRXFCLDBCQWpEekMsR0FuQjBCLFFBcUVFLHdEQUNOLGNBckVXLENBb0NWLEdBa0N2QiwwRkFqQ0EsNkJBcEN1Qiw2RkFDSixlQUNuQiIsImZpbGUiOiIvVXNlcnMva2VubnkvZWF6eXJlbnQvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBTaWRlYmFyID0gKHtyb3V0ZX0pPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBwX19zaWRlYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9fc2lkZWJhci0tbG9nby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nby10ZXN0LnBuZ1wiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9XCJhcHBfX3NpZGViYXItLWxvZ29cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9fc2lkZWJhci0tbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtgYXBwX19zaWRlYmFyLS1tZW51LS1pdGVtcyAke3JvdXRlID09PSBcIm1haW5cIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PjxpbWcgc3JjPVwiL2ltZy9ob21lLnBuZ1wiIGFsdD1cImhvbWVcIiBjbGFzc05hbWU9XCJhcHBfX3NpZGViYXItLW1lbnUtLWljb25zXCIvPkhvbWU8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2xpc3RpbmdzXCI+PGEgY2xhc3NOYW1lPXtgYXBwX19zaWRlYmFyLS1tZW51LS1pdGVtcyAke3JvdXRlID09PSBcImxpc3RpbmdzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfT48aW1nIHNyYz1cIi9pbWcvY2hhcnQucG5nXCIgYWx0PVwibGlzdGluZ1wiIGNsYXNzTmFtZT1cImFwcF9fc2lkZWJhci0tbWVudS0taWNvbnNcIi8+TGlzdGluZ3M8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YSBjbGFzc05hbWU9e2BhcHBfX3NpZGViYXItLW1lbnUtLWl0ZW1zICR7cm91dGUgPT09IFwicHJvZmlsZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+PGltZyBzcmM9XCIvaW1nL21hbi5wbmdcIiBhbHQ9XCJwcm9maWxlXCIgY2xhc3NOYW1lPVwiYXBwX19zaWRlYmFyLS1tZW51LS1pY29uc1wiLz5Qcm9maWxlPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIGNsYXNzTmFtZT17YGFwcF9fc2lkZWJhci0tbWVudS0taXRlbXMgJHtyb3V0ZSA9PT0gXCJzZXR0aW5nc1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+PGltZyBzcmM9XCIvaW1nL3NldHRpbmdzLnBuZ1wiIGFsdD1cInNldHRpbmdzXCIgY2xhc3NOYW1lPVwiYXBwX19zaWRlYmFyLS1tZW51LS1pY29uc1wiLz4gU2V0dGluZ3M8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3BheW1lbnRcIj48YSBjbGFzc05hbWU9e2BhcHBfX3NpZGViYXItLW1lbnUtLWl0ZW1zICR7cm91dGUgPT09IFwicGF5bWVudFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+PGltZyBzcmM9XCIvaW1nL3BheW1lbnQucG5nXCIgYWx0PVwicGF5bWVudFwiIGNsYXNzTmFtZT1cImFwcF9fc2lkZWJhci0tbWVudS0taWNvbnNcIi8+IFBheW1lbnRzPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2BhcHBfX3NpZGViYXItLW1lbnUtLWl0ZW1zYH0+PGltZyBzcmM9XCIvaW1nL3NpZ25vdXQucG5nXCIgYWx0PVwic2lnbm91dFwiIGNsYXNzTmFtZT1cImFwcF9fc2lkZWJhci0tbWVudS0taWNvbnNcIi8+IExvZyBvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcF9fc2lkZWJhci0tYmFubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiAuYXBwX19zaWRlYmFyID4gKntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXIgPiAqOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLWxvZ28tYm94e1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwX19zaWRlYmFyLS1sb2dve1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLW1lbnV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNTUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLW1lbnUgdWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLW1lbnUgbGl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLW1lbnUtLWl0ZW1ze1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLW1lbnUtLWljb25ze1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIG1hcmdpbi1yaWdodDogM3JlbTsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtLjNyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlOyAqL1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuYXBwX19zaWRlYmFyLS1tZW51LS1pdGVtczpsaW5rLCAuYXBwX19zaWRlYmFyLS1tZW51LS1pdGVtczphY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAuM3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmFwcF9fc2lkZWJhci0tbWVudS0taXRlbXM6aG92ZXIsIC5hcHBfX3NpZGViYXItLW1lbnUtLWl0ZW1zLmFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY3Zjc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBib3JkZXItcmlnaHQ6IC4zcmVtIHNvbGlkIHB1cnBsZTsgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogLjNyZW0gc29saWQgI2YyOTk0YSA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLW1lbnUtLWl0ZW1zOmhvdmVyIC5hcHBfX3NpZGViYXItLW1lbnUtLWljb25zLCAuYXBwX19zaWRlYmFyLS1tZW51LS1pdGVtcy5hY3RpdmUgLmFwcF9fc2lkZWJhci0tbWVudS0taWNvbnN7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5IDogLjg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5hcHBfX3NpZGViYXItLWJhbm5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywgI2YyOTk0YSAwJSwjZjJjOTRjIDEwMCUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Sidebar/Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/Toggler/Toggler.js":
/*!***************************************!*\
  !*** ./components/Toggler/Toggler.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/Toggler/Toggler.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Toggler = ({
  toggle
}) => {
  return __jsx("div", {
    className: "jsx-3035553286",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3035553286" + " " + "toggler",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("input", {
    type: "radio",
    name: "activity",
    id: "active",
    value: "userListings",
    defaultChecked: true,
    onChange: e => toggle(e.target.value),
    className: "jsx-3035553286" + " " + "toggler__input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "active",
    className: "jsx-3035553286" + " " + "toggler__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "My Homes"), __jsx("input", {
    type: "radio",
    name: "activity",
    id: "inactive",
    value: "otherListings",
    onChange: e => {
      toggle(e.target.value);
    },
    className: "jsx-3035553286" + " " + "toggler__input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: "inactive",
    className: "jsx-3035553286" + " " + "toggler__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Other Homes")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3035553286",
    __self: undefined
  }, ".toggler.jsx-3035553286{display:inline-block;background-color:#f2c94c;padding:1.1rem 0;border-radius:1rem;box-shadow:0 0 .1rem .05rem #f2c94c;overflow:hidden;}.toggler__input.jsx-3035553286{display:none;}.toggler__label.jsx-3035553286{cursor:pointer;font-size:1.25rem;font-weight:500;padding:1.1rem 3rem;border-radius:1rem;}.toggler__input.jsx-3035553286:checked+.toggler__label.jsx-3035553286{background-color:white;color:#683507;box-shadow:0 0 .1rem .05rem #f2c94c;}.toggler__input.jsx-3035553286:not(:checked)+.toggler__label.jsx-3035553286{background-color:#f2c94c;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1RvZ2dsZXIvVG9nZ2xlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVaUIsQUFHOEMsQUFTUixBQUlFLEFBUVEsQUFPRSxhQWxCN0IsRUFJc0IsTUFiTyxFQXFCWCxFQU9GLFFBZEksSUFRb0IsQUFPeEMsU0E1QnFCLEdBY0csY0FiRCxNQWNBLElBUXZCLFNBckJ3QyxNQWN4Qyw4QkFib0IsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1RvZ2dsZXIvVG9nZ2xlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvZ2dsZXIgPSAoe3RvZ2dsZX0pPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjdGl2aXR5XCIgaWQ9XCJhY3RpdmVcIiB2YWx1ZT1cInVzZXJMaXN0aW5nc1wiIGNsYXNzTmFtZT1cInRvZ2dsZXJfX2lucHV0XCIgZGVmYXVsdENoZWNrZWQgb25DaGFuZ2U9eyhlKT0+dG9nZ2xlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWN0aXZlXCIgIGNsYXNzTmFtZT1cInRvZ2dsZXJfX2xhYmVsXCI+TXkgSG9tZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWN0aXZpdHlcIiBpZD1cImluYWN0aXZlXCIgdmFsdWU9XCJvdGhlckxpc3RpbmdzXCIgY2xhc3NOYW1lPVwidG9nZ2xlcl9faW5wdXRcIiBvbkNoYW5nZT17KGUpPT57dG9nZ2xlKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImluYWN0aXZlXCIgY2xhc3NOYW1lPVwidG9nZ2xlcl9fbGFiZWxcIj5PdGhlciBIb21lczwvbGFiZWw+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYzk0YztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDVyZW0gI2YyYzk0YztcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVyX19pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVyX19sYWJlbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjFyZW0gM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVyX19pbnB1dDpjaGVja2VkICsgLnRvZ2dsZXJfX2xhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY4MzUwNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAuMXJlbSAuMDVyZW0gI2YyYzk0YztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC50b2dnbGVyX19pbnB1dDpub3QoOmNoZWNrZWQpICsgLnRvZ2dsZXJfX2xhYmVse1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYzk0YztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVyOyJdfQ== */\n/*@ sourceURL=/Users/kenny/eazyrent/components/Toggler/Toggler.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Toggler);

/***/ }),

/***/ "./components/UserAvatar/UserAvatar.js":
/*!*********************************************!*\
  !*** ./components/UserAvatar/UserAvatar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kenny/eazyrent/components/UserAvatar/UserAvatar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const UserAvatar = () => {
  return __jsx("div", {
    className: "jsx-3925045887" + " " + "user-avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    src: "/img/myAvatar.png",
    alt: "user",
    className: "jsx-3925045887" + " " + "user-avatar__img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }), __jsx("button", {
    onClick: () => {
      alert('I want to change the profile pic');
    },
    className: "jsx-3925045887" + " " + "user-avatar__edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3925045887",
    __self: undefined
  }, ".user-avatar.jsx-3925045887{-webkit-flex:0 0 45%;-ms-flex:0 0 45%;flex:0 0 45%;height:15rem;width:15rem;border-radius:50%;border:none;position:relative;}.user-avatar__img.jsx-3925045887{width:100%;border-radius:inherit;}.user-avatar__edit.jsx-3925045887{position:absolute;right:-.5rem;bottom:2rem;height:3.5rem;width:3.5rem;border-radius:50%;border:none;background:linear-gradient(to right bottom,honeydew,indianred);background:linear-gradient(to right bottom,coral,indigo);cursor:pointer;}.user-avatar__edit.jsx-3925045887:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW5ueS9lYXp5cmVudC9jb21wb25lbnRzL1VzZXJBdmF0YXIvVXNlckF2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNaUIsQUFHc0MsQUFTRixBQUlPLEFBYUwsV0FoQlMsRUFpQjFCLEtBYmlCLGFBQ0QsRUFKaEIsVUFLa0IsUUFmRCxNQWdCQSxPQWZELE1BZ0JNLE1BZkEsWUFnQk4sTUFmQSxNQWdCcUQsTUFmL0Msa0JBQ3RCLHVDQWUrRCx5REFDNUMsZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2tlbm55L2VhenlyZW50L2NvbXBvbmVudHMvVXNlckF2YXRhci9Vc2VyQXZhdGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlckF2YXRhciA9ICgpPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL215QXZhdGFyLnBuZ1wiIGFsdD1cInVzZXJcIiBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhcl9faW1nXCIvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhcl9fZWRpdFwiIG9uQ2xpY2s9eygpPT57YWxlcnQoJ0kgd2FudCB0byBjaGFuZ2UgdGhlIHByb2ZpbGUgcGljJyl9fT48L2J1dHRvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLnVzZXItYXZhdGFye1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIDQ1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWF2YXRhcl9faW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC51c2VyLWF2YXRhcl9fZWRpdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCBob25leWRldywgaW5kaWFucmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIGNvcmFsLCBpbmRpZ28pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAudXNlci1hdmF0YXJfX2VkaXQ6Zm9jdXN7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBdmF0YXI7XG4iXX0= */\n/*@ sourceURL=/Users/kenny/eazyrent/components/UserAvatar/UserAvatar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserAvatar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/listings.js":
/*!***************************!*\
  !*** ./pages/listings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Dashboard/Dashboard */ "./components/Dashboard/Dashboard.js");
var _jsxFileName = "/Users/kenny/eazyrent/pages/listings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const listings = ({
  users
}) => {
  let userListings = [],
      otherListings = [];
  const {
    0: toggleStatus,
    1: toggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('userListings');
  const {
    0: testUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('abgfigu143668');

  for (const user in users) {
    if (user === testUser) {
      userListings = users[testUser].listings;
    } else {
      otherListings = users[user].listings;
    }

    ;
  }

  return __jsx(_components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Listings - EazyRent",
    route: "listings",
    toggle: toggle,
    toggleStatus: toggleStatus,
    listings: toggleStatus === 'userListings' ? userListings : otherListings,
    user: testUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  });
};

listings.getInitialProps = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3004/users');
  const data = await res.json();
  return {
    users: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (listings);

/***/ }),

/***/ "./types/types.js":
/*!************************!*\
  !*** ./types/types.js ***!
  \************************/
/*! exports provided: Bank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bank", function() { return Bank; });
class Bank {
  constructor(id, name, account, type, bvn, status) {
    this.id = id;
    this.name = name;
    this.account = account;
    this.type = type;
    this.bvn = bvn;
    this.status = status;
  }

}

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/listings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kenny/eazyrent/pages/listings.js */"./pages/listings.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=listings.js.map