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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFyLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsTm90RXhpc3QiLCJzdWJtaXRTdGF0dXMiLCJzZXRTdWJtaXRTdGF0dXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsIkFDVElPTiIsIlVQREFURV9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZExvZ2luIiwiU1RBUlRfTE9BRElORyIsInBvc3REYXRhIiwicmVzIiwiRU5EX0xPQURJTkciLCJ3cm9uZ1Bhc3N3b3JkIiwiZXJyIiwiYWxlcnQiLCJDb29raWUiLCJzZXQiLCJyZWZyZXNoVG9rZW4iLCJwYXRoIiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXREYXRhIiwibmV3X2F1dGgiLCJBVVRIIiwidG9rZW4iLCJkYXRhIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwibWF4V2lkdGgiLCJlbWFpbEFscmVhZHlFeGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxvQkFFYUMsd0RBQVUsQ0FBQ0MsOERBQUQsQ0FGdkI7QUFBQSxNQUVOQyxL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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoseUJBRkQsR0FNQztBQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUEsa0JBREo7QUErRUg7O0dBektRTCxLO1VBbUZVbUQsc0Q7OztLQW5GVm5ELEs7QUEyS01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VudHJhci45OGZjODhjMzE1ZDE0ODM5YTVjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IEFDVElPTiBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9zbm5pcGV0cy9Mb2FkaW5nJ1xyXG5pbXBvcnQgdmFsaWRMb2dpbiBmcm9tICcuLi9hc3NldHMvdXRpbHMvVmFsaWRMb2dpbic7XHJcbmltcG9ydCB7IGdldERhdGEsIHBvc3REYXRhIH0gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgY29uc3QgW3N1Ym1pdFN0YXR1cywgc2V0U3VibWl0U3RhdHVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgICAgICAgZW1haWxOb3RFeGlzdDogJycsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyRGF0YVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7IFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBjb25zdCB7IGVtYWlsTWVzc2FnZSwgcGFzc3dvcmRNZXNzYWdlIH0gPSB2YWxpZExvZ2luKHVzZXJEYXRhLmVtYWlsLCB1c2VyRGF0YS5wYXNzd29yZClcclxuXHJcbiAgICAgICAgc2V0U3VibWl0U3RhdHVzKHtcclxuICAgICAgICAgICAgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkTWVzc2FnZTogcGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChlbWFpbE1lc3NhZ2UgfHwgcGFzc3dvcmRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uU1RBUlRfTE9BRElORywgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoJ2FwaS9hdXRoL2xvZ2luJywgdXNlckRhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLkVORF9MT0FESU5HLCB9KTtcclxuXHJcbiAgICAgICAgc2V0U3VibWl0U3RhdHVzKHtcclxuICAgICAgICAgICAgZW1haWxOb3RFeGlzdDogcmVzLmVtYWlsTWVzc2FnZSxcclxuICAgICAgICAgICAgd3JvbmdQYXNzd29yZDogcmVzLnBhc3N3b3JkTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAocmVzLmVtYWlsTWVzc2FnZSB8fCByZXMucGFzc3dvcmRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzLmVycilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb29raWUuc2V0KCdyZWZyZXNoVG9rZW4nLCByZXMucmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcGkvYXV0aC9hY2Nlc3NUb2tlbicsXHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDI1XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2dpbicsIHRydWUpXHJcblxyXG4gICAgICAgIC8vc2V0IG5ldyBhdXRoXHJcbiAgICAgICAgY29uc3QgbmV3X2F1dGggPSBhd2FpdCBnZXREYXRhKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicpXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogZGF0YS51c2VyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXV0aClcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwKSByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9LCBbYXV0aF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPGRpdj48TGluayBocmVmPVwiL1wiPjxhPkhPTUU8L2E+PC9MaW5rPjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgY2xhc3NOYW1lPVwibXgtYXV0byBteS00XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnNTAwcHgnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9e2Bmb3JtLXRleHQke3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgfHwgc3VibWl0U3RhdHVzLmVtYWlsQWxyZWFkeUV4aXN0ID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHN1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0fS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2VqYSBzZSA8TGluayBocmVmPVwiL3JlZ2lzdHJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsIHBheWxvYWQ6IHsgcGFzc3dvcmQ6IFwiXCIgfSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17cGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhc3N3b3JkSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMud3JvbmdQYXNzd29yZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMud3JvbmdQYXNzd29yZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY2hlY2tNZU91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwiY2hlY2tNZU91dFwiPkxlbWJyYXIgZGUgbWltPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGQtZmxleCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRU5UUkFSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9