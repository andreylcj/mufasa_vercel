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
                path: '/api/auth/accessToken',
                expires: 25
              });
              localStorage.setItem('firstLogin', true); //set new auth

              _context.next = 20;
              return fetch('http://localhost:3000/api/auth/accessToken', {
                method: 'GET'
              });

            case 20:
              new_auth = _context.sent;
              _context.next = 23;
              return new_auth.json();

            case 23:
              data = _context.sent;
              dispatch({
                type: _store_Actions__WEBPACK_IMPORTED_MODULE_6__["default"].AUTH,
                payload: {
                  token: data.accessToken,
                  user: data.user
                }
              });

            case 25:
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
          lineNumber: 107,
          columnNumber: 33
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
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
          lineNumber: 114,
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
          lineNumber: 115,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: "form-text".concat(submitStatus.emailMessage || submitStatus.emailAlreadyExist ? ' text-danger' : ''),
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
                lineNumber: 129,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 51
            }, this), "?"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
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
          lineNumber: 145,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: "form-text".concat(submitStatus.passwordMessage ? ' text-danger' : ''),
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 37
          }, this) : submitStatus.wrongPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.wrongPassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 41
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3 form-check",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          className: "form-check-input",
          id: "checkMeOut"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "form-check-label",
          htmlFor: "checkMeOut",
          children: "Lembrar de mim"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'ENTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW50cmFyLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJ1c2VTdGF0ZSIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsImVtYWlsTm90RXhpc3QiLCJzdWJtaXRTdGF0dXMiLCJzZXRTdWJtaXRTdGF0dXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsIkFDVElPTiIsIlVQREFURV9VU0VSX0RBVEEiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZExvZ2luIiwiU1RBUlRfTE9BRElORyIsInBvc3REYXRhIiwicmVzIiwiRU5EX0xPQURJTkciLCJ3cm9uZ1Bhc3N3b3JkIiwiZXJyIiwiYWxlcnQiLCJDb29raWUiLCJzZXQiLCJyZWZyZXNoVG9rZW4iLCJwYXRoIiwiZXhwaXJlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsIm5ld19hdXRoIiwianNvbiIsImRhdGEiLCJBVVRIIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInB1c2giLCJtYXhXaWR0aCIsImVtYWlsQWxyZWFkeUV4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLG9CQUVhQyx3REFBVSxDQUFDQyw4REFBRCxDQUZ2QjtBQUFBLE1BRU5DLEtBRk07QUFBQSxNQUVDQyxRQUZEOztBQUFBLE1BR0xDLE9BSEssR0FHT0YsS0FIUCxDQUdMRSxPQUhLO0FBQUEsTUFJTEMsUUFKSyxHQUlRSCxLQUpSLENBSUxHLFFBSks7QUFBQSxNQUtMQyxJQUxLLEdBS0lKLEtBTEosQ0FLTEksSUFMSzs7QUFBQSxrQkFPMkJDLHNEQUFRLENBQUM7QUFDN0NDLGdCQUFZLEVBQUUsRUFEK0I7QUFFN0NDLG1CQUFlLEVBQUUsRUFGNEI7QUFHN0NDLGlCQUFhLEVBQUU7QUFIOEIsR0FBRCxDQVBuQztBQUFBLE1BT05DLFlBUE07QUFBQSxNQU9RQyxlQVBSOztBQUFBLE1BYUxDLEtBYkssR0FhZVIsUUFiZixDQWFMUSxLQWJLO0FBQUEsTUFhRUMsUUFiRixHQWFlVCxRQWJmLENBYUVTLFFBYkY7O0FBZWIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxDQUFDLEVBQUk7QUFBQSxvQkFDSEEsQ0FBQyxDQUFDQyxNQURDO0FBQUEsUUFDbkJDLElBRG1CLGFBQ25CQSxJQURtQjtBQUFBLFFBQ2JDLEtBRGEsYUFDYkEsS0FEYTtBQUUzQmhCLFlBQVEsQ0FBQztBQUNMaUIsVUFBSSxFQUFFQyxzREFBTSxDQUFDQyxnQkFEUjtBQUVMQyxhQUFPLEVBQUUsOEZBQUdMLElBQUwsRUFBWUMsS0FBWjtBQUZGLEtBQUQsQ0FBUjtBQUlILEdBTkQ7O0FBUUEsTUFBTUssWUFBWTtBQUFBLGdNQUFHLGlCQUFNUixDQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJBLGVBQUMsQ0FBQ1MsY0FBRjtBQURpQiw0QkFHeUJDLHdFQUFVLENBQUNyQixRQUFRLENBQUNRLEtBQVYsRUFBaUJSLFFBQVEsQ0FBQ1MsUUFBMUIsQ0FIbkMsRUFHVE4sWUFIUyxlQUdUQSxZQUhTLEVBR0tDLGVBSEwsZUFHS0EsZUFITDtBQUtqQkcsNkJBQWUsQ0FBQztBQUNaSiw0QkFBWSxFQUFFQSxZQURGO0FBRVpDLCtCQUFlLEVBQUVBO0FBRkwsZUFBRCxDQUFmOztBQUxpQixvQkFVYkQsWUFBWSxJQUFJQyxlQVZIO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBY2pCTixzQkFBUSxDQUFDO0FBQUVpQixvQkFBSSxFQUFFQyxzREFBTSxDQUFDTTtBQUFmLGVBQUQsQ0FBUjtBQWRpQjtBQUFBLHFCQWVDQyx3RUFBUSxDQUFDLGdCQUFELEVBQW1CdkIsUUFBbkIsQ0FmVDs7QUFBQTtBQWVYd0IsaUJBZlc7QUFnQmpCMUIsc0JBQVEsQ0FBQztBQUFFaUIsb0JBQUksRUFBRUMsc0RBQU0sQ0FBQ1M7QUFBZixlQUFELENBQVI7QUFFQWxCLDZCQUFlLENBQUM7QUFDWkYsNkJBQWEsRUFBRW1CLEdBQUcsQ0FBQ3JCLFlBRFA7QUFFWnVCLDZCQUFhLEVBQUVGLEdBQUcsQ0FBQ3BCO0FBRlAsZUFBRCxDQUFmOztBQWxCaUIsb0JBdUJib0IsR0FBRyxDQUFDckIsWUFBSixJQUFvQnFCLEdBQUcsQ0FBQ3BCLGVBdkJYO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsbUJBMkJib0IsR0FBRyxDQUFDRyxHQTNCUztBQUFBO0FBQUE7QUFBQTs7QUE0QmJDLG1CQUFLLENBQUNKLEdBQUcsQ0FBQ0csR0FBTCxDQUFMO0FBNUJhOztBQUFBO0FBZ0NqQkUsK0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLGNBQVgsRUFBMkJOLEdBQUcsQ0FBQ08sWUFBL0IsRUFBNkM7QUFDekNDLG9CQUFJLEVBQUUsdUJBRG1DO0FBRXpDQyx1QkFBTyxFQUFFO0FBRmdDLGVBQTdDO0FBSUFDLDBCQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUMsSUFBbkMsRUFwQ2lCLENBc0NqQjs7QUF0Q2lCO0FBQUEscUJBdUNNQyxLQUFLLENBQUMsNENBQUQsRUFBK0M7QUFDdkVDLHNCQUFNLEVBQUU7QUFEK0QsZUFBL0MsQ0F2Q1g7O0FBQUE7QUF1Q1hDLHNCQXZDVztBQUFBO0FBQUEscUJBMENFQSxRQUFRLENBQUNDLElBQVQsRUExQ0Y7O0FBQUE7QUEwQ1hDLGtCQTFDVztBQTRDakIxQyxzQkFBUSxDQUFDO0FBQ0xpQixvQkFBSSxFQUFFQyxzREFBTSxDQUFDeUIsSUFEUjtBQUVMdkIsdUJBQU8sRUFBRTtBQUNMd0IsdUJBQUssRUFBRUYsSUFBSSxDQUFDRyxXQURQO0FBRUxDLHNCQUFJLEVBQUVKLElBQUksQ0FBQ0k7QUFGTjtBQUZKLGVBQUQsQ0FBUjs7QUE1Q2lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVp6QixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXFEQTBCLHlEQUFTLENBQUMsWUFBTTtBQUNaL0MsWUFBUSxDQUFDO0FBQ0xpQixVQUFJLEVBQUVDLHNEQUFNLENBQUNDLGdCQURSO0FBRUxDLGFBQU8sRUFBRTtBQUNMVixhQUFLLEVBQUUsRUFERjtBQUVMQyxnQkFBUSxFQUFFO0FBRkw7QUFGSixLQUFELENBQVI7QUFPSCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsTUFBTXFDLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFFQUYseURBQVMsQ0FBQyxZQUFNO0FBQ1pHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaEQsSUFBWjtBQUNBLFFBQUlpRCxNQUFNLENBQUNDLElBQVAsQ0FBWWxELElBQVosRUFBa0JtRCxNQUFsQixLQUE2QixDQUFqQyxFQUFvQ04sTUFBTSxDQUFDTyxJQUFQLENBQVksR0FBWjtBQUN2QyxHQUhRLEVBR04sQ0FBQ3BELElBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0k7QUFBQSw0QkFFSTtBQUFBLDZCQUFLLHFFQUFDLGlEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFLSTtBQUFNLGNBQVEsRUFBRWtCLFlBQWhCO0FBQThCLGdCQUFVLE1BQXhDO0FBQXlDLGVBQVMsRUFBQyxjQUFuRDtBQUNJLFdBQUssRUFBRTtBQUFFbUMsZ0JBQVEsRUFBRTtBQUFaLE9BRFg7QUFBQSw4QkFHSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxPQUFmO0FBQXVCLG1CQUFTLEVBQUMsWUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLG1CQUFTLEVBQUMsY0FBOUI7QUFBNkMsWUFBRSxFQUFDLE9BQWhEO0FBQXdELDhCQUFpQixXQUF6RTtBQUNJLGNBQUksRUFBQyxPQURUO0FBRUksa0JBQVEsRUFBRTVDLGlCQUZkO0FBRWlDLGVBQUssRUFBRUY7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQU1JO0FBQUssWUFBRSxFQUFDLFdBQVI7QUFBb0IsbUJBQVMscUJBQWNGLFlBQVksQ0FBQ0gsWUFBYixJQUE2QkcsWUFBWSxDQUFDaUQsaUJBQTFDLEdBQThELGNBQTlELEdBQStFLEVBQTdGLENBQTdCO0FBQUEsb0JBRVFqRCxZQUFZLENBQUNILFlBQWIsZ0JBRVE7QUFBQSxzQkFBSUcsWUFBWSxDQUFDSDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSLEdBR1FHLFlBQVksQ0FBQ0QsYUFBYixnQkFFSTtBQUFBLHVCQUNLQyxZQUFZLENBQUNELGFBRGxCLCtCQUVVLHFFQUFDLGlEQUFEO0FBQU0sa0JBQUksRUFBQyxZQUFYO0FBQUEscUNBQ0Y7QUFDSSx5QkFBUyxFQUFDLDZCQURkO0FBRUksdUJBQU8sRUFBRTtBQUFBLHlCQUFNUCxRQUFRLENBQUM7QUFBRWlCLHdCQUFJLEVBQUVDLHNEQUFNLENBQUNDLGdCQUFmO0FBQWlDQywyQkFBTyxFQUFFO0FBQUVULDhCQUFRLEVBQUU7QUFBWjtBQUExQyxtQkFBRCxDQUFkO0FBQUEsaUJBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixHQWNJO0FBbkJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBaUNJO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0k7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBMEIsbUJBQVMsRUFBQyxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQVMsRUFBQyxjQUFqQztBQUFnRCxZQUFFLEVBQUMsVUFBbkQ7QUFDSSxjQUFJLEVBQUMsVUFEVDtBQUVJLGtCQUFRLEVBQUVDLGlCQUZkO0FBRWlDLGVBQUssRUFBRUQ7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUtJO0FBQUssWUFBRSxFQUFDLGNBQVI7QUFBdUIsbUJBQVMscUJBQWNILFlBQVksQ0FBQ0YsZUFBYixHQUErQixjQUEvQixHQUFnRCxFQUE5RCxDQUFoQztBQUFBLG9CQUVRRSxZQUFZLENBQUNGLGVBQWIsZ0JBRVE7QUFBQSxzQkFBSUUsWUFBWSxDQUFDRjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZSLEdBR1FFLFlBQVksQ0FBQ29CLGFBQWIsZ0JBRUk7QUFBQSxzQkFBSXBCLFlBQVksQ0FBQ29CO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosR0FLSTtBQVZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDSixlQXFESTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLG1CQUFTLEVBQUMsa0JBQWpDO0FBQW9ELFlBQUUsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxtQkFBUyxFQUFDLGtCQUFqQjtBQUFvQyxpQkFBTyxFQUFDLFlBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJESixlQXlESTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMsZ0NBQWhDO0FBQUEsa0JBRVEzQixPQUFPLGdCQUVDO0FBQUEsaUNBQ0kscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlCQUZELEdBTUM7QUFSaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBLGtCQURKO0FBK0VIOztHQTVLUUwsSztVQXNGVXFELHNEOzs7S0F0RlZyRCxLO0FBOEtNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbnRyYXIuYmUxNzIzOTZkMTY2MDI5M2U5NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCBBQ1RJT04gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vc25uaXBldHMvTG9hZGluZydcclxuaW1wb3J0IHZhbGlkTG9naW4gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL1ZhbGlkTG9naW4nO1xyXG5pbXBvcnQgeyBwb3N0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGxvYWRpbmcgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBzdGF0ZVxyXG4gICAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIGNvbnN0IFtzdWJtaXRTdGF0dXMsIHNldFN1Ym1pdFN0YXR1c10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWxNZXNzYWdlOiAnJyxcclxuICAgICAgICBwYXNzd29yZE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGVtYWlsTm90RXhpc3Q6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGFcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDogeyBbbmFtZV06IHZhbHVlIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbE1lc3NhZ2UsIHBhc3N3b3JkTWVzc2FnZSB9ID0gdmFsaWRMb2dpbih1c2VyRGF0YS5lbWFpbCwgdXNlckRhdGEucGFzc3dvcmQpXHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogZW1haWxNZXNzYWdlLFxyXG4gICAgICAgICAgICBwYXNzd29yZE1lc3NhZ2U6IHBhc3N3b3JkTWVzc2FnZSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZW1haWxNZXNzYWdlIHx8IHBhc3N3b3JkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlNUQVJUX0xPQURJTkcsIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCdhcGkvYXV0aC9sb2dpbicsIHVzZXJEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5FTkRfTE9BRElORywgfSk7XHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsTm90RXhpc3Q6IHJlcy5lbWFpbE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHdyb25nUGFzc3dvcmQ6IHJlcy5wYXNzd29yZE1lc3NhZ2UsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKHJlcy5lbWFpbE1lc3NhZ2UgfHwgcmVzLnBhc3N3b3JkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMuZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcy5lcnIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29va2llLnNldCgncmVmcmVzaFRva2VuJywgcmVzLnJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICBwYXRoOiAnL2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyxcclxuICAgICAgICAgICAgZXhwaXJlczogMjVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvZ2luJywgdHJ1ZSlcclxuXHJcbiAgICAgICAgLy9zZXQgbmV3IGF1dGhcclxuICAgICAgICBjb25zdCBuZXdfYXV0aCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvYWNjZXNzVG9rZW4nLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3X2F1dGguanNvbigpXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiBkYXRhLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogZGF0YS51c2VyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQSxcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXV0aClcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwKSByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9LCBbYXV0aF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPGRpdj48TGluayBocmVmPVwiL1wiPjxhPkhPTUU8L2E+PC9MaW5rPjwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgY2xhc3NOYW1lPVwibXgtYXV0byBteS00XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnNTAwcHgnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RS1tYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9e2Bmb3JtLXRleHQke3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgfHwgc3VibWl0U3RhdHVzLmVtYWlsQWxyZWFkeUV4aXN0ID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IHN1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0fS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2VqYSBzZSA8TGluayBocmVmPVwiL3JlZ2lzdHJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHRleHQtdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsIHBheWxvYWQ6IHsgcGFzc3dvcmQ6IFwiXCIgfSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB2YWx1ZT17cGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhc3N3b3JkSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5wYXNzd29yZE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBzdWJtaXRTdGF0dXMud3JvbmdQYXNzd29yZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXRTdGF0dXMud3JvbmdQYXNzd29yZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIGZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY2hlY2tNZU91dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwiY2hlY2tNZU91dFwiPkxlbWJyYXIgZGUgbWltPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGQtZmxleCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRU5UUkFSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9