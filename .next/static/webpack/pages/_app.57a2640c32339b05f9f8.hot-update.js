webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sections_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/Header */ "./sections/Header/index.js");
/* harmony import */ var _snnipets_Notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snnipets/Notify */ "./snnipets/Notify/index.js");
/* harmony import */ var _snnipets_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../snnipets/Modal */ "./snnipets/Modal/index.js");
/* harmony import */ var _sections_BendHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/BendHeader */ "./sections/BendHeader/index.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");


var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\layout\\Layout.js",
    _s = $RefreshSig$();









function Layout(_ref) {
  _s();

  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var pathName = router.pathname; // eslint-disable-next-line no-unused-vars

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_7__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var auth = state.auth; //useEffect(() => {
  //if (Object.keys(auth).length !== 0 && !auth.user.admin && (pathName.indexOf('bend-admin') !== -1)) {
  //  router.push('/bend-admin/denied-access');
  //}
  // }, [pathName, auth]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [// exclude header from page denied-access ========================
    pathName.indexOf('denied-access') !== -1 ? '' : pathName.indexOf('bend-admin') !== -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_BendHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }, this), // notify only in bend ========================
    pathName.indexOf('bend-admin') !== -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Notify__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "text-center my-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(Layout, "hdki1NHcnh0bhHBNbSOqpCz/atE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxRQUF4QixDQUY0QixDQUk1Qjs7QUFKNEIsb0JBS0ZDLHdEQUFVLENBQUNDLDhEQUFELENBTFI7QUFBQSxNQUtyQkMsS0FMcUI7QUFBQSxNQUtkQyxRQUxjOztBQUFBLE1BTXBCQyxJQU5vQixHQU1YRixLQU5XLENBTXBCRSxJQU5vQixFQVE1QjtBQUNFO0FBQ0E7QUFDQTtBQUNIOztBQUVDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSxlQUdZO0FBQ0NOLFlBQVEsQ0FBQ08sT0FBVCxDQUFpQixlQUFqQixNQUFzQyxDQUFDLENBQXhDLEdBRUksRUFGSixHQUdPUCxRQUFRLENBQUNPLE9BQVQsQ0FBaUIsWUFBakIsTUFBbUMsQ0FBQyxDQUFyQyxnQkFDRixxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREUsZ0JBR0YscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZoQixFQWVZO0FBQ0NQLFlBQVEsQ0FBQ08sT0FBVCxDQUFpQixZQUFqQixNQUFtQyxDQUFDLENBQXJDLGdCQUVJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixHQUlJLEVBcEJoQixlQXdCRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGLGVBMEJFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQ0dWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQ0Q7O0dBakRRRCxNO1VBQ1FHLHFEOzs7S0FEUkgsTTtBQW1ETUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41N2EyNjQwYzMyMzM5YjA1ZjlmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NlY3Rpb25zL0hlYWRlcic7XHJcbmltcG9ydCBOb3RpZnkgZnJvbSAnLi4vc25uaXBldHMvTm90aWZ5JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3NubmlwZXRzL01vZGFsJztcclxuaW1wb3J0IEJlbmRIZWFkZXIgZnJvbSAnLi4vc2VjdGlvbnMvQmVuZEhlYWRlcic7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGhOYW1lID0gcm91dGVyLnBhdGhuYW1lO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgYXV0aCB9ID0gc3RhdGU7XHJcblxyXG4gIC8vdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCAmJiAhYXV0aC51c2VyLmFkbWluICYmIChwYXRoTmFtZS5pbmRleE9mKCdiZW5kLWFkbWluJykgIT09IC0xKSkge1xyXG4gICAgLy8gIHJvdXRlci5wdXNoKCcvYmVuZC1hZG1pbi9kZW5pZWQtYWNjZXNzJyk7XHJcbiAgICAvL31cclxuIC8vIH0sIFtwYXRoTmFtZSwgYXV0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4Y2x1ZGUgaGVhZGVyIGZyb20gcGFnZSBkZW5pZWQtYWNjZXNzID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgKHBhdGhOYW1lLmluZGV4T2YoJ2RlbmllZC1hY2Nlc3MnKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICkgOiAocGF0aE5hbWUuaW5kZXhPZignYmVuZC1hZG1pbicpICE9PSAtMSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJlbmRIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gbm90aWZ5IG9ubHkgaW4gYmVuZCA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIChwYXRoTmFtZS5pbmRleE9mKCdiZW5kLWFkbWluJykgIT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICA8TW9kYWwgLz5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTRcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9