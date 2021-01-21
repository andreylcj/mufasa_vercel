webpackHotUpdate_N_E("pages/index",{

/***/ "./assets/utils/fetchData.js":
/*!***********************************!*\
  !*** ./assets/utils/fetchData.js ***!
  \***********************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var baseURL = "http://localhost:3000/";
var getData = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'GET',
              headers: {
                'Authorization': token
              }
            });

          case 3:
            res = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'GET'
            });

          case 8:
            res = _context.sent;

          case 9:
            _context.next = 11;
            return res.json();

          case 11:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var postData = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url, post, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 6;
              break;
            }

            _context2.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(post)
            });

          case 3:
            res = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
            });

          case 8:
            res = _context2.sent;

          case 9:
            _context2.next = 11;
            return res.json();

          case 11:
            data = _context2.sent;
            console.log(data);
            return _context2.abrupt("return", data);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postData(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var putData = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url, post, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!token) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(post)
            });

          case 3:
            res = _context3.sent;
            _context3.next = 9;
            break;

          case 6:
            _context3.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
            });

          case 8:
            res = _context3.sent;

          case 9:
            _context3.next = 11;
            return res.json();

          case 11:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function putData(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var patchData = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(url, post, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!token) {
              _context4.next = 6;
              break;
            }

            _context4.next = 3;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              },
              body: JSON.stringify(post)
            });

          case 3:
            res = _context4.sent;
            _context4.next = 9;
            break;

          case 6:
            _context4.next = 8;
            return fetch("".concat(baseURL).concat(url), {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(post)
            });

          case 8:
            res = _context4.sent;

          case 9:
            _context4.next = 11;
            return res.json();

          case 11:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function patchData(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteData = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(url, token) {
    var res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("".concat(baseURL).concat(url), {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              }
            });

          case 2:
            res = _context5.sent;
            _context5.next = 5;
            return res.json();

          case 5:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteData(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YS5qcyJdLCJuYW1lcyI6WyJiYXNlVVJMIiwicHJvY2VzcyIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJkYXRhIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicHV0RGF0YSIsInBhdGNoRGF0YSIsImRlbGV0ZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0Msd0JBQWhCO0FBRU8sSUFBTUMsT0FBTztBQUFBLDhMQUFHLGlCQUFPQyxHQUFQLEVBQVlDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRWZBLEtBRmU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHSEMsS0FBSyxXQUFJTCxPQUFKLFNBQWNHLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsS0FEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxpQ0FBaUJIO0FBRFo7QUFGeUIsYUFBckIsQ0FIRjs7QUFBQTtBQUdmSSxlQUhlO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBVUhILEtBQUssV0FBSUwsT0FBSixTQUFjRyxHQUFkLEdBQXFCO0FBQ2xDRyxvQkFBTSxFQUFFO0FBRDBCLGFBQXJCLENBVkY7O0FBQUE7QUFVZkUsZUFWZTs7QUFBQTtBQUFBO0FBQUEsbUJBZUFBLEdBQUcsQ0FBQ0MsSUFBSixFQWZBOztBQUFBO0FBZWJDLGdCQWZhO0FBQUEsNkNBZ0JaQSxJQWhCWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQUixPQUFPO0FBQUE7QUFBQTtBQUFBLEdBQWI7QUFtQkEsSUFBTVMsUUFBUTtBQUFBLCtMQUFHLGtCQUFPUixHQUFQLEVBQVlTLElBQVosRUFBa0JSLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVoQkEsS0FGZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHSkMsS0FBSyxXQUFJTCxPQUFKLFNBQWNHLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsTUFEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlosZUFGeUI7QUFNbENTLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTjRCLGFBQXJCLENBSEQ7O0FBQUE7QUFHaEJKLGVBSGdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBWUpILEtBQUssV0FBSUwsT0FBSixTQUFjRyxHQUFkLEdBQXFCO0FBQ2xDRyxvQkFBTSxFQUFFLE1BRDBCO0FBRWxDQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFgsZUFGeUI7QUFLbENNLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTDRCLGFBQXJCLENBWkQ7O0FBQUE7QUFZaEJKLGVBWmdCOztBQUFBO0FBQUE7QUFBQSxtQkFvQkRBLEdBQUcsQ0FBQ0MsSUFBSixFQXBCQzs7QUFBQTtBQW9CZEMsZ0JBcEJjO0FBcUJwQk0sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBckJvQiw4Q0FzQmJBLElBdEJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJDLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZDtBQXlCQSxJQUFNTyxPQUFPO0FBQUEsK0xBQUcsa0JBQU9mLEdBQVAsRUFBWVMsSUFBWixFQUFrQlIsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR2ZBLEtBSGU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJSEMsS0FBSyxXQUFJTCxPQUFKLFNBQWNHLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsS0FEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlosZUFGeUI7QUFNbENTLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTjRCLGFBQXJCLENBSkY7O0FBQUE7QUFJZkosZUFKZTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQWFISCxLQUFLLFdBQUlMLE9BQUosU0FBY0csR0FBZCxHQUFxQjtBQUNsQ0csb0JBQU0sRUFBRSxLQUQwQjtBQUVsQ0MscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRnlCO0FBS2xDTSxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZjtBQUw0QixhQUFyQixDQWJGOztBQUFBO0FBYWZKLGVBYmU7O0FBQUE7QUFBQTtBQUFBLG1CQXNCQUEsR0FBRyxDQUFDQyxJQUFKLEVBdEJBOztBQUFBO0FBc0JiQyxnQkF0QmE7QUFBQSw4Q0F1QlpBLElBdkJZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBRLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjtBQTBCQSxJQUFNQyxTQUFTO0FBQUEsK0xBQUcsa0JBQU9oQixHQUFQLEVBQVlTLElBQVosRUFBa0JSLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdqQkEsS0FIaUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJTEMsS0FBSyxXQUFJTCxPQUFKLFNBQWNHLEdBQWQsR0FBcUI7QUFDbENHLG9CQUFNLEVBQUUsT0FEMEI7QUFFbENDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCxpQ0FBaUJIO0FBRlosZUFGeUI7QUFNbENTLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTjRCLGFBQXJCLENBSkE7O0FBQUE7QUFJakJKLGVBSmlCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsbUJBYUxILEtBQUssV0FBSUwsT0FBSixTQUFjRyxHQUFkLEdBQXFCO0FBQ2xDRyxvQkFBTSxFQUFFLE9BRDBCO0FBRWxDQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFgsZUFGeUI7QUFLbENNLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmO0FBTDRCLGFBQXJCLENBYkE7O0FBQUE7QUFhakJKLGVBYmlCOztBQUFBO0FBQUE7QUFBQSxtQkFzQkZBLEdBQUcsQ0FBQ0MsSUFBSixFQXRCRTs7QUFBQTtBQXNCZkMsZ0JBdEJlO0FBQUEsOENBdUJkQSxJQXZCYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFUUyxTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7QUEwQkEsSUFBTUMsVUFBVTtBQUFBLCtMQUFHLGtCQUFPakIsR0FBUCxFQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRU5DLEtBQUssV0FBSUwsT0FBSixTQUFjRyxHQUFkLEdBQXFCO0FBQ3RDRyxvQkFBTSxFQUFFLFFBRDhCO0FBRXRDQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCLGtCQURYO0FBRUwsaUNBQWlCSDtBQUZaO0FBRjZCLGFBQXJCLENBRkM7O0FBQUE7QUFFbEJJLGVBRmtCO0FBQUE7QUFBQSxtQkFVSEEsR0FBRyxDQUFDQyxJQUFKLEVBVkc7O0FBQUE7QUFVaEJDLGdCQVZnQjtBQUFBLDhDQVdmQSxJQVhlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZVLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDc4NjMxMjFhZTRiNDA4NjIzNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW4sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwdXREYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcblxyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcblxyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9