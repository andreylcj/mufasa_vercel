webpackHotUpdate_N_E("pages/registrar",{

/***/ "./pages/registrar.js":
/*!****************************!*\
  !*** ./pages/registrar.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_utils_ValidRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/utils/ValidRegister */ "./assets/utils/ValidRegister.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../snnipets/Loading */ "./snnipets/Loading.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\registrar.js",
    _s = $RefreshSig$();










function Register() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_10__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var loading = state.loading;
  var userData = state.userData;
  var auth = state.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    emailMessage: '',
    passwordMessage: '',
    emailAlreadyExist: ''
  }),
      submitStatus = _useState[0],
      setSubmitStatus = _useState[1];

  var email = userData.email,
      password = userData.password;

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["ACTION"].UPDATE_USER_DATA,
      payload: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _validRegister, emailMessage, passwordMessage, res, new_auth, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _validRegister = Object(_assets_utils_ValidRegister__WEBPACK_IMPORTED_MODULE_5__["default"])(userData.email, userData.password), emailMessage = _validRegister.emailMessage, passwordMessage = _validRegister.passwordMessage;
              setSubmitStatus({
                emailMessage: emailMessage,
                passwordMessage: passwordMessage
              });

              if (!(emailMessage || passwordMessage)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["ACTION"].START_LOADING
              });
              _context.next = 8;
              return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__["postData"])('api/auth/register', userData);

            case 8:
              res = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["ACTION"].END_LOADING
              });
              setSubmitStatus({
                emailAlreadyExist: res.emailMessage
              });

              if (!res.emailMessage) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              Cookie.set('refreshToken', res.refreshToken, {
                path: '/api/auth/accessToken',
                expires: 25
              });
              localStorage.setItem('firstLogin', true); //set new auth

              _context.next = 17;
              return fetch('api/auth/accessToken', {
                method: 'GET'
              });

            case 17:
              new_auth = _context.sent;
              _context.next = 20;
              return new_auth.json();

            case 20:
              data = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["ACTION"].AUTH,
                payload: {
                  token: data.accessToken,
                  user: data.user
                }
              });

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["ACTION"].UPDATE_USER_DATA,
      payload: {
        email: '',
        password: ''
      }
    });
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "HOME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      noValidate: true,
      className: "mx-auto my-4",
      style: {
        maxWidth: '500px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          className: "form-label",
          children: "E-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          id: "email",
          "aria-describedby": "emailHelp",
          name: "email",
          onChange: handleInputChange,
          value: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text".concat(submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''),
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 37
          }, this) : submitStatus.emailAlreadyExist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [submitStatus.emailAlreadyExist, ". Deseja fazer ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/entrar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-primary text-underline",
                onClick: function onClick() {
                  return dispatch({
                    type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["ACTION"].UPDATE_USER_DATA,
                    payload: {
                      password: ""
                    }
                  });
                },
                children: "login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 54
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 41
          }, this) : 'Nós nunca vamos compartilhar seu e-mail com ninguém.'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "password",
          name: "password",
          onChange: handleInputChange,
          value: password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 37
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'CADASTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, this);
}

