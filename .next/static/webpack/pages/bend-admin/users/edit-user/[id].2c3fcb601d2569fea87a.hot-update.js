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
    /*allRoles.map((role, index) => {
        return (
            <option
                key={index}
                value={role}
                className="text-capitalize"
            >
                {role}
            </option>
        )
    })*/
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: role,
      className: "text-capitalize",
      children: role
    }, '2', false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmVuZC1hZG1pbi91c2Vycy9lZGl0LXVzZXIvLmpzIl0sIm5hbWVzIjpbIkVkaXRVc2VyIiwiYWxsUm9sZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJzIiwiYXV0aCIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsImVkaXRVc2VyIiwic2V0RWRpdFVzZXIiLCJyb2xlIiwic2V0Um9sZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidXNlciIsIl9pZCIsImhhbmRsZVVwZGF0ZSIsInR5cGUiLCJwYXRjaERhdGEiLCJ0b2tlbiIsInRoZW4iLCJyZXMiLCJzZWxlY3RPcHRpb25zIiwiYmFjayIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBRWhCLE1BQU1DLFFBQVEsR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLGNBQWxCLENBQWpCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUpnQixNQUtSQyxFQUxRLEdBS0RGLE1BQU0sQ0FBQ0csS0FMTixDQUtSRCxFQUxROztBQUFBLG9CQU9VRSx3REFBVSxDQUFDQyw4REFBRCxDQVBwQjtBQUFBLE1BT1RDLEtBUFM7QUFBQSxNQU9GQyxRQVBFOztBQUFBLE1BUVJDLEtBUlEsR0FRUUYsS0FSUixDQVFSRSxLQVJRO0FBQUEsTUFRREMsSUFSQyxHQVFRSCxLQVJSLENBUURHLElBUkM7QUFTaEIsTUFBTUMsT0FBTyxHQUFHSixLQUFLLENBQUNJLE9BQXRCOztBQVRnQixrQkFXZ0JDLHNEQUFRLENBQUMsRUFBRCxDQVh4QjtB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Q0FBUDtBQUF5QixXQUE5RDtBQUFBLG9CQUVLTCxhQUFhO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFpQkk7QUFBUSxpQkFBUyxFQUFDLGNBQWxCO0FBQ0ksZUFBTyxFQUFFTixZQURiO0FBQUEsa0JBSVFaLE9BQU8sZ0JBRUM7QUFBQSxpQ0FDSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseUJBRkQsR0FNQztBQVZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkNIOztHQWxHUVosUTtVQUlVRyxxRDs7O0tBSlZILFE7QUFvR01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JlbmQtYWRtaW4vdXNlcnMvZWRpdC11c2VyL1tpZF0uMmMzZmNiNjAxZDI1NjlmZWE4N2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBwYXRjaERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi8uLi8uLi9zbm5pcGV0cy9Mb2FkaW5nJ1xyXG5cclxuZnVuY3Rpb24gRWRpdFVzZXIoKSB7XHJcblxyXG4gICAgY29uc3QgYWxsUm9sZXMgPSBbJ3VzZXInLCAnYWRtaW4nLCAnbWFzdGVyIGFkbWluJ11cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyB1c2VycywgYXV0aCB9ID0gc3RhdGVcclxuICAgIGNvbnN0IGxvYWRpbmcgPSBzdGF0ZS5sb2FkaW5nXHJcblxyXG4gICAgY29uc3QgW2VkaXRVc2VyLCBzZXRFZGl0VXNlcl0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rIDAnKVxyXG4gICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyLl9pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHNldEVkaXRVc2VyKHVzZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRSb2xlKHVzZXIucm9sZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW3VzZXJzXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU1RBUlRfTE9BRElORycsIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBhdGNoRGF0YShgYXBpL3VzZXIvJHtlZGl0VXNlci5faWR9YCwgeyByb2xlIH0sIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdFTkRfTE9BRElORycsIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgLyphbGxSb2xlcy5tYXAoKHJvbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm9sZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyb2xlfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KSovXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgIGtleT0nMidcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtyb2xlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3JvbGV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS00Jz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCIgb25DbGljaz17KCkgPT4geyByb3V0ZXIuYmFjaygpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb25nLWFycm93LWFsdC1sZWZ0XCI+PC9pPiBWb2x0YXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBteC1hdXRvIG15LTQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPkVkaXRhciBVc3XDoXJpbzwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXtlZGl0VXNlci5lbWFpbH0gZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Sb2xlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicm9sZVwiIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRSb2xlKGUudGFyZ2V0LnZhbHVlKSB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RPcHRpb25zKCl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFVzZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==