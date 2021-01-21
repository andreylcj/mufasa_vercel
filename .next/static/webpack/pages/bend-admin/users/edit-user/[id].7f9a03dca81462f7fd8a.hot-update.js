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
                if (res.err) return dispatch({
                  type: 'NOTIFY',
                  payload: {
                    error: res.err
                  }
                });
                return dispatch({
                  type: 'NOTIFY',
                  payload: {
                    success: res.msg
                  }
                });
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (Object.keys(auth).length !== 0 && auth.user.admin) {
      router.push('/bend-admin/home');
    } else if (Object.keys(auth).length !== 0 && !auth.user.admin) {
      router.push('/bend-admin/denied-access');
    } else if (Object.keys(auth).length !== 0 && auth.user.role !== 'master admin') {}
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
          className: "me-2",
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
          className: "me-2",
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
          className: "text-capitalize",
          value: role,
          children: allRoles.map(function (role, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: role,
              className: "text-capitalize",
              children: role
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 37
            }, _this);
          })
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
            lineNumber: 100,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'Update'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
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

_s(EditUser, "GKaTnVfGo8CX/0QzuNdg4dn7s3U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvLmpzIl0sIm5hbWVzIjpbIkVkaXRVc2VyIiwiYWxsUm9sZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJzIiwiYXV0aCIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsImVkaXRVc2VyIiwic2V0RWRpdFVzZXIiLCJyb2xlIiwic2V0Um9sZSIsInVzZUVmZmVjdCIsImZvckVhY2giLCJ1c2VyIiwiX2lkIiwiaGFuZGxlVXBkYXRlIiwidHlwZSIsInBhdGNoRGF0YSIsInRva2VuIiwidGhlbiIsInJlcyIsImVyciIsInBheWxvYWQiLCJlcnJvciIsInN1Y2Nlc3MiLCJtc2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYWRtaW4iLCJwdXNoIiwiYmFjayIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEIsTUFBTUMsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsY0FBbEIsQ0FBakI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSmdCLE1BS1JDLEVBTFEsR0FLREYsTUFBTSxDQUFDRyxLQUxOLENBS1JELEVBTFE7O0FBQUEsb0JBT1VFLHdEQUFVLENBQUNDLDhEQUFELENBUHBCO0FBQUEsTUFPVEMsS0FQUztBQUFBLE1BT0ZDLFFBUEU7O0FBQUEsTUFRUkMsS0FSUSxHQVFRRixLQVJSLENBUVJFLEtBUlE7QUFBQSxNQVFEQyxJQVJDLEdBUVFILEtBUlIsQ0FRREcsSUFSQztBQVNoQixNQUFNQyxPQUFP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QUFsQjtBQUNJLGVBQU8sRUFBRXRCLFlBRGI7QUFBQSxrQkFJUVYsT0FBTyxnQkFFQztBQUFBLGlDQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5QkFGRCxHQU1DO0FBVmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyREg7O0dBeEdRWixRO1VBSVVHLHFEOzs7S0FKVkgsUTtBQTBHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvW2lkXS43ZjlhMDNkY2E4MTQ2MmY3ZmQ4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHBhdGNoRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uLy4uLy4uL3NubmlwZXRzL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBFZGl0VXNlcigpIHtcclxuXHJcbiAgICBjb25zdCBhbGxSb2xlcyA9IFsndXNlcicsICdhZG1pbicsICdtYXN0ZXIgYWRtaW4nXVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7IHVzZXJzLCBhdXRoIH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgbG9hZGluZyA9IHN0YXRlLmxvYWRpbmdcclxuXHJcbiAgICBjb25zdCBbZWRpdFVzZXIsIHNldEVkaXRVc2VyXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlci5faWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFZGl0VXNlcih1c2VyKVxyXG4gICAgICAgICAgICAgICAgc2V0Um9sZSh1c2VyLnJvbGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFt1c2Vyc10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NUQVJUX0xPQURJTkcnLCB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwYXRjaERhdGEoYGFwaS91c2VyLyR7ZWRpdFVzZXIuX2lkfWAsIHsgcm9sZSB9LCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZXJyIH0gfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgc3VjY2VzczogcmVzLm1zZyB9IH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0VORF9MT0FESU5HJywgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwICYmIGF1dGgudXNlci5hZG1pbikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vaG9tZScpXHJcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggIT09IDAgJiYgIWF1dGgudXNlci5hZG1pbikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vZGVuaWVkLWFjY2VzcycpXHJcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggIT09IDAgJiYgYXV0aC51c2VyLnJvbGUgIT09ICdtYXN0ZXIgYWRtaW4nKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sIFthdXRoXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00Jz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCIgb25DbGljaz17KCkgPT4geyByb3V0ZXIuYmFjaygpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb25nLWFycm93LWFsdC1sZWZ0XCI+PC9pPiBWb2x0YXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteC1hdXRvIG15LTQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPkVkaXRhciBVc3XDoXJpbzwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cIm1lLTJcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17ZWRpdFVzZXIuZW1haWx9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWUtMlwiPlJvbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyb2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHNldFJvbGUoZS50YXJnZXQudmFsdWUpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUm9sZXMubWFwKChyb2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVXBkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VXNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9