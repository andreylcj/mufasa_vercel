webpackHotUpdate_N_E("pages/bend-admin/home",{

/***/ "./pages/bend-admin/home.js":
/*!**********************************!*\
  !*** ./pages/bend-admin/home.js ***!
  \**********************************/
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
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\bend-admin\\home.js",
    _s = $RefreshSig$();








function Home() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var auth = state.auth;

  var handleLogout = function handleLogout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('refreshToken', {
      path: '/api/auth/accessToken'
    });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].AUTH,
      payload: {}
    });
  };

  var loggedRouter = function loggedRouter() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mx-auto my-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Bem vindo, ", auth.user.email]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleLogout,
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.keys(auth).length === 0) {
      router.push('/bend-admin/');
    } else if (Object.keys(auth).length !== 0 && !auth.user.admin) {
      router.push('/bend-admin/denied-access');
    }
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "d-flex flex-column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mx-auto my-4",
      children: "ADMIN HOME"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/bend-admin/my-profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "mx-auto my-3",
        children: "Meu Perfil"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 49
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/bend-admin/users",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "mx-auto my-3",
        children: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 44
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), Object.keys(auth).length === 0 ? '' : loggedRouter()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(Home, "9NqhZoJrjE83F8ET1jJPfHAij8E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmVuZC1hZG1pbi9ob21lLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvUmVkdWNlcnMuanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJhdXRoIiwiaGFuZGxlTG9nb3V0IiwiQ29va2llIiwicmVtb3ZlIiwicGF0aCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0eXBlIiwiQUNUSU9OIiwiQVVUSCIsInBheWxvYWQiLCJsb2dnZWRSb3V0ZXIiLCJ1c2VyIiwiZW1haWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsImFkbWluIiwiTk9USUZZIiwiSU5JVElBTF9TVEFURSIsIlNUQVJUX0xPQURJTkciLCJFTkRfTE9BRElORyIsIlVQREFURV9VU0VSX0RBVEEiLCJBRERfVVNFUlMiLCJ1cGRhdGVJdGVtIiwiZGF0YSIsImlkIiwicG9zdCIsIm5ld0RhdGEiLCJtYXAiLCJpdGVtIiwiX2lkIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsIm5vdGlmeSIsImxvYWRpbmciLCJ1c2VyRGF0YSIsInBhc3N3b3JkIiwidXNlcnMiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsImZpcnN0TG9naW4iLCJnZXRJdGVtIiwiZ2V0RGF0YSIsInJlcyIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJyb2xlIiwidGhlbiIsImVyciIsImVycm9yIiwiYWN0aW9uIiwiZHJhZnRTdGF0ZSIsImFzc2lnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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Q2UsYUFBWjtBQUNJLGFBQU9jLHlEQUFQO0FBRUo7O0FBQ0EsU0FBSzdCLCtDQUFNLENBQUNnQixhQUFaO0FBQ0ksNkNBQ09rQyxVQURQO0FBRUluQixlQUFPLEVBQUU7QUFGYjs7QUFJSixTQUFLL0IsK0NBQU0sQ0FBQ2lCLFdBQVo7QUFDSSw2Q0FDT2lDLFVBRFA7QUFFSW5CLGVBQU8sRUFBRTtBQUZiO0FBS0o7O0FBQ0EsU0FBSy9CLCtDQUFNLENBQUNrQixnQkFBWjtBQUNJLDZDQUNPZ0MsVUFEUDtBQUVJbEIsZ0JBQVEsa0NBQ0RrQixVQUFVLENBQUNsQixRQURWLEdBRURpQixNQUFNLENBQUMvQyxPQUZOO0FBRlo7O0FBUUo7QUFDSSxhQUFPWixLQUFQO0FBbERSO0FBb0RILENBeEREOztBQTBEZWdELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JlbmQtYWRtaW4vaG9tZS4wMzg2YjM4OGM0NmYwM2ZmNzYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuLi8uLi9zdG9yZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIENvb2tpZS5yZW1vdmUoJ3JlZnJlc2hUb2tlbicsIHsgcGF0aDogJy9hcGkvYXV0aC9hY2Nlc3NUb2tlbicgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2dnZWRSb3V0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG15LTRcIj5cclxuICAgICAgICAgICAgICAgIDxwPkJlbSB2aW5kbywge2F1dGgudXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vJylcclxuICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCAmJiAhYXV0aC51c2VyLmFkbWluKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYmVuZC1hZG1pbi9kZW5pZWQtYWNjZXNzJylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byBteS00XCI+QURNSU4gSE9NRTwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9iZW5kLWFkbWluL215LXByb2ZpbGVcIj48YSBjbGFzc05hbWU9XCJteC1hdXRvIG15LTNcIj5NZXUgUGVyZmlsPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9iZW5kLWFkbWluL3VzZXJzXCI+PGEgY2xhc3NOYW1lPVwibXgtYXV0byBteS0zXCI+VXNlcnM8L2E+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VkUm91dGVyKClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiIsImV4cG9ydCBjb25zdCBBQ1RJT04gPSB7XHJcblxyXG4gICAgLy9OT1RJRllcclxuICAgIE5PVElGWTpcclxuICAgICAgICAnTk9USUZZJyxcclxuXHJcbiAgICAvLyBBVVRIXHJcbiAgICBBVVRIOlxyXG4gICAgICAgICdBVVRIJyxcclxuXHJcbiAgICAvLyBJTklUSUFMX1NUQVRFXHJcbiAgICBJTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICdJTklUSUFMX1NUQVRFJyxcclxuXHJcbiAgICAvLyBMT0FESU5HIFJFR0lTVEVSIEFORCBMT0dJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU1RBUlRfTE9BRElORzpcclxuICAgICAgICAnU1RBUlRfTE9BRElORycsXHJcbiAgICBFTkRfTE9BRElORzpcclxuICAgICAgICAnRU5EX0xPQURJTkcnLFxyXG5cclxuICAgIC8vIFVQREFURSBVU0VSIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgJ1VQREFURV9VU0VSX0RBVEEnLFxyXG5cclxuICAgIC8vQUREIFVTRVJTXHJcbiAgICBBRERfVVNFUlM6XHJcbiAgICAgICAgJ0FERF9VU0VSUycsXHJcblxyXG4gICAgLy9cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGEsIGlkLCBwb3N0LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9SZWR1Y2VycydcclxuaW1wb3J0IHsgQUNUSU9OIH0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYXV0aDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBub3RpZnk6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB1c2VyRGF0YToge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAgdXNlcnM6IFtcclxuXHJcbiAgICBdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIGNvbnN0IHsgYXV0aCB9ID0gc3RhdGVcclxuXHJcbiAgICAvLyBBVVRIXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgICAgICAgaWYgKGZpcnN0TG9naW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YSgnYXBpL2F1dGgvYWNjZXNzVG9rZW4nKVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcy5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiByZXMudXNlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIFVTRVJTXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoLnRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyB8fCBhdXRoLnVzZXIucm9sZSA9PT0gJ21hc3RlciBhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGEoJ2FwaS91c2VyJywgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5lcnIgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnMgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW10gfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0aC50b2tlbl0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICAgIClcclxufSIsImltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4vQWN0aW9ucydcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSdcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBjb25zdCBkcmFmdFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpXHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICAvLyBOT1RJRllcclxuICAgICAgICBjYXNlIEFDVElPTi5OT1RJRlk6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbm90aWZ5OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFERCBVU0VSU1xyXG4gICAgICAgIGNhc2UgQUNUSU9OLkFERF9VU0VSUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBVVRIXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQVVUSDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElOSVRJQUwgU1RBVEVcclxuICAgICAgICBjYXNlIEFDVElPTi5JTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXHJcblxyXG4gICAgICAgIC8vbG9hZGluZyBSZWdpc3RlciBBbmQgTG9naW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uU1RBUlRfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVElPTi5FTkRfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1VwZGF0ZSB1c2VyIGRhdGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUudXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==