webpackHotUpdate_N_E("pages/index",{

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
    case _Actions__WEBPACK_IMPORTED_MODULE_1__["ACTION"].ADD_MODAL:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        notify: action.payload
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvUmVkdWNlcnMuanMiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsImRyYWZ0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiQUNUSU9OIiwiQUREX01PREFMIiwibm90aWZ5IiwicGF5bG9hZCIsIk5PVElGWSIsIkFERF9VU0VSUyIsInVzZXJzIiwiQVVUSCIsImF1dGgiLCJJTklUSUFMX1NUQVRFIiwiaW5pdGlhbFN0YXRlIiwiU1RBUlRfTE9BRElORyIsImxvYWRpbmciLCJFTkRfTE9BRElORyIsIlVQREFURV9VU0VSX0RBVEEiLCJ1c2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUVoQyxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLEtBQWxCLENBQW5COztBQUVBLFVBQVFDLE1BQU0sQ0FBQ0ksSUFBZjtBQUVJO0FBQ0EsU0FBS0MsK0NBQU0sQ0FBQ0MsU0FBWjtBQUNJLDZDQUNPTCxVQURQO0FBRUlNLGNBQU0sRUFBRVAsTUFBTSxDQUFDUTtBQUZuQjtBQUtKOztBQUNBLFNBQUtILCtDQUFNLENBQUNJLE1BQVo7QUFDSSw2Q0FDT1IsVUFEUDtBQUVJTSxjQUFNLEVBQUVQLE1BQU0sQ0FBQ1E7QUFGbkI7QUFLSjs7QUFDQSxTQUFLSCwrQ0FBTSxDQUFDSyxTQUFaO0FBQ0ksNkNBQ09ULFVBRFA7QUFFSVUsYUFBSyxFQUFFWCxNQUFNLENBQUNRO0FBRmxCO0FBS0o7O0FBQ0EsU0FBS0gsK0NBQU0sQ0FBQ08sSUFBWjtBQUNJLDZDQUNPWCxVQURQO0FBRUlZLFlBQUksRUFBRWIsTUFBTSxDQUFDUTtBQUZqQjtBQUtKOztBQUNBLFNBQUtILCtDQUFNLENBQUNTLGFBQVo7QUFDSSxhQUFPQyx5REFBUDtBQUVKOztBQUNBLFNBQUtWLCtDQUFNLENBQUNXLGFBQVo7QUFDSSw2Q0FDT2YsVUFEUDtBQUVJZ0IsZUFBTyxFQUFFO0FBRmI7O0FBSUosU0FBS1osK0NBQU0sQ0FBQ2EsV0FBWjtBQUNJLDZDQUNPakIsVUFEUDtBQUVJZ0IsZUFBTyxFQUFFO0FBRmI7QUFLSjs7QUFDQSxTQUFLWiwrQ0FBTSxDQUFDYyxnQkFBWjtBQUNJLDZDQUNPbEIsVUFEUDtBQUVJbUIsZ0JBQVEsa0NBQ0RuQixVQUFVLENBQUNtQixRQURWLEdBRURwQixNQUFNLENBQUNRLE9BRk47QUFGWjs7QUFRSjtBQUNJLGFBQU9ULEtBQVA7QUF6RFI7QUEyREgsQ0EvREQ7O0FBaUVlRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MTUzYmMwMGU1MzQyMmMyMDVjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUNUSU9OIH0gZnJvbSAnLi9BY3Rpb25zJ1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tICcuL0dsb2JhbFN0YXRlJ1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRyYWZ0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSlcclxuXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIC8vIE5PVElGWVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkFERF9NT0RBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTk9USUZZXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uTk9USUZZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vdGlmeTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBREQgVVNFUlNcclxuICAgICAgICBjYXNlIEFDVElPTi5BRERfVVNFUlM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQVVUSFxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkFVVEg6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJTklUSUFMIFNUQVRFXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uSU5JVElBTF9TVEFURTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxyXG5cclxuICAgICAgICAvL2xvYWRpbmcgUmVnaXN0ZXIgQW5kIExvZ2luID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLlNUQVJUX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uRU5EX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9VcGRhdGUgdXNlciBkYXRhID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLlVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlckRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLnVzZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VycyJdLCJzb3VyY2VSb290IjoiIn0=