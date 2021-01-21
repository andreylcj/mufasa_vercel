webpackHotUpdate_N_E("pages/_app",{

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
        modal: action.payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvUmVkdWNlcnMuanMiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsImRyYWZ0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiQUNUSU9OIiwiQUREX01PREFMIiwibW9kYWwiLCJwYXlsb2FkIiwiTk9USUZZIiwibm90aWZ5IiwiQUREX1VTRVJTIiwidXNlcnMiLCJBVVRIIiwiYXV0aCIsIklOSVRJQUxfU1RBVEUiLCJpbml0aWFsU3RhdGUiLCJTVEFSVF9MT0FESU5HIiwibG9hZGluZyIsIkVORF9MT0FESU5HIiwiVVBEQVRFX1VTRVJfREFUQSIsInVzZXJEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBRWhDLE1BQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosS0FBbEIsQ0FBbkI7O0FBRUEsVUFBUUMsTUFBTSxDQUFDSSxJQUFmO0FBRUk7QUFDQSxTQUFLQywrQ0FBTSxDQUFDQyxTQUFaO0FBQ0ksNkNBQ09MLFVBRFA7QUFFSU0sYUFBSyxFQUFFUCxNQUFNLENBQUNRO0FBRmxCO0FBS0o7O0FBQ0EsU0FBS0gsK0NBQU0sQ0FBQ0ksTUFBWjtBQUNJLDZDQUNPUixVQURQO0FBRUlTLGNBQU0sRUFBRVYsTUFBTSxDQUFDUTtBQUZuQjtBQUtKOztBQUNBLFNBQUtILCtDQUFNLENBQUNNLFNBQVo7QUFDSSw2Q0FDT1YsVUFEUDtBQUVJVyxhQUFLLEVBQUVaLE1BQU0sQ0FBQ1E7QUFGbEI7QUFLSjs7QUFDQSxTQUFLSCwrQ0FBTSxDQUFDUSxJQUFaO0FBQ0ksNkNBQ09aLFVBRFA7QUFFSWEsWUFBSSxFQUFFZCxNQUFNLENBQUNRO0FBRmpCO0FBS0o7O0FBQ0EsU0FBS0gsK0NBQU0sQ0FBQ1UsYUFBWjtBQUNJLGFBQU9DLHlEQUFQO0FBRUo7O0FBQ0EsU0FBS1gsK0NBQU0sQ0FBQ1ksYUFBWjtBQUNJLDZDQUNPaEIsVUFEUDtBQUVJaUIsZUFBTyxFQUFFO0FBRmI7O0FBSUosU0FBS2IsK0NBQU0sQ0FBQ2MsV0FBWjtBQUNJLDZDQUNPbEIsVUFEUDtBQUVJaUIsZUFBTyxFQUFFO0FBRmI7QUFLSjs7QUFDQSxTQUFLYiwrQ0FBTSxDQUFDZSxnQkFBWjtBQUNJLDZDQUNPbkIsVUFEUDtBQUVJb0IsZ0JBQVEsa0NBQ0RwQixVQUFVLENBQUNvQixRQURWLEdBRURyQixNQUFNLENBQUNRLE9BRk47QUFGWjs7QUFRSjtBQUNJLGFBQU9ULEtBQVA7QUF6RFI7QUEyREgsQ0EvREQ7O0FBaUVlRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA0NmU2NDNjZTM2YzdiMTg2ODRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuL0FjdGlvbnMnXHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vR2xvYmFsU3RhdGUnXHJcblxyXG5jb25zdCByZWR1Y2VycyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZHJhZnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKVxyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgLy8gTk9USUZZXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQUREX01PREFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5PVElGWVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLk5PVElGWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQUREIFVTRVJTXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQUREX1VTRVJTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFVVEhcclxuICAgICAgICBjYXNlIEFDVElPTi5BVVRIOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF1dGg6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSU5JVElBTCBTVEFURVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLklOSVRJQUxfU1RBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcclxuXHJcbiAgICAgICAgLy9sb2FkaW5nIFJlZ2lzdGVyIEFuZCBMb2dpbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYXNlIEFDVElPTi5TVEFSVF9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkVORF9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vVXBkYXRlIHVzZXIgZGF0YSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYXNlIEFDVElPTi5VUERBVEVfVVNFUl9EQVRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZS51c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnMiXSwic291cmNlUm9vdCI6IiJ9