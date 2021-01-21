webpackHotUpdate_N_E("pages/bend-admin/users",{

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTION, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION", function() { return ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
var ACTION = {
  //NOTIFY
  NOTIFY: 'NOTIFY',
  // AUTH
  AUTH: 'AUTH',
  // INITIAL_STATE
  INITIAL_STATE: 'INITIAL_STATE',
  // LOADING REGISTER AND LOGIN ========================================================
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  // UPDATE USER DATA ========================================================
  UPDATE_USER_DATA: 'UPDATE_USER_DATA',
  //ADD USERS
  ADD_USERS: 'ADD_USERS' //

};
var updateItem = function updateItem(data, id, post, type) {
  var newData = data.map(function (item) {
    return item._id === id ? post : item;
  });
  return {
    type: type,
    payload: newData
  };
};

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
    lineNumber: 64,
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

/***/ }),

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
    // NOTIFY
    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].NOTIFY:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        notify: action.payload
      });
    // ADD USERS

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].ADD_USERS:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        users: action.payload
      });
    // AUTH

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].AUTH:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        auth: action.payload
      });
    // INITIAL STATE

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].INITIAL_STATE:
      return _GlobalState__WEBPACK_IMPORTED_MODULE_2__["initialState"];
    //loading Register And Login ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].START_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: true
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].END_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: false
      });
    //Update user data ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].UPDATE_USER_DATA:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvR2xvYmFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL1JlZHVjZXJzLmpzIl0sIm5hbWVzIjpbIkFDVElPTiIsIk5PVElGWSIsIkFVVEgiLCJJTklUSUFMX1NUQVRFIiwiU1RBUlRfTE9BRElORyIsIkVORF9MT0FESU5HIiwiVVBEQVRFX1VTRVJfREFUQSIsIkFERF9VU0VSUyIsInVwZGF0ZUl0ZW0iLCJkYXRhIiwiaWQiLCJwb3N0IiwidHlwZSIsIm5ld0RhdGEiLCJtYXAiLCJpdGVtIiwiX2lkIiwicGF5bG9hZCIsIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImF1dGgiLCJub3RpZnkiLCJsb2FkaW5nIiwidXNlckRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlcnMiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmaXJzdExvZ2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldERhdGEiLCJyZXMiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwidXNlciIsInJvbGUiLCJ0aGVuIiwiZXJyIiwiZXJyb3IiLCJhY3Rpb24iLCJkcmFmdFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsTUFBTSxHQUFHO0FBRWxCO0FBQ0FDLFFBQU0sRUFDRixRQUpjO0FBTWxCO0FBQ0FDLE1BQUksRUFDQSxNQVJjO0FBVWxCO0FBQ0FDLGVBQWEsRUFDVCxlQVpjO0FBY2xCO0FBQ0FDLGVBQWEsRUFDVCxlQWhCYztBQWlCbEJDLGFBQVcsRUFDUCxhQWxCYztBQW9CbEI7QUFDQUMsa0JBQWdCLEVBQ1osa0JBdEJjO0FBd0JsQjtBQUNBQyxXQUFTLEVBQ0wsV0ExQmMsQ0E0QmxCOztBQTVCa0IsQ0FBZjtBQWdDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQU9DLEVBQVAsRUFBV0MsSUFBWCxFQUFpQkMsSUFBakIsRUFBMEI7QUFDaEQsTUFBTUMsT0FBTyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsV0FBS0EsSUFBSSxDQUFDQyxHQUFMLEtBQWFOLEVBQWIsR0FBa0JDLElBQWxCLEdBQXlCSSxJQUE5QjtBQUFBLEdBQWIsQ0FBaEI7QUFDQSxTQUFRO0FBQUVILFFBQUksRUFBSkEsSUFBRjtBQUFRSyxXQUFPLEVBQUVKO0FBQWpCLEdBQVI7QUFDSCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENQO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUssV0FBVyxnQkFBR0MsMkRBQWEsRUFBakM7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLE1BQUksRUFBRSxFQURrQjtBQUl4QkMsUUFBTSxFQUFFLEVBSmdCO0FBT3hCQyxTQUFPLEVBQUUsS0FQZTtBQVF4QkMsVUFBUSxFQUFFO0FBQ05DLFNBQUssRUFBRSxFQUREO0FBRU5DLFlBQVEsRUFBRTtBQUZKLEdBUmM7QUFZeEJDLE9BQUssRUFBRTtBQVppQixDQUFyQjtBQWlCQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFFaEJDLHdEQUFVLENBQUNDLGlEQUFELEVBQVdYLFlBQVgsQ0FGTTtBQUFBLE1BRW5DWSxLQUZtQztBQUFBLE1BRTVCQyxRQUY0Qjs7QUFBQSxNQUlsQ1osSUFKa0MsR0FJekJXLEtBSnlCLENBSWxDWCxJQUprQyxFQU0xQzs7QUFDQWEseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0FDLHNCQURBLEdBQ2FDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQURiOztBQUFBLGlCQUVGRixVQUZFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBR2dCRyx1RUFBTyxDQUFDLHNCQUFELENBSHZCOztBQUFBO0FBR0lDLGVBSEo7QUFLRk4sb0JBQVEsQ0FBQztBQUNMckIsa0JBQUksRUFBRVoscURBQU0sQ0FBQ0UsSUFEUjtBQUVMZSxxQkFBTyxFQUFFO0FBQ0x1QixxQkFBSyxFQUFFRCxHQUFHLENBQUNFLFdBRE47QUFFTEMsb0JBQUksRUFBRUgsR0FBRyxDQUFDRztBQUZMO0FBRkosYUFBRCxDQUFSOztBQUxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFhTixFQWJNLENBQVQsQ0FQMEMsQ0FzQjFDOztBQUNBUix5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ04sZ0JBQUliLElBQUksQ0FBQ21CLEtBQVQsRUFBZ0I7QUFDWixrQkFBSW5CLElBQUksQ0FBQ3FCLElBQUwsQ0FBVUMsSUFBVixLQUFtQixPQUFuQixJQUE4QnRCLElBQUksQ0FBQ3FCLElBQUwsQ0FBVUMsSUFBVixLQUFtQixjQUFyRCxFQUFxRTtBQUNqRUwsdUZBQU8sQ0FBQyxVQUFELEVBQWFqQixJQUFJLENBQUNtQixLQUFsQixDQUFQLENBQ0tJLElBREwsQ0FDVSxVQUFBTCxHQUFHLEVBQUk7QUFDVCxzQkFBSUEsR0FBRyxDQUFDTSxHQUFSLEVBQWEsT0FBT1osUUFBUSxDQUFDO0FBQUVyQix3QkFBSSxFQUFFLFFBQVI7QUFBa0JLLDJCQUFPLEVBQUU7QUFBRTZCLDJCQUFLLEVBQUVQLEdBQUcsQ0FBQ007QUFBYjtBQUEzQixtQkFBRCxDQUFmO0FBQ2JaLDBCQUFRLENBQUM7QUFBRXJCLHdCQUFJLEVBQUUsV0FBUjtBQUFxQkssMkJBQU8sRUFBRXNCLEdBQUcsQ0FBQ1o7QUFBbEMsbUJBQUQsQ0FBUjtBQUNILGlCQUpMO0FBS0g7QUFDSixhQVJELE1BUU87QUFDSE0sc0JBQVEsQ0FBQztBQUFFckIsb0JBQUksRUFBRSxXQUFSO0FBQXFCSyx1QkFBTyxFQUFFO0FBQTlCLGVBQUQsQ0FBUjtBQUNIOztBQVhLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFZTixDQUFDSSxJQUFJLENBQUNtQixLQUFOLENBWk0sQ0FBVDtBQWVBLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRSxDQUFDUixLQUFELEVBQVFDLFFBQVIsQ0FBN0I7QUFBQSxjQUNLSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBNUNNOztHQUFNRCxZOztLQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCYjtBQUNBOztBQUVBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUWUsTUFBUixFQUFtQjtBQUVoQyxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JsQixLQUFsQixDQUFuQjs7QUFFQSxVQUFRZSxNQUFNLENBQUNuQyxJQUFmO0FBRUk7QUFDQSxTQUFLWiwrQ0FBTSxDQUFDQyxNQUFaO0FBQ0ksNkNBQ08rQyxVQURQO0FBRUkxQixjQUFNLEVBQUV5QixNQUFNLENBQUM5QjtBQUZuQjtBQUtKOztBQUNBLFNBQUtqQiwrQ0FBTSxDQUFDTyxTQUFaO0FBQ0ksNkNBQ095QyxVQURQO0FBRUlyQixhQUFLLEVBQUVvQixNQUFNLENBQUM5QjtBQUZsQjtBQUtKOztBQUNBLFNBQUtqQiwrQ0FBTSxDQUFDRSxJQUFaO0FBQ0ksNkNBQ084QyxVQURQO0FBRUkzQixZQUFJLEVBQUUwQixNQUFNLENBQUM5QjtBQUZqQjtBQUtKOztBQUNBLFNBQUtqQiwrQ0FBTSxDQUFDRyxhQUFaO0FBQ0ksYUFBT2lCLHlEQUFQO0FBRUo7O0FBQ0EsU0FBS3BCLCtDQUFNLENBQUNJLGFBQVo7QUFDSSw2Q0FDTzRDLFVBRFA7QUFFSXpCLGVBQU8sRUFBRTtBQUZiOztBQUlKLFNBQUt2QiwrQ0FBTSxDQUFDSyxXQUFaO0FBQ0ksNkNBQ08yQyxVQURQO0FBRUl6QixlQUFPLEVBQUU7QUFGYjtBQUtKOztBQUNBLFNBQUt2QiwrQ0FBTSxDQUFDTSxnQkFBWjtBQUNJLDZDQUNPMEMsVUFEUDtBQUVJeEIsZ0JBQVEsa0NBQ0R3QixVQUFVLENBQUN4QixRQURWLEdBRUR1QixNQUFNLENBQUM5QixPQUZOO0FBRlo7O0FBUUo7QUFDSSxhQUFPZSxLQUFQO0FBbERSO0FBb0RILENBeEREOztBQTBEZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmVuZC1hZG1pbi91c2Vycy4wMzg2YjM4OGM0NmYwM2ZmNzYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFDVElPTiA9IHtcclxuXHJcbiAgICAvL05PVElGWVxyXG4gICAgTk9USUZZOlxyXG4gICAgICAgICdOT1RJRlknLFxyXG5cclxuICAgIC8vIEFVVEhcclxuICAgIEFVVEg6XHJcbiAgICAgICAgJ0FVVEgnLFxyXG5cclxuICAgIC8vIElOSVRJQUxfU1RBVEVcclxuICAgIElOSVRJQUxfU1RBVEU6XHJcbiAgICAgICAgJ0lOSVRJQUxfU1RBVEUnLFxyXG5cclxuICAgIC8vIExPQURJTkcgUkVHSVNURVIgQU5EIExPR0lOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTVEFSVF9MT0FESU5HOlxyXG4gICAgICAgICdTVEFSVF9MT0FESU5HJyxcclxuICAgIEVORF9MT0FESU5HOlxyXG4gICAgICAgICdFTkRfTE9BRElORycsXHJcblxyXG4gICAgLy8gVVBEQVRFIFVTRVIgREFUQSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgVVBEQVRFX1VTRVJfREFUQTpcclxuICAgICAgICAnVVBEQVRFX1VTRVJfREFUQScsXHJcblxyXG4gICAgLy9BREQgVVNFUlNcclxuICAgIEFERF9VU0VSUzpcclxuICAgICAgICAnQUREX1VTRVJTJyxcclxuXHJcbiAgICAvL1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcChpdGVtID0+IChpdGVtLl9pZCA9PT0gaWQgPyBwb3N0IDogaXRlbSkpXHJcbiAgICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YSB9KVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSdcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhdXRoOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG5vdGlmeToge1xyXG5cclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbiAgICB1c2VyczogW1xyXG5cclxuICAgIF0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIC8vIEFVVEhcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvZ2luJylcclxuICAgICAgICBpZiAoZmlyc3RMb2dpbikge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXREYXRhKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicpXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVzLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlcy51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy8gVVNFUlNcclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGgudG9rZW4pIHtcclxuICAgICAgICAgICAgaWYgKGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nIHx8IGF1dGgudXNlci5yb2xlID09PSAnbWFzdGVyIGFkbWluJykge1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgnYXBpL3VzZXInLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmVyciB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9VU0VSUycsIHBheWxvYWQ6IHJlcy51c2VycyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiBbXSB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRoLnRva2VuXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcblxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgQUNUSU9OIH0gZnJvbSAnLi9BY3Rpb25zJ1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tICcuL0dsb2JhbFN0YXRlJ1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRyYWZ0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSlcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIC8vIE5PVElGWVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLk5PVElGWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQUREIFVTRVJTXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQUREX1VTRVJTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFVVEhcclxuICAgICAgICBjYXNlIEFDVElPTi5BVVRIOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF1dGg6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSU5JVElBTCBTVEFURVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLklOSVRJQUxfU1RBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcclxuXHJcbiAgICAgICAgLy9sb2FkaW5nIFJlZ2lzdGVyIEFuZCBMb2dpbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYXNlIEFDVElPTi5TVEFSVF9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkVORF9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vVXBkYXRlIHVzZXIgZGF0YSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYXNlIEFDVElPTi5VUERBVEVfVVNFUl9EQVRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZS51c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnMiXSwic291cmNlUm9vdCI6IiJ9