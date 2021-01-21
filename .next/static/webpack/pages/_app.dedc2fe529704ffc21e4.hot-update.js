webpackHotUpdate_N_E("pages/_app",{

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




var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\store\\GlobalState.js",
    _this = undefined,
    _s = $RefreshSig$();





var DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
var initialState = {
  modal: {},
  auth: {},
  notify: {},
  loading: false,
  userData: {
    email: '',
    password: ''
  },
  users: []
};
var DataProvider = function DataProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_4__["default"], initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var auth = state.auth; // AUTH

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var firstLogin, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            firstLogin = localStorage.getItem('firstLogin');

            if (!firstLogin) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["getData"])('api/auth/accessToken');

          case 4:
            res = _context.sent;
            dispatch({
              type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].AUTH,
              payload: {
                token: res.accessToken,
                user: res.user
              }
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []); // USERS

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (auth.token) {
              if (auth.user.role === 'admin' || auth.user.role === 'master admin') {
                Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["getData"])('api/user', auth.token).then(function (res) {
                  if (res.err) return dispatch({
                    type: 'NOTIFY',
                    payload: {
                      error: res.err
                    }
                  });
                  dispatch({
                    type: 'ADD_USERS',
                    payload: res.users
                  });
                });
              }
            } else {
              dispatch({
                type: 'ADD_USERS',
                payload: []
              });
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [auth.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, _this);
};

_s(DataProvider, "GUSXxL/WUElrtHc/X73NyHNRMdw=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvR2xvYmFsU3RhdGUuanMiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibW9kYWwiLCJhdXRoIiwibm90aWZ5IiwibG9hZGluZyIsInVzZXJEYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJzIiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXREYXRhIiwicmVzIiwidHlwZSIsIkFDVElPTiIsIkFVVEgiLCJwYXlsb2FkIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJyb2xlIiwidGhlbiIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLE9BQUssRUFBRSxFQURpQjtBQUl4QkMsTUFBSSxFQUFFLEVBSmtCO0FBT3hCQyxRQUFNLEVBQUUsRUFQZ0I7QUFVeEJDLFNBQU8sRUFBRSxLQVZlO0FBV3hCQyxVQUFRLEVBQUU7QUFDTkMsU0FBSyxFQUFFLEVBREQ7QUFFTkMsWUFBUSxFQUFFO0FBRkosR0FYYztBQWV4QkMsT0FBSyxFQUFFO0FBZmlCLENBQXJCO0FBb0JBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUVoQkMsd0RBQVUsQ0FBQ0MsaURBQUQsRUFBV1osWUFBWCxDQUZNO0FBQUEsTUFFbkNhLEtBRm1DO0FBQUEsTUFFNUJDLFFBRjRCOztBQUFBLE1BSWxDWixJQUprQyxHQUl6QlcsS0FKeUIsQ0FJbENYLElBSmtDLEVBTTFDOztBQUNBYSx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQUMsc0JBREEsR0FDYUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFlBQXJCLENBRGI7O0FBQUEsaUJBRUZGLFVBRkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHZ0JHLHVFQUFPLENBQUMsc0JBQUQsQ0FIdkI7O0FBQUE7QUFHSUMsZUFISjtBQUtGTixvQkFBUSxDQUFDO0FBQ0xPLGtCQUFJLEVBQUVDLHFEQUFNLENBQUNDLElBRFI7QUFFTEMscUJBQU8sRUFBRTtBQUNMQyxxQkFBSyxFQUFFTCxHQUFHLENBQUNNLFdBRE47QUFFTEMsb0JBQUksRUFBRVAsR0FBRyxDQUFDTztBQUZMO0FBRkosYUFBRCxDQUFSOztBQUxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFhTixFQWJNLENBQVQsQ0FQMEMsQ0FzQjFDOztBQUNBWix5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ04sZ0JBQUliLElBQUksQ0FBQ3VCLEtBQVQsRUFBZ0I7QUFDWixrQkFBSXZCLElBQUksQ0FBQ3lCLElBQUwsQ0FBVUMsSUFBVixLQUFtQixPQUFuQixJQUE4QjFCLElBQUksQ0FBQ3lCLElBQUwsQ0FBVUMsSUFBVixLQUFtQixjQUFyRCxFQUFxRTtBQUNqRVQsdUZBQU8sQ0FBQyxVQUFELEVBQWFqQixJQUFJLENBQUN1QixLQUFsQixDQUFQLENBQ0tJLElBREwsQ0FDVSxVQUFBVCxHQUFHLEVBQUk7QUFDVCxzQkFBSUEsR0FBRyxDQUFDVSxHQUFSLEVBQWEsT0FBT2hCLFFBQVEsQ0FBQztBQUFFTyx3QkFBSSxFQUFFLFFBQVI7QUFBa0JHLDJCQUFPLEVBQUU7QUFBRU8sMkJBQUssRUFBRVgsR0FBRyxDQUFDVTtBQUFiO0FBQTNCLG1CQUFELENBQWY7QUFDYmhCLDBCQUFRLENBQUM7QUFBRU8sd0JBQUksRUFBRSxXQUFSO0FBQXFCRywyQkFBTyxFQUFFSixHQUFHLENBQUNaO0FBQWxDLG1CQUFELENBQVI7QUFDSCxpQkFKTDtBQUtIO0FBQ0osYUFSRCxNQVFPO0FBQ0hNLHNCQUFRLENBQUM7QUFBRU8sb0JBQUksRUFBRSxXQUFSO0FBQXFCRyx1QkFBTyxFQUFFO0FBQTlCLGVBQUQsQ0FBUjtBQUNIOztBQVhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFZTixDQUFDdEIsSUFBSSxDQUFDdUIsS0FBTixDQVpNLENBQVQ7QUFlQSxzQkFDSSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUUsQ0FBQ1osS0FBRCxFQUFRQyxRQUFSLENBQTdCO0FBQUEsY0FDS0o7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQTVDTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRlZGMyZmU1Mjk3MDRmZmMyMWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSdcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtb2RhbDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBhdXRoOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG5vdGlmeToge1xyXG5cclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbiAgICB1c2VyczogW1xyXG5cclxuICAgIF0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIC8vIEFVVEhcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvZ2luJylcclxuICAgICAgICBpZiAoZmlyc3RMb2dpbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXREYXRhKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicpXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVzLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlcy51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy8gVVNFUlNcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGgudG9rZW4pIHtcclxuICAgICAgICAgICAgaWYgKGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nIHx8IGF1dGgudXNlci5yb2xlID09PSAnbWFzdGVyIGFkbWluJykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgnYXBpL3VzZXInLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmVyciB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9VU0VSUycsIHBheWxvYWQ6IHJlcy51c2VycyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiBbXSB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRoLnRva2VuXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcblxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==