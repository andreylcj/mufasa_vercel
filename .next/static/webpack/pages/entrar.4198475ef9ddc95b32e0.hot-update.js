webpackHotUpdate_N_E("pages/entrar",{

/***/ "./pages/api/auth/Facebook.js":
/*!************************************!*\
  !*** ./pages/api/auth/Facebook.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Facebook; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\pages\\api\\auth\\Facebook.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Facebook = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Facebook, _Component);

  var _super = _createSuper(Facebook);

  function Facebook() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Facebook);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isLoggedin: false,
      userID: '',
      name: '',
      email: '',
      picture: ','
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "responseFacebook", function (response) {
      //console.log(response);
      _this.setState({
        isLoggedin: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "componentClicked", function () {
      return console.log("clicked");
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Facebook, [{
    key: "render",
    value: function render() {
      var fbContent;

      if (this.state.isLoggedin) {
        fbContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            width: '400px',
            margin: 'auto',
            backgroud: '#f4f4f4',
            padding: '20px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: this.state.picture,
            alt: this.state.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: [" Bem vindo ", this.state.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this);
      } else {
        fbContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_facebook_login__WEBPACK_IMPORTED_MODULE_9___default.a, {
          appId: "2790121004649262",
          autoLoad: true,
          fields: "name,email,picture",
          onClick: this.componentClicked,
          callback: this.responseFacebook
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: fbContent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this);
    }
  }]);

  return Facebook;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2F1dGgvRmFjZWJvb2suanMiXSwibmFtZXMiOlsiRmFjZWJvb2siLCJpc0xvZ2dlZGluIiwidXNlcklEIiwibmFtZSIsImVtYWlsIiwicGljdHVyZSIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJkYXRhIiwidXJsIiwiY29uc29sZSIsImxvZyIsImZiQ29udGVudCIsInN0YXRlIiwid2lkdGgiLCJtYXJnaW4iLCJiYWNrZ3JvdWQiLCJwYWRkaW5nIiwiY29tcG9uZW50Q2xpY2tlZCIsInJlc3BvbnNlRmFjZWJvb2siLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFVDtBQUNIQyxnQkFBVSxFQUFFLEtBRFQ7QUFFSEMsWUFBTSxFQUFFLEVBRkw7QUFHSEMsVUFBSSxFQUFDLEVBSEY7QUFJSEMsV0FBSyxFQUFDLEVBSkg7QUFLSEMsYUFBTyxFQUFDO0FBTEwsSzs7Mk5BUVcsVUFBQUMsUUFBUSxFQUFHO0FBQ3pCO0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1ZOLGtCQUFVLEVBQUUsSUFERjtBQUVWQyxjQUFNLEVBQUVJLFFBQVEsQ0FBQ0osTUFGUDtBQUdWQyxZQUFJLEVBQUVHLFFBQVEsQ0FBQ0gsSUFITDtBQUlWQyxhQUFLLEVBQUVFLFFBQVEsQ0FBQ0YsS0FKTjtBQUtWQyxlQUFPLEVBQUVDLFFBQVEsQ0FBQ0QsT0FBVCxDQUFpQkcsSUFBakIsQ0FBc0JDO0FBTHJCLE9BQWQ7QUFPSCxLOzsyTkFFaUI7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLENBQU47QUFBQSxLOzs7Ozs7OzZCQUVWO0FBQ0wsVUFBSUMsU0FBSjs7QUFDQSxVQUFHLEtBQUtDLEtBQUwsQ0FBV1osVUFBZCxFQUF5QjtBQUNyQlcsaUJBQVMsZ0JBQ0w7QUFBSyxlQUFLLEVBQUU7QUFDUkUsaUJBQUssRUFBRSxPQURDO0FBRVJDLGtCQUFNLEVBQUUsTUFGQTtBQUdSQyxxQkFBUyxFQUFFLFNBSEg7QUFJUkMsbUJBQU8sRUFBRTtBQUpELFdBQVo7QUFBQSxrQ0FNUTtBQUFLLGVBQUcsRUFBRSxLQUFLSixLQUFMLENBQVdSLE9BQXJCO0FBQThCLGVBQUcsRUFBRSxLQUFLUSxLQUFMLENBQVdWO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTlIsZUFPUTtBQUFBLHNDQUFnQixLQUFLVSxLQUFMLENBQVdWLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFXSCxPQVpELE1BWU07QUFDRlMsaUJBQVMsZ0JBQ0wscUVBQUMsMkRBQUQ7QUFDQSxlQUFLLEVBQUMsa0JBRE47QUFFQSxrQkFBUSxFQUFFLElBRlY7QUFHQSxnQkFBTSxFQUFDLG9CQUhQO0FBSUEsaUJBQU8sRUFBRSxLQUFLTSxnQkFKZDtBQUtBLGtCQUFRLEVBQUUsS0FBS0M7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBU0g7O0FBQ0QsMEJBQ0k7QUFBQSxrQkFDS1A7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFLSDs7OztFQXBESVEsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW50cmFyLjQxOTg0NzVlZjlkZGM5NWIzMmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbidcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNlYm9va1xyXG4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgIGlzTG9nZ2VkaW46IGZhbHNlLFxyXG4gICAgICAgICB1c2VySUQ6ICcnLFxyXG4gICAgICAgICBuYW1lOicnLFxyXG4gICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICAgcGljdHVyZTonLCdcclxuICAgICB9XHJcblxyXG4gICAgcmVzcG9uc2VGYWNlYm9vayA9IHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICBpc0xvZ2dlZGluOiB0cnVlLFxyXG4gICAgICAgICAgICAgdXNlcklEOiByZXNwb25zZS51c2VySUQsXHJcbiAgICAgICAgICAgICBuYW1lOiByZXNwb25zZS5uYW1lLFxyXG4gICAgICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmVtYWlsLFxyXG4gICAgICAgICAgICAgcGljdHVyZTogcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybFxyXG4gICAgICAgICB9KVxyXG4gICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRDbGlja2VkID0gKCkgPT4gY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZmJDb250ZW50O1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNMb2dnZWRpbil7XHJcbiAgICAgICAgICAgIGZiQ29udGVudCA9IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdWQ6ICcjZjRmNGY0JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMjBweCdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5waWN0dXJlfSBhbHQ9e3RoaXMuc3RhdGUubmFtZX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gQmVtIHZpbmRvIHt0aGlzLnN0YXRlLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBmYkNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tMb2dpblxyXG4gICAgICAgICAgICAgICAgYXBwSWQ9XCIyNzkwMTIxMDA0NjQ5MjYyXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29tcG9uZW50Q2xpY2tlZH1cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPXt0aGlzLnJlc3BvbnNlRmFjZWJvb2t9IC8+IClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtmYkNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9