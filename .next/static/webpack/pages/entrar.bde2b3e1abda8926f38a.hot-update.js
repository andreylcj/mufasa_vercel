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
      var _validLogin, emailMessage, passwordMessage, res, new_auth, data;

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
              return _context.abrupt("return");

            case 9:
              res = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].END_LOADING
              });
              setSubmitStatus({
                emailNotExist: res.emailMessage,
                wrongPassword: res.passwordMessage
              });

              if (!(res.emailMessage || res.passwordMessage)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return");

            case 14:
              if (!res.err) {
                _context.next = 17;
                break;
              }

              alert(res.err);
              return _context.abrupt("return");

            case 17:
              js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('refreshToken', res.refreshToken, {
                path: '/api/auth/accessToken',
                expires: 25
              });
              localStorage.setItem('firstLogin', true); //set new auth

              _context.next = 21;
              return fetch('http://localhost:3000/api/auth/accessToken', {
                method: 'GET'
              });

            case 21:
              new_auth = _context.sent;
              _context.next = 24;
              return new_auth.json();

            case 24:
              data = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].AUTH,
                payload: {
                  token: data.accessToken,
                  user: data.user
                }
              });

            case 26:
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
          lineNumber: 109,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
          lineNumber: 116,
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
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text".concat(submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''),
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 37
          }, this) : submitStatus.emailNotExist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [submitStatus.emailNotExist, ". Deseja se ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
              href: "/registrar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
                lineNumber: 131,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 51
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
          lineNumber: 146,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 37
          }, this) : submitStatus.wrongPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.wrongPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3 form-check",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "form-check-input",
          id: "checkMeOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          htmlFor: "checkMeOut",
          children: "Lembrar de mim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'ENTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container text-center p-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "d-block",
        onSubmit: handleSubmit,
        noValidate: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "d-block",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            id: "email" //aria-describedby="emailHelp" 
            ,
            name: "email",
            onChange: handleInputChange,
            value: email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, this), submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 37
          }, this) : submitStatus.emailNotExist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: [submitStatus.emailNotExist, ". Deseja se ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
              href: "/registrar",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
                lineNumber: 200,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 51
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 41
          }, this) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "password",
            className: "d-block",
            children: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            id: "password",
            name: "password",
            onChange: handleInputChange,
            value: password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this), submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 37
          }, this) : submitStatus.wrongPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.wrongPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 41
          }, this) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 41
            }, this)
          }, void 0, false) : 'ENTRAR'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFyLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsTm90RXhpc3QiLCJzdWJtaXRTdGF0dXMiLCJzZXRTdWJtaXRTdGF0dXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsIkFDVElPTiIsIlVQREFURV9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZExvZ2luIiwicmVzIiwiRU5EX0xPQURJTkciLCJ3cm9uZ1Bhc3N3b3JkIiwiZXJyIiwiYWxlcnQiLCJDb29raWUiLCJzZXQiLCJyZWZyZXNoVG9rZW4iLCJwYXRoIiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsIm5ld19hdXRoIiwianNvbiIsImRhdGEiLCJBVVRIIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCIsImVtYWlsQWxyZWFkeUV4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLG9CQUVhQyx3REFBVSxDQUFDQyw4REFBRCxDQUZ2QjtBQUFBLE1BRU5DLEtBRk07QUFBQSxNQUVD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O0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0k7QUFBTyxtQkFBTyxFQUFDLFVBQWY7QUFBMEIscUJBQVMsRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQU8sZ0JBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUUsRUFBQyxVQUExQjtBQUFxQyxnQkFBSSxFQUFDLFVBQTFDO0FBQ0ksb0JBQVEsRUFBRUMsaUJBRGQ7QUFDaUMsaUJBQUssRUFBRUQ7QUFEeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQUtRSCxZQUFZLENBQUNGLGVBQWIsZ0JBRVE7QUFBQSxzQkFBSUUsWUFBWSxDQUFDRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSLEdBR1FFLFlBQVksQ0FBQ2tCLGFBQWIsZ0JBRUk7QUFBQSxzQkFBSWxCLFlBQVksQ0FBQ2tCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosR0FLSSxFQWJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0JKLGVBOENJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQSxvQkFFUXpCLE9BQU8sZ0JBRUM7QUFBQSxtQ0FDSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosMkJBRkQsR0FNQztBQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0VKO0FBQUEsa0JBREo7QUEySUg7O0dBMU9RTCxLO1VBd0ZVbUQsc0Q7OztLQXhGVm5ELEs7QUE0T01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VudHJhci5iZGUyYjNlMWFiZGE4OTI2ZjM4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IEFDVElPTiBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9zbm5pcGV0cy9Mb2FkaW5nJ1xyXG5pbXBvcnQgdmFsaWRMb2dpbiBmcm9tICcuLi9hc3NldHMvdXRpbHMvVmFsaWRMb2dpbic7XHJcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgY29uc3QgW3N1Ym1pdFN0YXR1cywgc2V0U3VibWl0U3RhdHVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgICAgICAgZW1haWxOb3RFeGlzdDogJycsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyRGF0YVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7IFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBjb25zdCB7IGVtYWlsTWVzc2FnZSwgcGFzc3dvcmRNZXNzYWdlIH0gPSB2YWxpZExvZ2luKHVzZXJEYXRhLmVtYWlsLCB1c2VyRGF0YS5wYXNzd29yZClcclxuXHJcbiAgICAgICAgc2V0U3VibWl0U3RhdHVzKHtcclxuICAgICAgICAgICAgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkTWVzc2FnZTogcGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChlbWFpbE1lc3NhZ2UgfHwgcGFzc3dvcmRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlNUQVJUX0xPQURJTkcsIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCcvYXBpL2F1dGgvbG9naW4nLCB1c2VyRGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uRU5EX0xPQURJTkcsIH0pO1xyXG5cclxuICAgICAgICBzZXRTdWJtaXRTdGF0dXMoe1xyXG4gICAgICAgICAgICBlbWFpbE5vdEV4aXN0OiByZXMuZW1haWxNZXNzYWdlLFxyXG4gICAgICAgICAgICB3cm9uZ1Bhc3N3b3JkOiByZXMucGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChyZXMuZW1haWxNZXNzYWdlIHx8IHJlcy5wYXNzd29yZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmVycikge1xyXG4gICAgICAgICAgICBhbGVydChyZXMuZXJyKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvb2tpZS5zZXQoJ3JlZnJlc2hUb2tlbicsIHJlcy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgcGF0aDogJy9hcGkvYXV0aC9hY2Nlc3NUb2tlbicsXHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDI1XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2dpbicsIHRydWUpXHJcblxyXG4gICAgICAgIC8vc2V0IG5ldyBhdXRoXHJcbiAgICAgICAgY29uc3QgbmV3X2F1dGggPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL2FjY2Vzc1Rva2VuJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG5ld19hdXRoLmpzb24oKVxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTi5BVVRILFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgIHVzZXI6IGRhdGEudXNlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGF1dGgpXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCkgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+PExpbmsgaHJlZj1cIi9cIj48YT5IT01FPC9hPjwvTGluaz48L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwMHB4JyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZW1haWxcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy5lbWFpbEFscmVhZHlFeGlzdCA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdH0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNlamEgc2UgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsIHBheWxvYWQ6IHsgcGFzc3dvcmQ6IFwiXCIgfSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17cGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhc3N3b3JkSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMud3JvbmdQYXNzd29yZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMud3JvbmdQYXNzd29yZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY2hlY2tNZU91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwiY2hlY2tNZU91dFwiPkxlbWJyYXIgZGUgbWltPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGQtZmxleCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRU5UUkFSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImQtYmxvY2tcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZC1ibG9ja1wiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdH0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNlamEgc2UgPExpbmsgaHJlZj1cIi9yZWdpc3RyYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsIHBheWxvYWQ6IHsgcGFzc3dvcmQ6IFwiXCIgfSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtwYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHN1Ym1pdFN0YXR1cy53cm9uZ1Bhc3N3b3JkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy53cm9uZ1Bhc3N3b3JkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRU5UUkFSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==