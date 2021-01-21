webpackHotUpdate_N_E("pages/bend-admin/users/edit-user/[id]",{

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

  var auth = state.auth;
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
              type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["default"].AUTH,
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
  })), []);
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
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvR2xvYmFsU3RhdGUuanMiXSwibmFtZXMiOlsiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiYXV0aCIsIm5vdGlmeSIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VycyIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImZpcnN0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0RGF0YSIsInJlcyIsInR5cGUiLCJBQ1RJT04iLCJBVVRIIiwicGF5bG9hZCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwicm9sZSIsInRoZW4iLCJlcnIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRUEsSUFBTUMsWUFBWSxHQUFHO0FBQ3hCQyxNQUFJLEVBQUUsRUFEa0I7QUFJeEJDLFFBQU0sRUFBRSxFQUpnQjtBQU94QkMsU0FBTyxFQUFFLEtBUGU7QUFReEJDLFVBQVEsRUFBRTtBQUNOQyxTQUFLLEVBQUUsRUFERDtBQUVOQyxZQUFRLEVBQUU7QUFGSixHQVJjO0FBWXhCQyxPQUFLLEVBQUU7QUFaaUIsQ0FBckI7QUFpQkEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBRWhCQyx3REFBVSxDQUFDQyxpREFBRCxFQUFXWCxZQUFYLENBRk07QUFBQSxNQUVuQ1ksS0FGbUM7QUFBQSxNQUU1QkMsUUFGNEI7O0FBQUEsTUFJbENaLElBSmtDLEdBSXpCVyxLQUp5QixDQUlsQ1gsSUFKa0M7QUFNMUNhLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBQyxzQkFEQSxHQUNhQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsQ0FEYjs7QUFBQSxpQkFFRkYsVUFGRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUdnQkcsdUVBQU8sQ0FBQyxzQkFBRCxDQUh2Qjs7QUFBQTtBQUdJQyxlQUhKO0FBS0ZOLG9CQUFRLENBQUM7QUFDTE8sa0JBQUksRUFBRUMsc0RBQU0sQ0FBQ0MsSUFEUjtBQUVMQyxxQkFBTyxFQUFFO0FBQ0xDLHFCQUFLLEVBQUVMLEdBQUcsQ0FBQ00sV0FETjtBQUVMQyxvQkFBSSxFQUFFUCxHQUFHLENBQUNPO0FBRkw7QUFGSixhQUFELENBQVI7O0FBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQWFOLEVBYk0sQ0FBVDtBQWVBWix5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ04sZ0JBQUliLElBQUksQ0FBQ3VCLEtBQVQsRUFBZ0I7QUFDWixrQkFBSXZCLElBQUksQ0FBQ3lCLElBQUwsQ0FBVUMsSUFBVixLQUFtQixPQUFuQixJQUE4QjFCLElBQUksQ0FBQ3lCLElBQUwsQ0FBVUMsSUFBVixLQUFtQixjQUFyRCxFQUFxRTtBQUNqRVQsdUZBQU8sQ0FBQyxVQUFELEVBQWFqQixJQUFJLENBQUN1QixLQUFsQixDQUFQLENBQ0tJLElBREwsQ0FDVSxVQUFBVCxHQUFHLEVBQUk7QUFDVCxzQkFBSUEsR0FBRyxDQUFDVSxHQUFSLEVBQWEsT0FBT2hCLFFBQVEsQ0FBQztBQUFFTyx3QkFBSSxFQUFFLFFBQVI7QUFBa0JHLDJCQUFPLEVBQUU7QUFBRU8sMkJBQUssRUFBRVgsR0FBRyxDQUFDVTtBQUFiO0FBQTNCLG1CQUFELENBQWY7QUFDYmhCLDBCQUFRLENBQUM7QUFBRU8sd0JBQUksRUFBRSxXQUFSO0FBQXFCRywyQkFBTyxFQUFFSixHQUFHLENBQUNaO0FBQWxDLG1CQUFELENBQVI7QUFDSCxpQkFKTDtBQUtIO0FBQ0osYUFSRCxNQVFPO0FBQ0hNLHNCQUFRLENBQUM7QUFBRU8sb0JBQUksRUFBRSxXQUFSO0FBQXFCRyx1QkFBTyxFQUFFO0FBQTlCLGVBQUQsQ0FBUjtBQUNIOztBQVhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFZTixDQUFDdEIsSUFBSSxDQUFDdUIsS0FBTixDQVpNLENBQVQ7QUFlQSxzQkFDSSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUUsQ0FBQ1osS0FBRCxFQUFRQyxRQUFSLENBQTdCO0FBQUEsY0FDS0o7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQTFDTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iZW5kLWFkbWluL3VzZXJzL2VkaXQtdXNlci9baWRdLjNlNGEzZGM2NjkyZmJmMzg5NzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xyXG5pbXBvcnQgQUNUSU9OIGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGF1dGg6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbm90aWZ5OiB7XHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXNlckRhdGE6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHVzZXJzOiBbXHJcblxyXG4gICAgXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0TG9naW4nKVxyXG4gICAgICAgIGlmIChmaXJzdExvZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERhdGEoJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJylcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTi5BVVRILFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoLnRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyB8fCBhdXRoLnVzZXIucm9sZSA9PT0gJ21hc3RlciBhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGEoJ2FwaS91c2VyJywgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5lcnIgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnMgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW10gfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0aC50b2tlbl0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=