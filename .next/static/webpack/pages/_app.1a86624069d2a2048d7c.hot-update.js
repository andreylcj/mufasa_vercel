webpackHotUpdate_N_E("pages/_app",{

/***/ "./assets/utils/fetchData.js":
/*!***********************************!*\
  !*** ./assets/utils/fetchData.js ***!
  \***********************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var baseURL = process.env.BASE_URL;
var getData = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'GET',
              headers: {
                'Authorization': token
              }
            });

          case 3:
            res = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'GET'
            });

          case 8:
            res = _context.sent;

          case 9:
            _context.next = 11;
            return res.json();

          case 11:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var postData = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, post, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 6;
              break;
            }

            _context2.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(post)
            });

          case 3:
            res = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
            });

          case 8:
            res = _context2.sent;

          case 9:
            _context2.next = 11;
            return res.json();

          case 11:
            data = _context2.sent;
            console.log(data);
            return _context2.abrupt("return", data);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postData(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var putData = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url, post, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!token) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(post)
            });

          case 3:
            res = _context3.sent;
            _context3.next = 9;
            break;

          case 6:
            _context3.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
            });

          case 8:
            res = _context3.sent;

          case 9:
            _context3.next = 11;
            return res.json();

          case 11:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function putData(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var patchData = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(url, post, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!token) {
              _context4.next = 6;
              break;
            }

            _context4.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(post)
            });

          case 3:
            res = _context4.sent;
            _context4.next = 9;
            break;

          case 6:
            _context4.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
            });

          case 8:
            res = _context4.sent;

          case 9:
            _context4.next = 11;
            return res.json();

          case 11:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function patchData(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteData = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(url, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!token) {
              _context5.next = 6;
              break;
            }

            _context5.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              }
            });

          case 3:
            res = _context5.sent;
            _context5.next = 9;
            break;

          case 6:
            _context5.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 8:
            res = _context5.sent;

          case 9:
            _context5.next = 11;
            return res.json();

          case 11:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteData(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./db.json":
false,

/***/ "./layout/Layout.js":
/*!**************************!*\
  !*** ./layout/Layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\layout\\Layout.js";


function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./assets/styles/global.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./assets/styles/global.css ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{\r\n    --morant_letter_red: #ff3859;\r\n    --gold: #ffd700;\r\n    --beauty_blue: #00d4ff;\r\n    --short_transition: all linear 0.1s;\r\n    --silver: #c0c0c0;\r\n    --fontAwe: \"Font Awesome 5 Free\"; \r\n    --ocean_blue: #33b3e4;\r\n    --icon_category_color: #ef345f;\r\n    --back_input: #f2f0f7;\r\n    --element_input: #c0bbcd;\r\n    --soft_purple_back: #f9f7fc;\r\n    --purple_text: rgb(41, 23, 77);\r\n    --shadow_glow_effect: 0 0 10px 2px;\r\n    --shadow-relief-effect: inset 5px 5px 5px rgba(0,0,0,0.2),\r\n                            inset -5px -5px 15px rgba(255,255,255,0.1),\r\n                            5px 5px 15px rgba(0,0,0,0.3),\r\n                            -5px -5px 15px rgba(255,255,255,0.1);\r\n}", "",{"version":3,"sources":["webpack://assets/styles/global.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,eAAe;IACf,sBAAsB;IACtB,mCAAmC;IACnC,iBAAiB;IACjB,gCAAgC;IAChC,qBAAqB;IACrB,8BAA8B;IAC9B,qBAAqB;IACrB,wBAAwB;IACxB,2BAA2B;IAC3B,8BAA8B;IAC9B,kCAAkC;IAClC;;;gEAG4D;AAChE","sourcesContent":[":root{\r\n    --morant_letter_red: #ff3859;\r\n    --gold: #ffd700;\r\n    --beauty_blue: #00d4ff;\r\n    --short_transition: all linear 0.1s;\r\n    --silver: #c0c0c0;\r\n    --fontAwe: \"Font Awesome 5 Free\"; \r\n    --ocean_blue: #33b3e4;\r\n    --icon_category_color: #ef345f;\r\n    --back_input: #f2f0f7;\r\n    --element_input: #c0bbcd;\r\n    --soft_purple_back: #f9f7fc;\r\n    --purple_text: rgb(41, 23, 77);\r\n    --shadow_glow_effect: 0 0 10px 2px;\r\n    --shadow-relief-effect: inset 5px 5px 5px rgba(0,0,0,0.2),\r\n                            inset -5px -5px 15px rgba(255,255,255,0.1),\r\n                            5px 5px 15px rgba(0,0,0,0.3),\r\n                            -5px -5px 15px rgba(255,255,255,0.1);\r\n}\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/global.css */ "./assets/styles/global.css");
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");



var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__["DataProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sections/BendHeader/index.js":
false,

/***/ "./sections/Header/index.js":
false,

/***/ "./snnipets/Modal/index.js":
false,

/***/ "./snnipets/Notify/index.js":
false,

/***/ "./snnipets/Toast/index.js":
false,

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var ACTION = {
  //AUTH
  AUTH: 'AUTH',
  // INITIAL_STATE
  INITIAL_STATE: 'INITIAL_STATE',
  // LOADING REGISTER AND LOGIN ========================================================
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  // UPDATE USER DATA ========================================================
  UPDATE_USER_DATA: 'UPDATE_USER_DATA' //

};
/* harmony default export */ __webpack_exports__["default"] = (ACTION);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, initialState, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/utils/fetchData */ "./assets/utils/fetchData.js");




var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\store\\GlobalState.js",
    _this = undefined,
    _s = $RefreshSig$();





var DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
var initialState = {
  auth: {},
  loading: false,
  userData: {
    email: '',
    password: ''
  }
};
var DataProvider = function DataProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var firstLogin, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('ok');
            firstLogin = localStorage.getItem('firstLogin');

            if (!firstLogin) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return fetch('http://localhost:3000/api/auth/accessToken', {
              method: 'GET'
            });

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;
            dispatch({
              type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["default"].AUTH,
              payload: {
                token: data.accessToken,
                user: data.user
              }
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(DataProvider, "bgCdjuTOmPdSBRwTap80EFd9Y3U=");

_c = DataProvider;

var _c;

$RefreshReg$(_c, "DataProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/InitialState.js":
false,

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./store/GlobalState.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var reducers = function reducers(state, action) {
  var draftState = Object.assign({}, state);

  switch (action.type) {
    // AUTH
    case _Actions__WEBPACK_IMPORTED_MODULE_1__["default"].AUTH:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        auth: action.payload
      });
    // INITIAL STATE

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["default"].INITIAL_STATE:
      return _GlobalState__WEBPACK_IMPORTED_MODULE_2__["initialState"];
    //loading Register And Login ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["default"].START_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: true
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["default"].END_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: false
      });
    //Update user data ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_USER_DATA:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        userData: _objectSpread(_objectSpread({}, draftState.userData), action.payload)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducers);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvUmVkdWNlcnMuanMiXSwibmFtZXMiOlsiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1VSTCIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJkYXRhIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicHV0RGF0YSIsInBhdGNoRGF0YSIsImRlbGV0ZURhdGEiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQUNUSU9OIiwiQVVUSCIsIklOSVRJQUxfU1RBVEUiLCJTVEFSVF9MT0FESU5HIiwiRU5EX0xPQURJTkciLCJVUERBVEVfVVNFUl9EQVRBIiwiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiYXV0aCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJEYXRhUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwicGF5bG9hZCIsImFjY2Vzc1Rva2VuIiwidXNlciIsImFjdGlvbiIsImRyYWZ0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQTVCO0FBRU8sSUFBTUMsT0FBTztBQUFBLDhMQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRWZBLEtBRmU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHSEMsS0FBSyxXQUFJUCxPQUFKLFNBQWNLLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsS0FEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxpQ0FBaUJIO0FBRFo7QUFGeUIsYUFBckIsQ0FIRjs7QUFBQTtBQUdmSSxlQUhlO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBVUhILEtBQUssV0FBSVAsT0FBSixTQUFjSyxHQUFkLEdBQXFCO0FBQ2xDRyxvQkFBTSxFQUFFO0FBRDBCLGFBQXJCLENBVkY7O0FBQUE7QUFVZkUsZUFWZTs7QUFBQTtBQUFBO0FBQUEsbUJBZUFBLEdBQUcsQ0FBQ0MsSUFBSixFQWZBOztBQUFBO0FBZWJDLGdCQWZhO0FBQUEsNkNBZ0JaQSxJQWhCWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQUixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7QUFtQkEsSUFBTVMsUUFBUTtBQUFBLCtMQUFHLGtCQUFPUixHQUFQLEVBQVlTLElBQVosRUFBa0JSLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVoQkEsS0FGZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHSkMsS0FBSyxXQUFJUCxPQUFKLFNBQWNLLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsTUFEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlosZUFGeUI7QUFNbENTLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTjRCLGFBQXJCLENBSEQ7O0FBQUE7QUFHaEJKLGVBSGdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBWUpILEtBQUssV0FBSVAsT0FBSixTQUFjSyxHQUFkLEdBQXFCO0FBQ2xDRyxvQkFBTSxFQUFFLE1BRDBCO0FBRWxDQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFgsZUFGeUI7QUFLbENNLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTDRCLGFBQXJCLENBWkQ7O0FBQUE7QUFZaEJKLGVBWmdCOztBQUFBO0FBQUE7QUFBQSxtQkFvQkRBLEdBQUcsQ0FBQ0MsSUFBSixFQXBCQzs7QUFBQTtBQW9CZEMsZ0JBcEJjO0FBcUJwQk0sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBckJvQiw4Q0FzQmJBLElBdEJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJDLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDtBQXlCQSxJQUFNTyxPQUFPO0FBQUEsK0xBQUcsa0JBQU9mLEdBQVAsRUFBWVMsSUFBWixFQUFrQlIsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR2ZBLEtBSGU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJSEMsS0FBSyxXQUFJUCxPQUFKLFNBQWNLLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsS0FEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlosZUFGeUI7QUFNbENTLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTjRCLGFBQXJCLENBSkY7O0FBQUE7QUFJZkosZUFKZTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQWFISCxLQUFLLFdBQUlQLE9BQUosU0FBY0ssR0FBZCxHQUFxQjtBQUNsQ0csb0JBQU0sRUFBRSxLQUQwQjtBQUVsQ0MscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRnlCO0FBS2xDTSxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZjtBQUw0QixhQUFyQixDQWJGOztBQUFBO0FBYWZKLGVBYmU7O0FBQUE7QUFBQTtBQUFBLG1CQXNCQUEsR0FBRyxDQUFDQyxJQUFKLEVBdEJBOztBQUFBO0FBc0JiQyxnQkF0QmE7QUFBQSw4Q0F1QlpBLElBdkJZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBRLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjtBQTBCQSxJQUFNQyxTQUFTO0FBQUEsK0xBQUcsa0JBQU9oQixHQUFQLEVBQVlTLElBQVosRUFBa0JSLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdqQkEsS0FIaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJTEMsS0FBSyxXQUFJUCxPQUFKLFNBQWNLLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsT0FEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlosZUFGeUI7QUFNbENTLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTjRCLGFBQXJCLENBSkE7O0FBQUE7QUFJakJKLGVBSmlCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBYUxILEtBQUssV0FBSVAsT0FBSixTQUFjSyxHQUFkLEdBQXFCO0FBQ2xDRyxvQkFBTSxFQUFFLE9BRDBCO0FBRWxDQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFgsZUFGeUI7QUFLbENNLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTDRCLGFBQXJCLENBYkE7O0FBQUE7QUFhakJKLGVBYmlCOztBQUFBO0FBQUE7QUFBQSxtQkFzQkZBLEdBQUcsQ0FBQ0MsSUFBSixFQXRCRTs7QUFBQTtBQXNCZkMsZ0JBdEJlO0FBQUEsOENBdUJkQSxJQXZCYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUUyxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7QUEwQkEsSUFBTUMsVUFBVTtBQUFBLCtMQUFHLGtCQUFPakIsR0FBUCxFQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdsQkEsS0FIa0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJTkMsS0FBSyxXQUFJUCxPQUFKLFNBQWNLLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsUUFEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlo7QUFGeUIsYUFBckIsQ0FKQzs7QUFBQTtBQUlsQkksZUFKa0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxtQkFZTkgsS0FBSyxXQUFJUCxPQUFKLFNBQWNLLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsUUFEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0I7QUFEWDtBQUZ5QixhQUFyQixDQVpDOztBQUFBO0FBWWxCQyxlQVprQjs7QUFBQTtBQUFBO0FBQUEsbUJBb0JIQSxHQUFHLENBQUNDLElBQUosRUFwQkc7O0FBQUE7QUFvQmhCQyxnQkFwQmdCO0FBQUEsOENBcUJmQSxJQXJCZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWVSxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdQOztBQUVBLFNBQVNDLE1BQVQsT0FBOEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDMUIsc0JBQ0k7QUFBQSxjQUNLQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztLQU5RRCxNO0FBUU1BLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RCw4QkFBOEIsUUFBUyw4RUFBOEU7QUFDckg7QUFDQSw4QkFBOEIsUUFBUyxTQUFTLHFDQUFxQyx3QkFBd0IsK0JBQStCLDRDQUE0QywwQkFBMEIsMkNBQTJDLCtCQUErQix1Q0FBdUMsOEJBQThCLGlDQUFpQyxvQ0FBb0MsdUNBQXVDLDJDQUEyQywrUUFBK1EsS0FBSyxPQUFPLHlGQUF5RixZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsT0FBTyxnQ0FBZ0MscUNBQXFDLHdCQUF3QiwrQkFBK0IsNENBQTRDLDBCQUEwQiwyQ0FBMkMsK0JBQStCLHVDQUF1Qyw4QkFBOEIsaUNBQWlDLG9DQUFvQyx1Q0FBdUMsMkNBQTJDLCtRQUErUSxLQUFLLHFGQUFxRixtQkFBbUI7QUFDcDREO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNyQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQWtDLGVBQU8sRUFBQztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSSxxRUFBQywrREFBRDtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQUEsK0JBQ0kscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBLGtCQURKO0FBY0g7O0tBZlFGLEs7QUFpQk1BLG9FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUEsa0RBQU1HLE1BQU0sR0FBRztBQUVYO0FBQ0FDLE1BQUksRUFDQSxNQUpPO0FBTVg7QUFDQUMsZUFBYSxFQUNULGVBUk87QUFVWDtBQUNBQyxlQUFhLEVBQ1QsZUFaTztBQWFYQyxhQUFXLEVBQ1AsYUFkTztBQWdCWDtBQUNBQyxrQkFBZ0IsRUFDWixrQkFsQk8sQ0FvQlg7O0FBcEJXLENBQWY7QUF3QmVMLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTU0sV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLE1BQUksRUFBRSxFQURrQjtBQUl4QkMsU0FBTyxFQUFFLEtBSmU7QUFLeEJDLFVBQVEsRUFBRTtBQUNOQyxTQUFLLEVBQUUsRUFERDtBQUVOQyxZQUFRLEVBQUU7QUFGSjtBQUxjLENBQXJCO0FBV0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmbEIsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUVoQm1CLHdEQUFVLENBQUNDLGlEQUFELEVBQVdSLFlBQVgsQ0FGTTtBQUFBLE1BRW5DUyxLQUZtQztBQUFBLE1BRTVCQyxRQUY0Qjs7QUFJMUNDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNON0IsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDTTZCLHNCQUZBLEdBRWFDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQUZiOztBQUFBLGlCQUdGRixVQUhFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSWdCekMsS0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2xFQyxvQkFBTSxFQUFFO0FBRDBELGFBQS9DLENBSnJCOztBQUFBO0FBSUlFLGVBSko7QUFBQTtBQUFBLG1CQU9pQkEsR0FBRyxDQUFDQyxJQUFKLEVBUGpCOztBQUFBO0FBT0lDLGdCQVBKO0FBU0ZrQyxvQkFBUSxDQUFDO0FBQ0xLLGtCQUFJLEVBQUV2QixzREFBTSxDQUFDQyxJQURSO0FBRUx1QixxQkFBTyxFQUFFO0FBQ0w5QyxxQkFBSyxFQUFFTSxJQUFJLENBQUN5QyxXQURQO0FBRUxDLG9CQUFJLEVBQUUxQyxJQUFJLENBQUMwQztBQUZOO0FBRkosYUFBRCxDQUFSOztBQVRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFpQk4sRUFqQk0sQ0FBVDtBQW1CQSxzQkFDSSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUUsQ0FBQ1QsS0FBRCxFQUFRQyxRQUFSLENBQTdCO0FBQUEsY0FDS3RCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0E3Qk07O0dBQU1rQixZOztLQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYjtBQUNBOztBQUVBLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUVUsTUFBUixFQUFtQjtBQUVoQyxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JiLEtBQWxCLENBQW5COztBQUVBLFVBQVFVLE1BQU0sQ0FBQ0osSUFBZjtBQUVJO0FBQ0EsU0FBS3ZCLGdEQUFNLENBQUNDLElBQVo7QUFDSSw2Q0FDTzJCLFVBRFA7QUFFSW5CLFlBQUksRUFBRWtCLE1BQU0sQ0FBQ0g7QUFGakI7QUFLSjs7QUFDQSxTQUFLeEIsZ0RBQU0sQ0FBQ0UsYUFBWjtBQUNJLGFBQU9NLHlEQUFQO0FBRUo7O0FBQ0EsU0FBS1IsZ0RBQU0sQ0FBQ0csYUFBWjtBQUNJLDZDQUNPeUIsVUFEUDtBQUVJbEIsZUFBTyxFQUFFO0FBRmI7O0FBSUosU0FBS1YsZ0RBQU0sQ0FBQ0ksV0FBWjtBQUNJLDZDQUNPd0IsVUFEUDtBQUVJbEIsZUFBTyxFQUFFO0FBRmI7QUFLSjs7QUFDQSxTQUFLVixnREFBTSxDQUFDSyxnQkFBWjtBQUNJLDZDQUNPdUIsVUFEUDtBQUVJakIsZ0JBQVEsa0NBQ0RpQixVQUFVLENBQUNqQixRQURWLEdBRURnQixNQUFNLENBQUNILE9BRk47QUFGWjs7QUFRSjtBQUNJLGFBQU9QLEtBQVA7QUFwQ1I7QUFzQ0gsQ0ExQ0Q7O0FBNENlRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFhODY2MjQwNjlkMmEyMDQ4ZDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcblxyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXHJcXG4gICAgLS1tb3JhbnRfbGV0dGVyX3JlZDogI2ZmMzg1OTtcXHJcXG4gICAgLS1nb2xkOiAjZmZkNzAwO1xcclxcbiAgICAtLWJlYXV0eV9ibHVlOiAjMDBkNGZmO1xcclxcbiAgICAtLXNob3J0X3RyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG4gICAgLS1zaWx2ZXI6ICNjMGMwYzA7XFxyXFxuICAgIC0tZm9udEF3ZTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiOyBcXHJcXG4gICAgLS1vY2Vhbl9ibHVlOiAjMzNiM2U0O1xcclxcbiAgICAtLWljb25fY2F0ZWdvcnlfY29sb3I6ICNlZjM0NWY7XFxyXFxuICAgIC0tYmFja19pbnB1dDogI2YyZjBmNztcXHJcXG4gICAgLS1lbGVtZW50X2lucHV0OiAjYzBiYmNkO1xcclxcbiAgICAtLXNvZnRfcHVycGxlX2JhY2s6ICNmOWY3ZmM7XFxyXFxuICAgIC0tcHVycGxlX3RleHQ6IHJnYig0MSwgMjMsIDc3KTtcXHJcXG4gICAgLS1zaGFkb3dfZ2xvd19lZmZlY3Q6IDAgMCAxMHB4IDJweDtcXHJcXG4gICAgLS1zaGFkb3ctcmVsaWVmLWVmZmVjdDogaW5zZXQgNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjIpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCAtNXB4IC01cHggMTVweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVweCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC01cHggLTVweCAxNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQzs7O2dFQUc0RDtBQUNoRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXHJcXG4gICAgLS1tb3JhbnRfbGV0dGVyX3JlZDogI2ZmMzg1OTtcXHJcXG4gICAgLS1nb2xkOiAjZmZkNzAwO1xcclxcbiAgICAtLWJlYXV0eV9ibHVlOiAjMDBkNGZmO1xcclxcbiAgICAtLXNob3J0X3RyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4xcztcXHJcXG4gICAgLS1zaWx2ZXI6ICNjMGMwYzA7XFxyXFxuICAgIC0tZm9udEF3ZTogXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiOyBcXHJcXG4gICAgLS1vY2Vhbl9ibHVlOiAjMzNiM2U0O1xcclxcbiAgICAtLWljb25fY2F0ZWdvcnlfY29sb3I6ICNlZjM0NWY7XFxyXFxuICAgIC0tYmFja19pbnB1dDogI2YyZjBmNztcXHJcXG4gICAgLS1lbGVtZW50X2lucHV0OiAjYzBiYmNkO1xcclxcbiAgICAtLXNvZnRfcHVycGxlX2JhY2s6ICNmOWY3ZmM7XFxyXFxuICAgIC0tcHVycGxlX3RleHQ6IHJnYig0MSwgMjMsIDc3KTtcXHJcXG4gICAgLS1zaGFkb3dfZ2xvd19lZmZlY3Q6IDAgMCAxMHB4IDJweDtcXHJcXG4gICAgLS1zaGFkb3ctcmVsaWVmLWVmZmVjdDogaW5zZXQgNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjIpLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNldCAtNXB4IC01cHggMTVweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVweCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyksXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC01cHggLTVweCAxNXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxEYXRhUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0RhdGFQcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJjb25zdCBBQ1RJT04gPSB7XHJcblxyXG4gICAgLy9BVVRIXHJcbiAgICBBVVRIOlxyXG4gICAgICAgICdBVVRIJyxcclxuXHJcbiAgICAvLyBJTklUSUFMX1NUQVRFXHJcbiAgICBJTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICdJTklUSUFMX1NUQVRFJyxcclxuXHJcbiAgICAvLyBMT0FESU5HIFJFR0lTVEVSIEFORCBMT0dJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU1RBUlRfTE9BRElORzpcclxuICAgICAgICAnU1RBUlRfTE9BRElORycsXHJcbiAgICBFTkRfTE9BRElORzpcclxuICAgICAgICAnRU5EX0xPQURJTkcnLFxyXG5cclxuICAgIC8vIFVQREFURSBVU0VSIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgJ1VQREFURV9VU0VSX0RBVEEnLFxyXG5cclxuICAgIC8vXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBQ1RJT05cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnXHJcbmltcG9ydCBBQ1RJT04gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYXV0aDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgICAgICAgaWYgKGZpcnN0TG9naW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9hY2Nlc3NUb2tlbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQUNUSU9OIGZyb20gJy4vQWN0aW9ucydcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSdcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBjb25zdCBkcmFmdFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpXHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICAvLyBBVVRIXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQVVUSDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElOSVRJQUwgU1RBVEVcclxuICAgICAgICBjYXNlIEFDVElPTi5JTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXHJcblxyXG4gICAgICAgIC8vbG9hZGluZyBSZWdpc3RlciBBbmQgTG9naW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uU1RBUlRfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVElPTi5FTkRfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1VwZGF0ZSB1c2VyIGRhdGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUudXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==