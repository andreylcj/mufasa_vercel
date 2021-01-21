webpackHotUpdate_N_E("pages/bend-admin/users",{

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTION, updateItem, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION", function() { return ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
var ACTION = {
  // ADD_MODAL
  ADD_MODAL: 'ADD_MODAL',
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
var deleteItem = function deleteItem(data, id, post, type) {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJBQ1RJT04iLCJBRERfTU9EQUwiLCJOT1RJRlkiLCJBVVRIIiwiSU5JVElBTF9TVEFURSIsIlNUQVJUX0xPQURJTkciLCJFTkRfTE9BRElORyIsIlVQREFURV9VU0VSX0RBVEEiLCJBRERfVVNFUlMiLCJ1cGRhdGVJdGVtIiwiZGF0YSIsImlkIiwicG9zdCIsInR5cGUiLCJuZXdEYXRhIiwibWFwIiwiaXRlbSIsIl9pZCIsInBheWxvYWQiLCJkZWxldGVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxNQUFNLEdBQUc7QUFFbEI7QUFDQUMsV0FBUyxFQUNMLFdBSmM7QUFNbEI7QUFDQUMsUUFBTSxFQUNGLFFBUmM7QUFVbEI7QUFDQUMsTUFBSSxFQUNBLE1BWmM7QUFjbEI7QUFDQUMsZUFBYSxFQUNULGVBaEJjO0FBa0JsQjtBQUNBQyxlQUFhLEVBQ1QsZUFwQmM7QUFxQmxCQyxhQUFXLEVBQ1AsYUF0QmM7QUF3QmxCO0FBQ0FDLGtCQUFnQixFQUNaLGtCQTFCYztBQTRCbEI7QUFDQUMsV0FBUyxFQUNMLFdBOUJjLENBZ0NsQjs7QUFoQ2tCLENBQWY7QUFvQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQVdDLElBQVgsRUFBaUJDLElBQWpCLEVBQTBCO0FBQ2hELE1BQU1DLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQUMsSUFBSTtBQUFBLFdBQUtBLElBQUksQ0FBQ0MsR0FBTCxLQUFhTixFQUFiLEdBQWtCQyxJQUFsQixHQUF5QkksSUFBOUI7QUFBQSxHQUFiLENBQWhCO0FBQ0EsU0FBUTtBQUFFSCxRQUFJLEVBQUpBLElBQUY7QUFBUUssV0FBTyxFQUFFSjtBQUFqQixHQUFSO0FBQ0gsQ0FITTtBQUtBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNULElBQUQsRUFBT0MsRUFBUCxFQUFXQyxJQUFYLEVBQWlCQyxJQUFqQixFQUEwQjtBQUNoRCxNQUFNQyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUFDLElBQUk7QUFBQSxXQUFLQSxJQUFJLENBQUNDLEdBQUwsS0FBYU4sRUFBYixHQUFrQkMsSUFBbEIsR0FBeUJJLElBQTlCO0FBQUEsR0FBYixDQUFoQjtBQUNBLFNBQVE7QUFBRUgsUUFBSSxFQUFKQSxJQUFGO0FBQVFLLFdBQU8sRUFBRUo7QUFBakIsR0FBUjtBQUNILENBSE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmVuZC1hZG1pbi91c2Vycy45MGJlMzRkZTQzOGRkMDEzYmQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFDVElPTiA9IHtcclxuXHJcbiAgICAvLyBBRERfTU9EQUxcclxuICAgIEFERF9NT0RBTDpcclxuICAgICAgICAnQUREX01PREFMJyxcclxuXHJcbiAgICAvL05PVElGWVxyXG4gICAgTk9USUZZOlxyXG4gICAgICAgICdOT1RJRlknLFxyXG5cclxuICAgIC8vIEFVVEhcclxuICAgIEFVVEg6XHJcbiAgICAgICAgJ0FVVEgnLFxyXG5cclxuICAgIC8vIElOSVRJQUxfU1RBVEVcclxuICAgIElOSVRJQUxfU1RBVEU6XHJcbiAgICAgICAgJ0lOSVRJQUxfU1RBVEUnLFxyXG5cclxuICAgIC8vIExPQURJTkcgUkVHSVNURVIgQU5EIExPR0lOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTVEFSVF9MT0FESU5HOlxyXG4gICAgICAgICdTVEFSVF9MT0FESU5HJyxcclxuICAgIEVORF9MT0FESU5HOlxyXG4gICAgICAgICdFTkRfTE9BRElORycsXHJcblxyXG4gICAgLy8gVVBEQVRFIFVTRVIgREFUQSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgVVBEQVRFX1VTRVJfREFUQTpcclxuICAgICAgICAnVVBEQVRFX1VTRVJfREFUQScsXHJcblxyXG4gICAgLy9BREQgVVNFUlNcclxuICAgIEFERF9VU0VSUzpcclxuICAgICAgICAnQUREX1VTRVJTJyxcclxuXHJcbiAgICAvL1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcChpdGVtID0+IChpdGVtLl9pZCA9PT0gaWQgPyBwb3N0IDogaXRlbSkpXHJcbiAgICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YSB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4gKGl0ZW0uX2lkID09PSBpZCA/IHBvc3QgOiBpdGVtKSlcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=