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
      role === editUser.role ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: role,
        className: "text-capitalize",
        selected: true,
        children: role
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: role,
        className: "text-capitalize",
        children: role
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
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
          lineNumber: 66,
          columnNumber: 21
        }, this), " Voltar"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-4 mx-auto my-4 w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-secondary",
        children: "Editar Usu\xE1rio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "email",
          defaultValue: editUser.email,
          disabled: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "my-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Role"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
          id: "role",
          onChange: function onChange(e) {
            setRole(e.target.value);
          },
          children: selectOptions()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "btn btn-dark",
        onClick: handleUpdate,
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'Update'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvLmpzIl0sIm5hbWVzIjpbIkVkaXRVc2VyIiwiYWxsUm9sZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJzIiwiYXV0aCIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsImVkaXRVc2VyIiwic2V0RWRpdFVzZXIiLCJyb2xlIiwic2V0Um9sZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidXNlciIsIl9pZCIsImhhbmRsZVVwZGF0ZSIsInR5cGUiLCJwYXRjaERhdGEiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJzZWxlY3RPcHRpb25zIiwibWFwIiwiaW5kZXgiLCJiYWNrIiwiZW1haWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFFaEIsTUFBTUMsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsY0FBbEIsQ0FBakI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSmdCLE1BS1JDLEVBTFEsR0FLREYsTUFBTSxDQUFDRyxLQUxOLENBS1JELEVBTFE7O0FBQUEsb0JBT1VFLHdEQUFVLENBQUNDLDhEQUFELENBUHBCO0FBQUEsTUFPVEMsS0FQUztBQUFBLE1BT0ZDLFFBUEU7O0FBQUEsTUFRUkMsS0FSUSxHQVFRRixLQVJSLENBUVJFLEtBUlE7QUFBQSxNQVFEQyxJQVJDLEdBUVFILEtBUlIsQ0FRREcsSUFSQztBQVNoQixNQUFNQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ksT0FBdEI7O0FBVGdCLGtCQVdnQkMsc0RBQVEsQ0FB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LGNBSEosZUFRSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxZQUFFLEVBQUMsTUFBWDtBQUFrQixrQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFBRWxCLG1CQUFPLENBQUNrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQXlCLFdBQTlEO0FBQUEsb0JBRUtQLGFBQWE7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQWlCSTtBQUFRLGlCQUFTLEVBQUMsY0FBbEI7QUFDSSxlQUFPLEVBQUVOLFlBRGI7QUFBQSxrQkFJUVosT0FBTyxnQkFFQztBQUFBLGlDQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5QkFGRCxHQU1DO0FBVmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQ0g7O0dBbEdRWixRO1VBSVVHLHFEOzs7S0FKVkgsUTtBQW9HTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvW2lkXS5hZTkyN2MyNzUyNDAwMjFjMThjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHBhdGNoRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uLy4uLy4uL3NubmlwZXRzL0xvYWRpbmcnXHJcblxyXG5mdW5jdGlvbiBFZGl0VXNlcigpIHtcclxuXHJcbiAgICBjb25zdCBhbGxSb2xlcyA9IFsndXNlcicsICdhZG1pbicsICdtYXN0ZXIgYWRtaW4nXVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7IHVzZXJzLCBhdXRoIH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgbG9hZGluZyA9IHN0YXRlLmxvYWRpbmdcclxuXHJcbiAgICBjb25zdCBbZWRpdFVzZXIsIHNldEVkaXRVc2VyXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2sgMCcpXHJcbiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXIuX2lkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RWRpdFVzZXIodXNlcilcclxuICAgICAgICAgICAgICAgIHNldFJvbGUodXNlci5yb2xlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbdXNlcnNdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVEFSVF9MT0FESU5HJywgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcGF0Y2hEYXRhKGBhcGkvdXNlci8ke2VkaXRVc2VyLl9pZH1gLCB7IHJvbGUgfSwgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0VORF9MT0FESU5HJywgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgYWxsUm9sZXMubWFwKChyb2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAocm9sZSA9PT0gZWRpdFVzZXIucm9sZSkgPyAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3JvbGV9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00Jz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCIgb25DbGljaz17KCkgPT4geyByb3V0ZXIuYmFjaygpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb25nLWFycm93LWFsdC1sZWZ0XCI+PC9pPiBWb2x0YXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteC1hdXRvIG15LTQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPkVkaXRhciBVc3XDoXJpbzwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXtlZGl0VXNlci5lbWFpbH0gZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Sb2xlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicm9sZVwiIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlKSB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RPcHRpb25zKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFVzZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==