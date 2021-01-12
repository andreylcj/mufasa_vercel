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
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["default"].UPDATE_USER_DATA,
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
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["default"].START_LOADING
              });
              _context.next = 8;
              return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__["postData"])('api/auth/register', userData);

            case 8:
              res = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["default"].END_LOADING
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
              _context.next = 15;
              return fetch('api/auth/accessToken', {
                method: 'GET'
              });

            case 15:
              new_auth = _context.sent;
              _context.next = 18;
              return new_auth.json();

            case 18:
              data = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["default"].AUTH,
                payload: {
                  token: data.accessToken,
                  user: data.user
                }
              });

            case 20:
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
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["default"].UPDATE_USER_DATA,
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
          lineNumber: 94,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
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
          lineNumber: 100,
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
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text".concat(submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''),
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 37
          }, this) : submitStatus.emailAlreadyExist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [submitStatus.emailAlreadyExist, ". Deseja fazer ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/entrar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "",
                onClick: function onClick() {
                  return dispatch({
                    type: _store_Actions__WEBPACK_IMPORTED_MODULE_9__["default"].UPDATE_USER_DATA,
                    payload: {
                      password: ""
                    }
                  });
                },
                children: "login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 54
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 41
          }, this) : 'Nós nunca vamos compartilhar seu e-mail com ninguém.'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
          lineNumber: 131,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 37
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3 form-check",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "form-check-input",
          id: "checkMeOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          htmlFor: "checkMeOut",
          children: "Lembrar de mim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'CADASTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cmFyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsQWxyZWFkeUV4aXN0Iiwic3VibWl0U3RhdHVzIiwic2V0U3VibWl0U3RhdHVzIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInR5cGUiLCJBQ1RJT04iLCJVUERBVEVfVVNFUl9EQVRBIiwicGF5bG9hZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRSZWdpc3RlciIsIlNUQVJUX0xPQURJTkciLCJwb3N0RGF0YSIsInJlcyIsIkVORF9MT0FESU5HIiwiZmV0Y2giLCJtZXRob2QiLCJuZXdfYXV0aCIsImpzb24iLCJkYXRhIiwiQVVUSCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLG9CQUVVQyx3REFBVSxDQUFDQywrREFBRCxDQUZwQjtBQUFBLE1BRVRDLEtBRlM7QUFBQSxNQUVGQyxRQUZFOztBQUFBLE1BR1JDLE9BSFEsR0FHSUYsS0FISixDQUdSRSxPQUhRO0FBQUEsTUFJUkMsUUFKUSxHQUlLSCxLQUpMLENBSVJHLFFBSlE7QUFBQSxNQUtSQyxJQUxRLEdBS0NK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LEdBS1E7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0osZUFrREk7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0k7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBUyxFQUFDLGtCQUFqQztBQUFvRCxZQUFFLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU8sbUJBQVMsRUFBQyxrQkFBakI7QUFBb0MsaUJBQU8sRUFBQyxZQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREosZUFzREk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLGdDQUFoQztBQUFBLGtCQUVRTCxPQUFPLGdCQUVDO0FBQUEsaUNBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlCQUZELEdBTUM7QUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQTJFSDs7R0EzSlFMLFE7VUEwRVUyQyxzRDs7O0tBMUVWM0MsUTtBQTZKTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmFyLmFkNDU1ZDU5NDcyNDgwYmM2YTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdmFsaWRSZWdpc3RlciBmcm9tICcuLi9hc3NldHMvdXRpbHMvVmFsaWRSZWdpc3RlcidcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vc25uaXBldHMvTG9hZGluZydcclxuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFDVElPTiBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgY29uc3QgW3N1Ym1pdFN0YXR1cywgc2V0U3VibWl0U3RhdHVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgICAgICAgZW1haWxBbHJlYWR5RXhpc3Q6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGFcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbE1lc3NhZ2UsIHBhc3N3b3JkTWVzc2FnZSB9ID0gdmFsaWRSZWdpc3Rlcih1c2VyRGF0YS5lbWFpbCwgdXNlckRhdGEucGFzc3dvcmQpXHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogZW1haWxNZXNzYWdlLFxyXG4gICAgICAgICAgICBwYXNzd29yZE1lc3NhZ2U6IHBhc3N3b3JkTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZW1haWxNZXNzYWdlIHx8IHBhc3N3b3JkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlNUQVJUX0xPQURJTkcsIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCdhcGkvYXV0aC9yZWdpc3RlcicsIHVzZXJEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5FTkRfTE9BRElORywgfSk7XHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsQWxyZWFkeUV4aXN0OiByZXMuZW1haWxNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChyZXMuZW1haWxNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgLy9zZXQgbmV3IGF1dGhcclxuICAgICAgICBjb25zdCBuZXdfYXV0aCA9IGF3YWl0IGZldGNoKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXdfYXV0aC5qc29uKClcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLnVzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCkgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PjxMaW5rIGhyZWY9XCIvXCI+PGE+SE9NRTwvYT48L0xpbms+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwMHB4JyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy5lbWFpbEFscmVhZHlFeGlzdCA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMuZW1haWxBbHJlYWR5RXhpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0U3RhdHVzLmVtYWlsQWxyZWFkeUV4aXN0fS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2VqYSBmYXplciA8TGluayBocmVmPVwiL2VudHJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsIHBheWxvYWQ6IHsgcGFzc3dvcmQ6IFwiXCIgfSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTsOzcyBudW5jYSB2YW1vcyBjb21wYXJ0aWxoYXIgc2V1IGUtbWFpbCBjb20gbmluZ3XDqW0uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtwYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVja01lT3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjaGVja01lT3V0XCI+TGVtYnJhciBkZSBtaW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZC1mbGV4IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDQURBU1RSQVInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=