_s(Register, "Gj6VhxuXgPPYbvLkf9vzSZlldsw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cmFyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsQWxyZWFkeUV4aXN0Iiwic3VibWl0U3RhdHVzIiwic2V0U3VibWl0U3RhdHVzIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInR5cGUiLCJBQ1RJT04iLCJVUERBVEVfVVNFUl9EQVRBIiwicGF5bG9hZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRSZWdpc3RlciIsIlNUQVJUX0xPQURJTkciLCJwb3N0RGF0YSIsInJlcyIsIkVORF9MT0FESU5HIiwiQ29va2llIiwic2V0IiwicmVmcmVzaFRva2VuIiwicGF0aCIsImV4cGlyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZmV0Y2giLCJtZXRob2QiLCJuZXdfYXV0aCIsImpzb24iLCJkYXRhIiwiQVVUSCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUVVQyx3REFBVSxDQUFDQywrREFBRCxDQUZwQjtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLE1BR1JDLE9BSFEsR0FHSUYsS0FI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LEVBQUMsVUFEVDtBQUVJLGtCQUFRLEVBQUVDLGlCQUZkO0FBRWlDLGVBQUssRUFBRUQ7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUtJO0FBQUssWUFBRSxFQUFDLGNBQVI7QUFBdUIsbUJBQVMscUJBQWNILFlBQVksQ0FBQ0YsZUFBYixHQUErQixjQUEvQixHQUFnRCxFQUE5RCxDQUFoQztBQUFBLG9CQUVRRSxZQUFZLENBQUNGLGVBQWIsZ0JBRVE7QUFBQSxzQkFBSUUsWUFBWSxDQUFDRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSLEdBS1E7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0osZUF3REk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLGdDQUFoQztBQUFBLGtCQUVRTCxPQUFPLGdCQUVDO0FBQUEsaUNBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlCQUZELEdBTUM7QUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQTZFSDs7R0FuS1FMLFE7VUFnRlVrRCxzRDs7O0tBaEZWbEQsUTtBQXFLTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmFyLmUwNzNhOTdlZDBhNzRjOTdkNmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdmFsaWRSZWdpc3RlciBmcm9tICcuLi9hc3NldHMvdXRpbHMvVmFsaWRSZWdpc3RlcidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vc25uaXBldHMvTG9hZGluZydcclxuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQUNUSU9OIH0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucyc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIGNvbnN0IFtzdWJtaXRTdGF0dXMsIHNldFN1Ym1pdFN0YXR1c10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWxNZXNzYWdlOiAnJyxcclxuICAgICAgICBwYXNzd29yZE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGVtYWlsQWxyZWFkeUV4aXN0OiAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZXJEYXRhXHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZW1haWxNZXNzYWdlLCBwYXNzd29yZE1lc3NhZ2UgfSA9IHZhbGlkUmVnaXN0ZXIodXNlckRhdGEuZW1haWwsIHVzZXJEYXRhLnBhc3N3b3JkKVxyXG5cclxuICAgICAgICBzZXRTdWJtaXRTdGF0dXMoe1xyXG4gICAgICAgICAgICBlbWFpbE1lc3NhZ2U6IGVtYWlsTWVzc2FnZSxcclxuICAgICAgICAgICAgcGFzc3dvcmRNZXNzYWdlOiBwYXNzd29yZE1lc3NhZ2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKGVtYWlsTWVzc2FnZSB8fCBwYXNzd29yZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5TVEFSVF9MT0FESU5HLCB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSgnYXBpL2F1dGgvcmVnaXN0ZXInLCB1c2VyRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uRU5EX0xPQURJTkcsIH0pO1xyXG5cclxuICAgICAgICBzZXRTdWJtaXRTdGF0dXMoe1xyXG4gICAgICAgICAgICBlbWFpbEFscmVhZHlFeGlzdDogcmVzLmVtYWlsTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAocmVzLmVtYWlsTWVzc2FnZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIENvb2tpZS5zZXQoJ3JlZnJlc2hUb2tlbicsIHJlcy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgcGF0aDogJy9hcGkvYXV0aC9hY2Nlc3NUb2tlbicsXHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDI1XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2dpbicsIHRydWUpXHJcblxyXG4gICAgICAgIC8vc2V0IG5ldyBhdXRoXHJcbiAgICAgICAgY29uc3QgbmV3X2F1dGggPSBhd2FpdCBmZXRjaCgnYXBpL2F1dGgvYWNjZXNzVG9rZW4nLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3X2F1dGguanNvbigpXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogZGF0YS51c2VyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggIT09IDApIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH0sIFthdXRoXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj48TGluayBocmVmPVwiL1wiPjxhPkhPTUU8L2E+PC9MaW5rPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZSBjbGFzc05hbWU9XCJteC1hdXRvIG15LTRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICc1MDBweCcgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZSB8fCBzdWJtaXRTdGF0dXMuZW1haWxBbHJlYWR5RXhpc3QgPyAnIHRleHQtZGFuZ2VyJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc3VibWl0U3RhdHVzLmVtYWlsQWxyZWFkeUV4aXN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdFN0YXR1cy5lbWFpbEFscmVhZHlFeGlzdH0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNlamEgZmF6ZXIgPExpbmsgaHJlZj1cIi9lbnRyYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLCBwYXlsb2FkOiB7IHBhc3N3b3JkOiBcIlwiIH0gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ07Ds3MgbnVuY2EgdmFtb3MgY29tcGFydGlsaGFyIHNldSBlLW1haWwgY29tIG5pbmd1w6ltLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17cGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhc3N3b3JkSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY2hlY2tNZU91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwiY2hlY2tNZU91dFwiPkxlbWJyYXIgZGUgbWltPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZC1mbGV4IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDQURBU1RSQVInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=