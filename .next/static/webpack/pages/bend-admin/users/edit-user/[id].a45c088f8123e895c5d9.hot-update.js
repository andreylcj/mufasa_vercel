webpackHotUpdate_N_E("pages/bend-admin/users/edit-user/[id]",{

/***/ "./pages/bend-admin/users/edit-user/[id].js":
/*!**************************************************!*\
  !*** ./pages/bend-admin/users/edit-user/[id].js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../snnipets/Loading */ "./snnipets/Loading.js");





var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\bend-admin\\users\\edit-user\\[id].js",
    _s = $RefreshSig$();







function EditUser() {
  _s();

  var _this = this;

  var allRoles = ['user', 'admin', 'master admin'];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var users = state.users,
      auth = state.auth;
  var loading = state.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      editUser = _useState[0],
      setEditUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      role = _useState2[0],
      setRole = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log('ok 0');
    users.forEach(function (user) {
      if (user._id === id) {
        setEditUser(user);
        setRole(user.role);
      }
    });
  }, [users]);

  var handleUpdate = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: 'START_LOADING'
              });
              _context.next = 3;
              return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["patchData"])("api/user/".concat(editUser._id), {
                role: role
              }, auth.token).then(function (res) {
                return console.log(res);
              });

            case 3:
              res = _context.sent;
              dispatch({
                type: 'END_LOADING'
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleUpdate() {
      return _ref.apply(this, arguments);
    };
  }();

  var selectOptions = function selectOptions() {
    allRoles.map(function (role, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: role,
        className: "text-capitalize",
        children: role
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-dark",
        onClick: function onClick() {
          router.back();
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-long-arrow-alt-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), " Voltar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-4 mx-auto my-4 w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-secondary",
        children: "Editar Usu\xE1rio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "email",
          defaultValue: editUser.email,
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Role"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "role",
          onChange: function onChange(e) {
            setRole(e.target.value);
          },
          children: selectOptions()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-dark",
        onClick: handleUpdate,
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'Update'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

_s(EditUser, "wRlgQ1znzZqpPyMpc9QMZrk+Km4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = EditUser;
/* harmony default export */ __webpack_exports__["default"] = (EditUser);

var _c;

$RefreshReg$(_c, "EditUser");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvLmpzIl0sIm5hbWVzIjpbIkVkaXRVc2VyIiwiYWxsUm9sZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJzIiwiYXV0aCIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsImVkaXRVc2VyIiwic2V0RWRpdFVzZXIiLCJyb2xlIiwic2V0Um9sZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidXNlciIsIl9pZCIsImhhbmRsZVVwZGF0ZSIsInR5cGUiLCJwYXRjaERhdGEiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJzZWxlY3RPcHRpb25zIiwibWFwIiwiaW5kZXgiLCJiYWNrIiwiZW1haWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEIsTUFBTUMsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsY0FBbEIsQ0FBakI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSmdCLE1BS1JDLEVBTFEsR0FLREYsTUFBTSxDQUFDRyxLQUxOLENBS1JELEVBTFE7O0FBQUEsb0JBT1VFLHdEQUFVLENBQUNDLDhEQUFELENBUHBCO0FBQUEsTUFPVEMsS0FQUztBQUFBLE1BT0ZDLFFBUEU7O0FBQUEsTUFRUkMsS0FSUSxHQVFRRixLQVJSLENBUVJFLEtBUlE7QUFBQSxNQVFEQyxJQVJDLEdBUVFILEtBUlIsQ0FRREcsSUFSQztBQVNoQixNQUFNQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ksT0FBdEI7O0FBVGdCLGtCQVdnQkMsc0RBQVEsQ0FB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Q2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFBeUIsV0FBOUQ7QUFBQSxvQkFFS1AsYUFBYTtBQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBaUJJO0FBQVEsaUJBQVMsRUFBQyxjQUFsQjtBQUNJLGVBQU8sRUFBRU4sWUFEYjtBQUFBLGtCQUlRWixPQUFPLGdCQUVDO0FBQUEsaUNBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlCQUZELEdBTUM7QUFWaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJDSDs7R0F4RlFaLFE7VUFJVUcscUQ7OztLQUpWSCxRO0FBMEZNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iZW5kLWFkbWluL3VzZXJzL2VkaXQtdXNlci9baWRdLmE0NWMwODhmODEyM2U4OTVjNWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgcGF0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSdcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vLi4vc25uaXBldHMvTG9hZGluZydcclxuXHJcbmZ1bmN0aW9uIEVkaXRVc2VyKCkge1xyXG5cclxuICAgIGNvbnN0IGFsbFJvbGVzID0gWyd1c2VyJywgJ2FkbWluJywgJ21hc3RlciBhZG1pbiddXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgdXNlcnMsIGF1dGggfSA9IHN0YXRlXHJcbiAgICBjb25zdCBsb2FkaW5nID0gc3RhdGUubG9hZGluZ1xyXG5cclxuICAgIGNvbnN0IFtlZGl0VXNlciwgc2V0RWRpdFVzZXJdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvayAwJylcclxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlci5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFZGl0VXNlcih1c2VyKVxyXG4gICAgICAgICAgICAgICAgc2V0Um9sZSh1c2VyLnJvbGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFt1c2Vyc10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NUQVJUX0xPQURJTkcnLCB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwYXRjaERhdGEoYGFwaS91c2VyLyR7ZWRpdFVzZXIuX2lkfWAsIHsgcm9sZSB9LCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnRU5EX0xPQURJTkcnLCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIGFsbFJvbGVzLm1hcCgocm9sZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3JvbGV9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNCc+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiIG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLmJhY2soKSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtbGVmdFwiPjwvaT4gVm9sdGFyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbXgtYXV0byBteS00IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5FZGl0YXIgVXN1w6FyaW88L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17ZWRpdFVzZXIuZW1haWx9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Um9sZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInJvbGVcIiBvbkNoYW5nZT17KGUpID0+IHsgc2V0Um9sZShlLnRhcmdldC52YWx1ZSkgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0T3B0aW9ucygpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVXBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRVc2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=