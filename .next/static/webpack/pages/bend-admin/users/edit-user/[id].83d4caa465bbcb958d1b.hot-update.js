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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../snnipets/Loading */ "./snnipets/Loading.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../store/Actions */ "./store/Actions.js");






var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\bend-admin\\users\\edit-user\\[id].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function EditUser() {
  _s();

  var _this = this;

  var allRoles = ['user', 'admin', 'master admin'];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var id = router.query.id;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var users = state.users,
      auth = state.auth;
  var loading = state.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      editUser = _useState[0],
      setEditUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      role = _useState2[0],
      setRole = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    users.forEach(function (user) {
      if (user._id === id) {
        setEditUser(user);
        setRole(user.role);
      }
    });
  }, [users]);

  var handleUpdate = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: 'START_LOADING'
              });
              _context.next = 3;
              return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__["patchData"])("api/user/".concat(editUser._id), {
                role: role
              }, auth.token).then(function (res) {
                if (res.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {
                    error: res.err
                  }
                });
                var admin = false;

                if (role === 'admin' || role === 'master admin') {
                  var _admin = true;
                }

                console.log(_objectSpread(_objectSpread({}, editUser), {}, {
                  role: role,
                  admin: admin
                }));
                console.log(role);
                dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_9__["updateItem"])(users, editUser._id, _objectSpread(_objectSpread({}, editUser), {}, {
                  role: role,
                  admin: admin
                }), 'ADD_USERS'));
                return dispatch({
                  type: 'NOTIFY',
                  payload: {
                    success: res.msg
                  }
                });
              });

            case 3:
              dispatch({
                type: 'END_LOADING'
              });

            case 4:
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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (Object.keys(auth).length !== 0 && !auth.user.admin) {
      router.push('/bend-admin/denied-access');
    } else if (Object.keys(auth).length !== 0 && auth.user.role !== 'master admin') {
      router.push('/bend-admin/home');
    }
  }, [auth]);
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
          lineNumber: 69,
          columnNumber: 21
        }, this), " Voltar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-4 mx-auto my-4 w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-secondary",
        children: "Editar Usu\xE1rio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          className: "me-2",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "email",
          defaultValue: editUser.email,
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "me-2",
          children: "Role"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "role",
          onChange: function onChange(e) {
            setRole(e.target.value);
          },
          className: "text-capitalize",
          value: role,
          children: allRoles.map(function (role, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: role,
              className: "text-capitalize",
              children: role
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-dark",
        onClick: handleUpdate,
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'Update'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 9
  }, this);
}

_s(EditUser, "GKaTnVfGo8CX/0QzuNdg4dn7s3U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvLmpzIl0sIm5hbWVzIjpbIkVkaXRVc2VyIiwiYWxsUm9sZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJzIiwiYXV0aCIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsImVkaXRVc2VyIiwic2V0RWRpdFVzZXIiLCJyb2xlIiwic2V0Um9sZSIsInVzZUVmZmVjdCIsImZvckVhY2giLCJ1c2VyIiwiX2lkIiwiaGFuZGxlVXBkYXRlIiwidHlwZSIsInBhdGNoRGF0YSIsInRva2VuIiwidGhlbiIsInJlcyIsImVyciIsInBheWxvYWQiLCJlcnJvciIsImFkbWluIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUl0ZW0iLCJzdWNjZXNzIiwibXNnIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJiYWNrIiwiZW1haWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUVoQixNQUFNQyxRQUFRLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixjQUFsQixDQUFqQjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFKZ0IsTUFLUkMsRUFMUSxHQUtERixNQUFNLENBQUNHLEtBTE4sQ0FLUkQsRUFMUTs7QUFBQSxvQkFPVUUsd0RBQVUsQ0FBQ0MsOERBQUQsQ0FQcEI7QUFBQSxNQU9UQyxLQVBTO0FBQUEsTUFPRkMsUUFQRTs7QUFBQSxNQVFSQyxLQVJRLEdBUVFGLEtBUlIsQ0FRUkUsS0FSUTtBQUFBLE1BUURDLElB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LGVBQUssRUFBRTdCLElBSlg7QUFBQSxvQkFPUWYsUUFBUSxDQUFDNkMsR0FBVCxDQUFhLFVBQUM5QixJQUFELEVBQU8rQixLQUFQLEVBQWlCO0FBQzFCLGdDQUNJO0FBRUksbUJBQUssRUFBRS9CLElBRlg7QUFHSSx1QkFBUyxFQUFDLGlCQUhkO0FBQUEsd0JBS0tBO0FBTEwsZUFDUytCLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQVNILFdBVkQ7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLGVBaUNJO0FBQVEsaUJBQVMsRUFBQyxjQUFsQjtBQUNJLGVBQU8sRUFBRXpCLFlBRGI7QUFBQSxrQkFJUVYsT0FBTyxnQkFFQztBQUFBLGlDQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5QkFGRCxHQU1DO0FBVmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyREg7O0dBcEhRWixRO1VBSVVHLHFEOzs7S0FKVkgsUTtBQXNITUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvW2lkXS44M2Q0Y2FhNDY1YmJjYjk1OGQxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHBhdGNoRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uLy4uLy4uL3NubmlwZXRzL0xvYWRpbmcnXHJcbmltcG9ydCB7IHVwZGF0ZUl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9BY3Rpb25zJ1xyXG5cclxuZnVuY3Rpb24gRWRpdFVzZXIoKSB7XHJcblxyXG4gICAgY29uc3QgYWxsUm9sZXMgPSBbJ3VzZXInLCAnYWRtaW4nLCAnbWFzdGVyIGFkbWluJ11cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyB1c2VycywgYXV0aCB9ID0gc3RhdGVcclxuICAgIGNvbnN0IGxvYWRpbmcgPSBzdGF0ZS5sb2FkaW5nXHJcblxyXG4gICAgY29uc3QgW2VkaXRVc2VyLCBzZXRFZGl0VXNlcl0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIuX2lkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RWRpdFVzZXIodXNlcilcclxuICAgICAgICAgICAgICAgIHNldFJvbGUodXNlci5yb2xlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbdXNlcnNdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVEFSVF9MT0FESU5HJywgfSk7XHJcbiAgICAgICAgYXdhaXQgcGF0Y2hEYXRhKGBhcGkvdXNlci8ke2VkaXRVc2VyLl9pZH1gLCB7IHJvbGUgfSwgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmVyciB9IH0pXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFkbWluID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGlmIChyb2xlID09PSAnYWRtaW4nIHx8IHJvbGUgPT09ICdtYXN0ZXIgYWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFkbWluID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgLi4uZWRpdFVzZXIsIHJvbGUsIGFkbWluIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyb2xlKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRVc2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLmVkaXRVc2VyLCByb2xlLCBhZG1pbiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdBRERfVVNFUlMnXHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogcmVzLm1zZyB9IH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0VORF9MT0FESU5HJywgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwICYmICFhdXRoLnVzZXIuYWRtaW4pIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9iZW5kLWFkbWluL2RlbmllZC1hY2Nlc3MnKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwICYmIGF1dGgudXNlci5yb2xlICE9PSAnbWFzdGVyIGFkbWluJykge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vaG9tZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTQnPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIiBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5iYWNrKCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LWxlZnRcIj48L2k+IFZvbHRhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG14LWF1dG8gbXktNCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+RWRpdGFyIFVzdcOhcmlvPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwibWUtMlwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXtlZGl0VXNlci5lbWFpbH0gZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZS0yXCI+Um9sZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJvbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgc2V0Um9sZShlLnRhcmdldC52YWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxSb2xlcy5tYXAoKHJvbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRVc2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=