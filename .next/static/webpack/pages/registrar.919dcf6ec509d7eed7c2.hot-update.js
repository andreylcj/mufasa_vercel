webpackHotUpdate_N_E("pages/registrar",{

/***/ "./snnipets/Loading.js":
/*!*****************************!*\
  !*** ./snnipets/Loading.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");



var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\snnipets\\Loading.js",
    _this = undefined;







var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
    state = _useContext[0],
    dispatch = _useContext[1];

var auth = state.auth;

var handleLogout = function handleLogout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('refreshToken', {
    path: '/api/auth/token'
  });
  localStorage.removeItem('firstLogin');
  dispatch({
    type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["default"].AUTH,
    payload: {}
  });
};

var loggedRouter = function loggedRouter() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "m-1",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "LOGADO"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleLogout,
      children: "Logout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
};

function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "request-loading",
    children: [Object.keys(auth).length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/entrar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Entrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 50
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/registrar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Registrar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 53
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }, this)]
    }, void 0, true) : loggedRouter(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "fa fa-spinner fa-spin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), " Carregando..."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

$RefreshReg$(_c, "Loading");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc25uaXBldHMvTG9hZGluZy5qcyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsImhhbmRsZUxvZ291dCIsIkNvb2tpZSIsInJlbW92ZSIsInBhdGgiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidHlwZSIsIkFDVElPTiIsIkFVVEgiLCJwYXlsb2FkIiwibG9nZ2VkUm91dGVyIiwiTG9hZGluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2tCQUUwQkEsd0RBQVUsQ0FBQ0MsOERBQUQsQztJQUE3QkMsSztJQUFPQyxROztJQUNOQyxJLEdBQVNGLEssQ0FBVEUsSTs7QUFFUixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCQyxrREFBTSxDQUFDQyxNQUFQLENBQWMsY0FBZCxFQUE4QjtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUE5QjtBQUNBQyxjQUFZLENBQUNDLFVBQWIsQ0FBd0IsWUFBeEI7QUFDQVAsVUFBUSxDQUFDO0FBQ0xRLFFBQUksRUFBRUMsc0RBQU0sQ0FBQ0MsSUFEUjtBQUVMQyxXQUFPLEVBQUU7QUFGSixHQUFELENBQVI7QUFJSCxDQVBEOztBQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFRLGFBQU8sRUFBRVYsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBUEQ7O0FBU0EsU0FBU1csT0FBVCxHQUFtQjtBQUNmLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsZUFFUUMsTUFBTSxDQUFDQyxJQUFQLENBQVlkLElBQVosRUFBa0JlLE1BQWxCLEtBQTZCLENBQTdCLGdCQUVRO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQUEsK0JBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBLG9CQUZSLEdBT1FKLFlBQVksRUFUNUIsZUFZSTtBQUFHLGVBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7S0FqQlFDLE87QUFtQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdHJhci45MTlkY2Y2ZWM1MDlkN2VlZDdjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IEFDVElPTiBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJztcclxuXHJcbmNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbmNvbnN0IHsgYXV0aCB9ID0gc3RhdGVcclxuXHJcbmNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIENvb2tpZS5yZW1vdmUoJ3JlZnJlc2hUb2tlbicsIHsgcGF0aDogJy9hcGkvYXV0aC90b2tlbicgfSlcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmaXJzdExvZ2luJylcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGxvZ2dlZFJvdXRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTFcIj5cclxuICAgICAgICAgICAgPHA+TE9HQURPPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdC1sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbnRyYXJcIj48YT5FbnRyYXI8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXJcIj48YT5SZWdpc3RyYXI8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRSb3V0ZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIiAvPiBDYXJyZWdhbmRvLi4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==