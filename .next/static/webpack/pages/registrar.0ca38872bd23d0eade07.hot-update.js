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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);






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
              js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.set('refreshToken', res.refreshToken, {
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
          lineNumber: 101,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
          lineNumber: 107,
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
          lineNumber: 108,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text".concat(submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''),
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
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
                lineNumber: 122,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 54
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 41
          }, this) : 'Nós nunca vamos compartilhar seu e-mail com ninguém.'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
          lineNumber: 138,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 37
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'CADASTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cmFyLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsQWxyZWFkeUV4aXN0Iiwic3VibWl0U3RhdHVzIiwic2V0U3VibWl0U3RhdHVzIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInR5cGUiLCJBQ1RJT04iLCJVUERBVEVfVVNFUl9EQVRBIiwicGF5bG9hZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRSZWdpc3RlciIsIlNUQVJUX0xPQURJTkciLCJwb3N0RGF0YSIsInJlcyIsIkVORF9MT0FESU5HIiwiQ29va2llIiwic2V0IiwicmVmcmVzaFRva2VuIiwicGF0aCIsImV4cGlyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZmV0Y2giLCJtZXRob2QiLCJuZXdfYXV0aCIsImpzb24iLCJkYXRhIiwiQVVUSCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxvQkFFVUMsd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FGcEI7QUFBQSxNQUVUQyxLQUZTO0FBQUEsTUFFRkMsUUFGRTs7QUFBQSxNQUdSQyxPQUhRLEdB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Q0ksY0FBSSxFQUFDLFVBRFQ7QUFFSSxrQkFBUSxFQUFFQyxpQkFGZDtBQUVpQyxlQUFLLEVBQUVEO0FBRnhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFLSTtBQUFLLFlBQUUsRUFBQyxjQUFSO0FBQXVCLG1CQUFTLHFCQUFjSCxZQUFZLENBQUNGLGVBQWIsR0FBK0IsY0FBL0IsR0FBZ0QsRUFBOUQsQ0FBaEM7QUFBQSxvQkFFUUUsWUFBWSxDQUFDRixlQUFiLGdCQUVRO0FBQUEsc0JBQUlFLFlBQVksQ0FBQ0Y7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGUixHQUtRO0FBUGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNKLGVBd0RJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxnQ0FBaEM7QUFBQSxrQkFFUUwsT0FBTyxnQkFFQztBQUFBLGlDQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5QkFGRCxHQU1DO0FBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUE2RUg7O0dBbktRTCxRO1VBZ0ZVa0Qsc0Q7OztLQWhGVmxELFE7QUFxS01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdHJhci4wY2EzODg3MmJkMjNkMGVhZGUwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHZhbGlkUmVnaXN0ZXIgZnJvbSAnLi4vYXNzZXRzL3V0aWxzL1ZhbGlkUmVnaXN0ZXInXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3NubmlwZXRzL0xvYWRpbmcnXHJcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgY29uc3QgW3N1Ym1pdFN0YXR1cywgc2V0U3VibWl0U3RhdHVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgICAgICAgZW1haWxBbHJlYWR5RXhpc3Q6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGFcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbE1lc3NhZ2UsIHBhc3N3b3JkTWVzc2FnZSB9ID0gdmFsaWRSZWdpc3Rlcih1c2VyRGF0YS5lbWFpbCwgdXNlckRhdGEucGFzc3dvcmQpXHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogZW1haWxNZXNzYWdlLFxyXG4gICAgICAgICAgICBwYXNzd29yZE1lc3NhZ2U6IHBhc3N3b3JkTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZW1haWxNZXNzYWdlIHx8IHBhc3N3b3JkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlNUQVJUX0xPQURJTkcsIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCdhcGkvYXV0aC9yZWdpc3RlcicsIHVzZXJEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5FTkRfTE9BRElORywgfSk7XHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsQWxyZWFkeUV4aXN0OiByZXMuZW1haWxNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChyZXMuZW1haWxNZXNzYWdlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgQ29va2llLnNldCgncmVmcmVzaFRva2VuJywgcmVzLnJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICBwYXRoOiAnL2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyxcclxuICAgICAgICAgICAgZXhwaXJlczogMjVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvZ2luJywgdHJ1ZSlcclxuXHJcbiAgICAgICAgLy9zZXQgbmV3IGF1dGhcclxuICAgICAgICBjb25zdCBuZXdfYXV0aCA9IGF3YWl0IGZldGNoKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXdfYXV0aC5qc29uKClcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLnVzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCkgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PjxMaW5rIGhyZWY9XCIvXCI+PGE+SE9NRTwvYT48L0xpbms+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwMHB4JyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy5lbWFpbEFscmVhZHlFeGlzdCA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMuZW1haWxBbHJlYWR5RXhpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0U3RhdHVzLmVtYWlsQWxyZWFkeUV4aXN0fS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2VqYSBmYXplciA8TGluayBocmVmPVwiL2VudHJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsIHBheWxvYWQ6IHsgcGFzc3dvcmQ6IFwiXCIgfSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTsOzcyBudW5jYSB2YW1vcyBjb21wYXJ0aWxoYXIgc2V1IGUtbWFpbCBjb20gbmluZ3XDqW0uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtwYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVja01lT3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjaGVja01lT3V0XCI+TGVtYnJhciBkZSBtaW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBkLWZsZXggbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NBREFTVFJBUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==