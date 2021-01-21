module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/api-bend-admin/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/models/UserModel.js":
/*!************************************!*\
  !*** ./assets/models/UserModel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  admin: {
    type: Boolean,
    default: false
  },
  avatar_image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});
let dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (dataset);

/***/ }),

/***/ "./assets/utils/ConnectDB.js":
/*!***********************************!*\
  !*** ./assets/utils/ConnectDB.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Already connected');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://andrey:andj180198@cluster0.sdihk.mongodb.net/mufasa?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to MongoDB.');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "./assets/utils/GenerateToken.js":
/*!***************************************!*\
  !*** ./assets/utils/GenerateToken.js ***!
  \***************************************/
/*! exports provided: createAccessToken, createRefreshToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccessToken", function() { return createAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRefreshToken", function() { return createRefreshToken; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAccessToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "s')sWx$TgNx2e7:r*g,2(WA.H6kDHszaDCfDz=WL`}Zyc#X5CM", {
    expiresIn: '10m'
  });
};
const createRefreshToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "/^TE~?,#?s)gv'b4pRj@@E,HC<>d}(Fu48/uNK'ENv'Pj-w#n}-e`~PY`pZDDk%f'/?_8_+aV:BX!h+W", {
    expiresIn: '25d'
  });
};

/***/ }),

/***/ "./pages/api/api-bend-admin/login.js":
/*!*******************************************!*\
  !*** ./pages/api/api-bend-admin/login.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/utils/ConnectDB */ "./assets/utils/ConnectDB.js");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/models/UserModel */ "./assets/models/UserModel.js");
/* harmony import */ var _assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/utils/GenerateToken */ "./assets/utils/GenerateToken.js");




Object(_assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res);
      break;
  }
});

