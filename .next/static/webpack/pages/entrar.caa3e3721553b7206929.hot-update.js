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
          lineNumber: 146,
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
          lineNumber: 147,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 37
          }, this) : submitStatus.wrongPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.wrongPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3 form-check",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "form-check-input",
          id: "checkMeOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          htmlFor: "checkMeOut",
          children: "Lembrar de mim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'ENTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
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
            lineNumber: 186,
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
            lineNumber: 187,
            columnNumber: 25
          }, this), submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
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
                lineNumber: 201,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 51
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 41
          }, this) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "password",
            className: "d-block",
            children: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            id: "password",
            name: "password",
            onChange: handleInputChange,
            value: password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 25
          }, this), submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 37
          }, this) : submitStatus.wrongPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.wrongPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 41
          }, this) : '']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 41
            }, this)
          }, void 0, false) : 'ENTRAR'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFyLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsTm90RXhpc3QiLCJzdWJtaXRTdGF0dXMiLCJzZXRTdWJtaXRTdGF0dXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsIkFDVElPTiIsIlVQREFURV9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZExvZ2luIiwicmVzIiwiRU5EX0xPQURJTkciLCJ3cm9uZ1Bhc3N3b3JkIiwiZXJyIiwiYWxlcnQiLCJDb29raWUiLCJzZXQiLCJyZWZyZXNoVG9rZW4iLCJwYXRoIiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsIm5ld19hdXRoIiwianNvbiIsImRhdGEiLCJBVVRIIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCIsImVtYWlsQWxyZWFkeUV4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLG9CQUVhQyx3REFBVSxDQUFDQyw4REFBRCxDQUZ2QjtBQUFBLE1BRU5DLEtBRk07QUFBQSxNQUVD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O0FBQUE7QUFBQSxnQkFESixlQTZCSTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJO0FBQU8sbUJBQU8sRUFBQyxVQUFmO0FBQTBCLHFCQUFTLEVBQUMsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixjQUFFLEVBQUMsVUFBMUI7QUFBcUMsZ0JBQUksRUFBQyxVQUExQztBQUNJLG9CQUFRLEVBQUVDLGlCQURkO0FBQ2lDLGlCQUFLLEVBQUVEO0FBRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosRUFLUUgsWUFBWSxDQUFDRixlQUFiLGdCQUVRO0FBQUEsc0JBQUlFLFlBQVksQ0FBQ0Y7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGUixHQUdRRSxZQUFZLENBQUNrQixhQUFiLGdCQUVJO0FBQUEsc0JBQUlsQixZQUFZLENBQUNrQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEdBS0ksRUFicEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCSixlQThDSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUEsb0JBRVF6QixPQUFPLGdCQUVDO0FBQUEsbUNBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLDJCQUZELEdBTUM7QUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVFSjtBQUFBLGtCQURKO0FBNElIOztHQTNPUUwsSztVQXdGVW1ELHNEOzs7S0F4RlZuRCxLO0FBNk9NQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbnRyYXIuY2FhM2UzNzIxNTUzYjcyMDY5MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCBBQ1RJT04gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vc25uaXBldHMvTG9hZGluZydcclxuaW1wb3J0IHZhbGlkTG9naW4gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL1ZhbGlkTG9naW4nO1xyXG5pbXBvcnQgeyBwb3N0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIGNvbnN0IFtzdWJtaXRTdGF0dXMsIHNldFN1Ym1pdFN0YXR1c10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWxNZXNzYWdlOiAnJyxcclxuICAgICAgICBwYXNzd29yZE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGVtYWlsTm90RXhpc3Q6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGFcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbE1lc3NhZ2UsIHBhc3N3b3JkTWVzc2FnZSB9ID0gdmFsaWRMb2dpbih1c2VyRGF0YS5lbWFpbCwgdXNlckRhdGEucGFzc3dvcmQpXHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogZW1haWxNZXNzYWdlLFxyXG4gICAgICAgICAgICBwYXNzd29yZE1lc3NhZ2U6IHBhc3N3b3JkTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZW1haWxNZXNzYWdlIHx8IHBhc3N3b3JkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVyblxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5TVEFSVF9MT0FESU5HLCB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSgnL2FwaS9hdXRoL2xvZ2luJywgdXNlckRhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLkVORF9MT0FESU5HLCB9KTtcclxuXHJcbiAgICAgICAgc2V0U3VibWl0U3RhdHVzKHtcclxuICAgICAgICAgICAgZW1haWxOb3RFeGlzdDogcmVzLmVtYWlsTWVzc2FnZSxcclxuICAgICAgICAgICAgd3JvbmdQYXNzd29yZDogcmVzLnBhc3N3b3JkTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAocmVzLmVtYWlsTWVzc2FnZSB8fCByZXMucGFzc3dvcmRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcy5lcnIpIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzLmVycilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb29raWUuc2V0KCdyZWZyZXNoVG9rZW4nLCByZXMucmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcvYXBpL2F1dGgvYWNjZXNzVG9rZW4nLFxyXG4gICAgICAgICAgICBleHBpcmVzOiAyNVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0TG9naW4nLCB0cnVlKVxyXG5cclxuICAgICAgICAvL3NldCBuZXcgYXV0aFxyXG4gICAgICAgIGNvbnN0IG5ld19hdXRoID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9hY2Nlc3NUb2tlbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBuZXdfYXV0aC5qc29uKClcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLnVzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhdXRoKVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggIT09IDApIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH0sIFthdXRoXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PjxMaW5rIGhyZWY9XCIvXCI+PGE+SE9NRTwvYT48L0xpbms+PC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZSBjbGFzc05hbWU9XCJteC1hdXRvIG15LTRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICc1MDBweCcgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZSB8fCBzdWJtaXRTdGF0dXMuZW1haWxBbHJlYWR5RXhpc3QgPyAnIHRleHQtZGFuZ2VyJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc3VibWl0U3RhdHVzLmVtYWlsTm90RXhpc3QgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0U3RhdHVzLmVtYWlsTm90RXhpc3R9LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzZWphIHNlIDxMaW5rIGhyZWY9XCIvcmVnaXN0cmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgdGV4dC11bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSwgcGF5bG9hZDogeyBwYXNzd29yZDogXCJcIiB9IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWRhc3RyYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtwYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHN1Ym1pdFN0YXR1cy53cm9uZ1Bhc3N3b3JkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy53cm9uZ1Bhc3N3b3JkfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVja01lT3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjaGVja01lT3V0XCI+TGVtYnJhciBkZSBtaW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZC1mbGV4IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFTlRSQVInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZC1ibG9ja1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJkLWJsb2NrXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHN1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0fS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2VqYSBzZSA8TGluayBocmVmPVwiL3JlZ2lzdHJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSwgcGF5bG9hZDogeyBwYXNzd29yZDogXCJcIiB9IH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWRhc3RyYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImQtYmxvY2tcIj5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e3Bhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogc3VibWl0U3RhdHVzLndyb25nUGFzc3dvcmQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLndyb25nUGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFTlRSQVInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9