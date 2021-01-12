webpackHotUpdate_N_E("pages/entrar",{

/***/ "./pages/entrar.js":
/*!*************************!*\
  !*** ./pages/entrar.js ***!
  \*************************/
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
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snnipets/Loading */ "./snnipets/Loading.js");
/* harmony import */ var _assets_utils_ValidLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/utils/ValidLogin */ "./assets/utils/ValidLogin.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\entrar.js",
    _s = $RefreshSig$();











function Login() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__["DataContext"]),
      state = _useContext[0],
      dispatch = _useContext[1];

  var loading = state.loading;
  var userData = state.userData;
  var auth = state.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    emailMessage: '',
    passwordMessage: '',
    emailNotExist: ''
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
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].UPDATE_USER_DATA,
      payload: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value)
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _validLogin, emailMessage, passwordMessage, res, new_auth;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _validLogin = Object(_assets_utils_ValidLogin__WEBPACK_IMPORTED_MODULE_8__["default"])(userData.email, userData.password), emailMessage = _validLogin.emailMessage, passwordMessage = _validLogin.passwordMessage;
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
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].START_LOADING
              });
              _context.next = 8;
              return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_9__["postData"])('api/auth/login', userData);

            case 8:
              res = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].END_LOADING
              });
              setSubmitStatus({
                emailNotExist: res.emailMessage,
                wrongPassword: res.passwordMessage
              });

              if (!(res.emailMessage || res.passwordMessage)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return");

            case 13:
              if (!res.err) {
                _context.next = 16;
                break;
              }

              alert(res.err);
              return _context.abrupt("return");

            case 16:
              js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('refreshToken', res.refreshToken, {
                path: 'api/auth/accessToken',
                expires: 25
              });
              localStorage.setItem('firstLogin', true); //set new auth

              _context.next = 20;
              return Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_9__["getData"])('api/auth/accessToken');

            case 20:
              new_auth = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].AUTH,
                payload: {
                  token: new_auth.accessToken,
                  user: new_auth.user
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
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].UPDATE_USER_DATA,
      payload: {
        email: '',
        password: ''
      }
    });
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log(auth);
    if (Object.keys(auth).length !== 0) router.push('/');
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "HOME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
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
          lineNumber: 111,
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
          lineNumber: 112,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text".concat(submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''),
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 37
          }, this) : submitStatus.emailNotExist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [submitStatus.emailNotExist, ". Deseja se ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
              href: "/registrar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "text-primary text-underline",
                onClick: function onClick() {
                  return dispatch({
                    type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].UPDATE_USER_DATA,
                    payload: {
                      password: ""
                    }
                  });
                },
                children: "cadastrar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 51
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
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
          lineNumber: 142,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 37
          }, this) : submitStatus.wrongPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.wrongPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3 form-check",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "form-check-input",
          id: "checkMeOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          htmlFor: "checkMeOut",
          children: "Lembrar de mim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'ENTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Login, "Qvkp7norvfwZBUBN2/PCRrWZU2g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFyLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsTm90RXhpc3QiLCJzdWJtaXRTdGF0dXMiLCJzZXRTdWJtaXRTdGF0dXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsIkFDVElPTiIsIlVQREFURV9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZExvZ2luIiwiU1RBUlRfTE9BRElORyIsInBvc3REYXRhIiwicmVzIiwiRU5EX0xPQURJTkciLCJ3cm9uZ1Bhc3N3b3JkIiwiZXJyIiwiYWxlcnQiLCJDb29raWUiLCJzZXQiLCJyZWZyZXNoVG9rZW4iLCJwYXRoIiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXREYXRhIiwibmV3X2F1dGgiLCJBVVRIIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCIsImVtYWlsQWxyZWFkeUV4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLG9CQUVhQyx3REFBVSxDQUFDQyw4REFBRCxDQUZ2QjtBQUFBLE1BRU5DLEtBRk07QUFB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QUFBQTtBQUFBO0FBQUE7QUFESix5QkFGRCxHQU1DO0FBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQSxrQkFESjtBQStFSDs7R0F6S1FMLEs7VUFtRlVrRCxzRDs7O0tBbkZWbEQsSztBQTJLTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW50cmFyLmM4NmJkZTJiNmUwMmFiNzc3OGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgQUNUSU9OIGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3NubmlwZXRzL0xvYWRpbmcnXHJcbmltcG9ydCB2YWxpZExvZ2luIGZyb20gJy4uL2Fzc2V0cy91dGlscy9WYWxpZExvZ2luJztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgeyB1c2VyRGF0YSB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHsgYXV0aCB9ID0gc3RhdGVcclxuXHJcbiAgICBjb25zdCBbc3VibWl0U3RhdHVzLCBzZXRTdWJtaXRTdGF0dXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsTWVzc2FnZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmRNZXNzYWdlOiAnJyxcclxuICAgICAgICBlbWFpbE5vdEV4aXN0OiAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZXJEYXRhXHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHsgW25hbWVdOiB2YWx1ZSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZW1haWxNZXNzYWdlLCBwYXNzd29yZE1lc3NhZ2UgfSA9IHZhbGlkTG9naW4odXNlckRhdGEuZW1haWwsIHVzZXJEYXRhLnBhc3N3b3JkKVxyXG5cclxuICAgICAgICBzZXRTdWJtaXRTdGF0dXMoe1xyXG4gICAgICAgICAgICBlbWFpbE1lc3NhZ2U6IGVtYWlsTWVzc2FnZSxcclxuICAgICAgICAgICAgcGFzc3dvcmRNZXNzYWdlOiBwYXNzd29yZE1lc3NhZ2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKGVtYWlsTWVzc2FnZSB8fCBwYXNzd29yZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5TVEFSVF9MT0FESU5HLCB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSgnYXBpL2F1dGgvbG9naW4nLCB1c2VyRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uRU5EX0xPQURJTkcsIH0pO1xyXG5cclxuICAgICAgICBzZXRTdWJtaXRTdGF0dXMoe1xyXG4gICAgICAgICAgICBlbWFpbE5vdEV4aXN0OiByZXMuZW1haWxNZXNzYWdlLFxyXG4gICAgICAgICAgICB3cm9uZ1Bhc3N3b3JkOiByZXMucGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChyZXMuZW1haWxNZXNzYWdlIHx8IHJlcy5wYXNzd29yZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmVycikge1xyXG4gICAgICAgICAgICBhbGVydChyZXMuZXJyKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvb2tpZS5zZXQoJ3JlZnJlc2hUb2tlbicsIHJlcy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgcGF0aDogJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyxcclxuICAgICAgICAgICAgZXhwaXJlczogMjVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvZ2luJywgdHJ1ZSlcclxuXHJcbiAgICAgICAgLy9zZXQgbmV3IGF1dGhcclxuICAgICAgICBjb25zdCBuZXdfYXV0aCA9IGF3YWl0IGdldERhdGEoJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJylcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IG5ld19hdXRoLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbmV3X2F1dGgudXNlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGF1dGgpXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCkgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+PExpbmsgaHJlZj1cIi9cIj48YT5IT01FPC9hPjwvTGluaz48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwMHB4JyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy5lbWFpbEFscmVhZHlFeGlzdCA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdH0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNlamEgc2UgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSB0ZXh0LXVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLCBwYXlsb2FkOiB7IHBhc3N3b3JkOiBcIlwiIH0gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhZGFzdHJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e3Bhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXNzd29yZEhlbHBcIiBjbGFzc05hbWU9e2Bmb3JtLXRleHQke3N1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2UgPyAnIHRleHQtZGFuZ2VyJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc3VibWl0U3RhdHVzLndyb25nUGFzc3dvcmQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLndyb25nUGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cImNoZWNrTWVPdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImNoZWNrTWVPdXRcIj5MZW1icmFyIGRlIG1pbTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBkLWZsZXggbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VOVFJBUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==