const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });
    if (!user) return res.status(400).json({
      emailMessage: 'Esse email não está cadastrado no sistema'
    });
    if (!user.admin) return res.status(400).json({
      emailMessage: 'Esse email não é de administrador'
    });
    const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(password, user.password);
    if (!isMatch) return res.status(400).json({
      passwordMessage: 'Senha incorreta'
    });
    const accessToken = Object(_assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__["createAccessToken"])({
      id: user._id
    });
    const refreshToken = Object(_assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__["createRefreshToken"])({
      id: user._id
    });
    res.json({
      msg: 'Login Success',
      refreshToken,
      accessToken,
      user: {
        email: user.email,
        role: user.role,
        avatar_image: user.avatar_image,
        admin: user.admin
      }
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vZGVscy9Vc2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL0Nvbm5lY3REQi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvR2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXBpLWJlbmQtYWRtaW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwiYWRtaW4iLCJCb29sZWFuIiwiYXZhdGFyX2ltYWdlIiwidGltZXN0YW1wcyIsImRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInBheWxvYWQiLCJqd3QiLCJzaWduIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwiQ29ubmVjdERCIiwicmVxIiwicmVzIiwibWV0aG9kIiwibG9naW4iLCJib2R5IiwiVXNlcnMiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVtYWlsTWVzc2FnZSIsImlzTWF0Y2giLCJiY3J5cHQiLCJjb21wYXJlIiwicGFzc3dvcmRNZXNzYWdlIiwiYWNjZXNzVG9rZW4iLCJpZCIsIl9pZCIsInJlZnJlc2hUb2tlbiIsIm1zZyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUFvQjtBQUNuQ0MsTUFBSSxFQUFFO0FBQ0ZDLFFBQUksRUFBRUMsTUFESjtBQUVGQyxZQUFRLEVBQUU7QUFGUixHQUQ2QjtBQUtuQ0MsT0FBSyxFQUFFO0FBQ0hILFFBQUksRUFBRUMsTUFESDtBQUVIQyxZQUFRLEVBQUUsSUFGUDtBQUdIRSxVQUFNLEVBQUU7QUFITCxHQUw0QjtBQVVuQ0MsVUFBUSxFQUFFO0FBQ05MLFFBQUksRUFBRUMsTUFEQTtBQUVOQyxZQUFRLEVBQUU7QUFGSixHQVZ5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LENBQUNDLE9BQVAsQ0FBZTFDLFFBQWYsRUFBeUJTLElBQUksQ0FBQ1QsUUFBOUIsQ0FBdEI7QUFDQSxRQUFJLENBQUN3QyxPQUFMLEVBQWMsT0FBT1QsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUsscUJBQWUsRUFBRTtBQUFuQixLQUFyQixDQUFQO0FBRWQsVUFBTUMsV0FBVyxHQUFHckIscUZBQWlCLENBQUM7QUFBRXNCLFFBQUUsRUFBRXBDLElBQUksQ0FBQ3FDO0FBQVgsS0FBRCxDQUFyQztBQUNBLFVBQU1DLFlBQVksR0FBR25CLHNGQUFrQixDQUFDO0FBQUVpQixRQUFFLEVBQUVwQyxJQUFJLENBQUNxQztBQUFYLEtBQUQsQ0FBdkM7QUFFQWYsT0FBRyxDQUFDTyxJQUFKLENBQVM7QUFDTFUsU0FBRyxFQUFFLGVBREE7QUFFTEQsa0JBRks7QUFHTEgsaUJBSEs7QUFJTG5DLFVBQUksRUFBRTtBQUNGWCxhQUFLLEVBQUVXLElBQUksQ0FBQ1gsS0FEVjtBQUVGRyxZQUFJLEVBQUVRLElBQUksQ0FBQ1IsSUFGVDtBQUdGSSxvQkFBWSxFQUFFSSxJQUFJLENBQUNKLFlBSGpCO0FBSUZGLGFBQUssRUFBRU0sSUFBSSxDQUFDTjtBQUpWO0FBSkQsS0FBVDtBQVlILEdBM0JELENBMkJFLE9BQU9tQixHQUFQLEVBQVk7QUFDVixXQUFPUyxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFaEIsU0FBRyxFQUFFQSxHQUFHLENBQUMyQjtBQUFYLEtBQXJCLENBQVA7QUFDSDtBQUNKLENBL0JELEM7Ozs7Ozs7Ozs7O0FDaEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9hcGktYmVuZC1hZG1pbi9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2FwaS1iZW5kLWFkbWluL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInLFxyXG4gICAgfSxcclxuICAgIGFkbWluOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJfaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG5sZXQgZGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgZGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkJylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIuJylcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFjY2Vzc1Rva2VuID0gKHBheWxvYWQpID0+IHtcclxuICAgIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7IGV4cGlyZXNJbjogJzEwbScgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZnJlc2hUb2tlbiA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuUkVGUkVTSF9UT0tFTl9TRUNSRVQsIHsgZXhwaXJlc0luOiAnMjVkJyB9KVxyXG59IiwiaW1wb3J0IENvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9hc3NldHMvdXRpbHMvQ29ubmVjdERCJ1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCdcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9tb2RlbHMvVXNlck1vZGVsJ1xyXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NUb2tlbiwgY3JlYXRlUmVmcmVzaFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3V0aWxzL0dlbmVyYXRlVG9rZW4nXHJcblxyXG5cclxuQ29ubmVjdERCKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIGF3YWl0IGxvZ2luKHJlcSwgcmVzKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWwgfSlcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVtYWlsTWVzc2FnZTogJ0Vzc2UgZW1haWwgbsOjbyBlc3TDoSBjYWRhc3RyYWRvIG5vIHNpc3RlbWEnIH0pXHJcblxyXG4gICAgICAgIGlmICghdXNlci5hZG1pbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZW1haWxNZXNzYWdlOiAnRXNzZSBlbWFpbCBuw6NvIMOpIGRlIGFkbWluaXN0cmFkb3InIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICBpZiAoIWlzTWF0Y2gpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHBhc3N3b3JkTWVzc2FnZTogJ1NlbmhhIGluY29ycmV0YScgfSlcclxuXHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBjcmVhdGVBY2Nlc3NUb2tlbih7IGlkOiB1c2VyLl9pZCB9KVxyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGNyZWF0ZVJlZnJlc2hUb2tlbih7IGlkOiB1c2VyLl9pZCB9KVxyXG5cclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgIG1zZzogJ0xvZ2luIFN1Y2Nlc3MnLFxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgICAgICAgIGF2YXRhcl9pbWFnZTogdXNlci5hdmF0YXJfaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBhZG1pbjogdXNlci5hZG1pbixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KVxyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==