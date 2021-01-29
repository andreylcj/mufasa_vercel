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

  var auth = state.auth;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.keys(auth).length !== 0 && !auth.user.admin && pathName.indexOf('bend-admin') !== -1) {
      router.push('/bend-admin/denied-access');
    }
  }, [pathName, auth]);
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

_s(Layout, "Fz3el5eepjna53UVrzvY6xNV1kw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0L0xheW91dC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ1c2VyIiwiYWRtaW4iLCJpbmRleE9mIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLFFBQXhCLENBRjRCLENBSTVCOztBQUo0QixvQkFLRkMsd0RBQVUsQ0FBQ0MsOERBQUQsQ0FMUjtBQUFBLE1BS3JCQyxLQUxxQjtBQUFBLE1BS2RDLFFBTGM7O0FBQUEsTUFNcEJDLElBTm9CLEdBTVhGLEtBTlcsQ0FNcEJFLElBTm9CO0FBUTVCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsSUFBWixFQUFrQkksTUFBbEIsS0FBNkIsQ0FBN0IsSUFBa0MsQ0FBQ0osSUFBSSxDQUFDSyxJQUFMLENBQVVDLEtBQTdDLElBQXVEWixRQUFRLENBQUNhLE9BQVQsQ0FBaUIsWUFBakIsTUFBbUMsQ0FBQyxDQUEvRixFQUFtRztBQUNqR2YsWUFBTSxDQUFDZ0IsSUFBUCxDQUFZLDJCQUFaO0FBQ0Q7QUFDSCxHQUpTLEVBSVAsQ0FBQ2QsUUFBRCxFQUFXTSxJQUFYLENBSk8sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSxlQUdZO0FBQ0NOLFlBQVEsQ0FBQ2EsT0FBVCxDQUFpQixlQUFqQixNQUFzQyxDQUFDLENBQXhDLEdBRUksRUFGSixHQUdPYixRQUFRLENBQUNhLE9BQVQsQ0FBaUIsWUFBakIsTUFBbUMsQ0FBQyxDQUFyQyxnQkFDRixxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREUsZ0JBR0YscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZoQixFQWVZO0FBQ0NiLFlBQVEsQ0FBQ2EsT0FBVCxDQUFpQixZQUFqQixNQUFtQyxDQUFDLENBQXJDLGdCQUVJLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixHQUlJLEVBcEJoQixlQXdCRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGLGVBMEJFO0FBQU0sZUFBUyxFQUFDLGtCQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQ0doQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQWpEUUQsTTtVQUNRRyxxRDs7O0tBRFJILE07QUFtRE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMThiZGFlNTA3ZDMzOWI1ZWQ0YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zZWN0aW9ucy9IZWFkZXInO1xyXG5pbXBvcnQgTm90aWZ5IGZyb20gJy4uL3NubmlwZXRzL05vdGlmeSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9zbm5pcGV0cy9Nb2RhbCc7XHJcbmltcG9ydCBCZW5kSGVhZGVyIGZyb20gJy4uL3NlY3Rpb25zL0JlbmRIZWFkZXInO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICBjb25zdCB7IGF1dGggfSA9IHN0YXRlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCAmJiAhYXV0aC51c2VyLmFkbWluICYmIChwYXRoTmFtZS5pbmRleE9mKCdiZW5kLWFkbWluJykgIT09IC0xKSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vZGVuaWVkLWFjY2VzcycpO1xyXG4gICAgfVxyXG4gfSwgW3BhdGhOYW1lLCBhdXRoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhjbHVkZSBoZWFkZXIgZnJvbSBwYWdlIGRlbmllZC1hY2Nlc3MgPT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAocGF0aE5hbWUuaW5kZXhPZignZGVuaWVkLWFjY2VzcycpICE9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgKSA6IChwYXRoTmFtZS5pbmRleE9mKCdiZW5kLWFkbWluJykgIT09IC0xKSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8QmVuZEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgb25seSBpbiBiZW5kID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgKHBhdGhOYW1lLmluZGV4T2YoJ2JlbmQtYWRtaW4nKSAhPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxOb3RpZnkgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgIDxNb2RhbCAvPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=