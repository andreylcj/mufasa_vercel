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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/accessToken.js");
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
  },
  transactions: {
    bsonType: Object,
    default: {}
  },
  CPF: {
    type: String,
    default: ''
  },
  CEIpassword: {
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

const createAccessToken = payload => jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "s')sWx$TgNx2e7:r*g,2(WA.H6kDHszaDCfDz=WL`}Zyc#X5CM", {
  expiresIn: '10m'
});
const createRefreshToken = payload => jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign(payload, "/^TE~?,#?s)gv'b4pRj@@E,HC<>d}(Fu48/uNK'ENv'Pj-w#n}-e`~PY`pZDDk%f'/?_8_+aV:BX!h+W", {
  expiresIn: '25d'
});

/***/ }),

/***/ "./pages/api/auth/accessToken.js":
/*!***************************************!*\
  !*** ./pages/api/auth/accessToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/utils/ConnectDB */ "./assets/utils/ConnectDB.js");
/* harmony import */ var _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/models/UserModel */ "./assets/models/UserModel.js");
/* harmony import */ var _assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/utils/GenerateToken */ "./assets/utils/GenerateToken.js");
/* eslint-disable consistent-return */




Object(_assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* eslint consistent-return: "error" */

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const rf_token = req.cookies.refreshToken;
    if (!rf_token) return res.status(400).json({
      err: 'Por favor, faça login'
    });
    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(rf_token, "/^TE~?,#?s)gv'b4pRj@@E,HC<>d}(Fu48/uNK'ENv'Pj-w#n}-e`~PY`pZDDk%f'/?_8_+aV:BX!h+W");
    if (!result) return res.status(400).json({
      err: 'Seu token esta incorreto ou expirou'
    });
    const user = await _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findById(result.id);
    if (!user) return res.status(400).json({
      err: 'Usuário não existe'
    });
    const accessToken = Object(_assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__["createAccessToken"])({
      id: user._id
    });
    res.json({
      accessToken,
      user: {
        email: user.email,
        role: user.role,
        avatar_image: user.avatar_image,
        admin: user.admin,
        _id: user._id
      }
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vZGVscy9Vc2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL0Nvbm5lY3REQi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvR2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJhZG1pbiIsIkJvb2xlYW4iLCJhdmF0YXJfaW1hZ2UiLCJ0cmFuc2FjdGlvbnMiLCJic29uVHlwZSIsIk9iamVjdCIsIkNQRiIsIkNFSXBhc3N3b3JkIiwidGltZXN0YW1wcyIsImRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInBheWxvYWQiLCJqd3QiLCJzaWduIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwiQ29ubmVjdERCIiwicmVxIiwicmVzIiwicmZfdG9rZW4iLCJjb29raWVzIiwicmVmcmVzaFRva2VuIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsInZlcmlmeSIsIlVzZXJzIiwiZmluZEJ5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LFFBQUksQ0FBQ2hDLElBQUwsRUFBVyxPQUFPc0IsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRWQsU0FBRyxFQUFFO0FBQVAsS0FBckIsQ0FBUDtBQUVYLFVBQU1vQixXQUFXLEdBQUduQixxRkFBaUIsQ0FBQztBQUFFa0IsUUFBRSxFQUFFaEMsSUFBSSxDQUFDa0M7QUFBWCxLQUFELENBQXJDO0FBRUFaLE9BQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQ1BNLGlCQURPO0FBRVBqQyxVQUFJLEVBQUU7QUFDSmhCLGFBQUssRUFBRWdCLElBQUksQ0FBQ2hCLEtBRFI7QUFFSkcsWUFBSSxFQUFFYSxJQUFJLENBQUNiLElBRlA7QUFHSkksb0JBQVksRUFBRVMsSUFBSSxDQUFDVCxZQUhmO0FBSUpGLGFBQUssRUFBRVcsSUFBSSxDQUFDWCxLQUpSO0FBS0o2QyxXQUFHLEVBQUVsQyxJQUFJLENBQUNrQztBQUxOO0FBRkMsS0FBVDtBQVVELEdBdEJELENBc0JFLE9BQU9yQixHQUFQLEVBQVk7QUFDWixXQUFPUyxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFZCxTQUFHLEVBQUVBLEdBQUcsQ0FBQ3NCO0FBQVgsS0FBckIsQ0FBUDtBQUNEO0FBQ0YsQ0ExQkQsRTs7Ozs7Ozs7Ozs7QUNUQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9hY2Nlc3NUb2tlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvYWNjZXNzVG9rZW4uanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInLFxyXG4gICAgfSxcclxuICAgIGFkbWluOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJfaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNhY3Rpb25zIDoge1xyXG4gICAgICAgIGJzb25UeXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDp7fVxyXG4gICAgfSxcclxuICAgIENQRjp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6JycsXHJcbiAgICB9LFxyXG4gICAgQ0VJcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnLFxyXG4gICAgfVxyXG59LCB7XHJcbiAgdGltZXN0YW1wczogdHJ1ZSxcclxufSk7XHJcblxyXG5sZXQgZGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgZGF0YXNldFxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB9LCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIuJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBY2Nlc3NUb2tlbiA9IChwYXlsb2FkKSA9PiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7IGV4cGlyZXNJbjogJzEwbScgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULCB7IGV4cGlyZXNJbjogJzI1ZCcgfSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IENvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9hc3NldHMvdXRpbHMvQ29ubmVjdERCJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9tb2RlbHMvVXNlck1vZGVsJztcclxuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4gfSBmcm9tICcuLi8uLi8uLi9hc3NldHMvdXRpbHMvR2VuZXJhdGVUb2tlbic7XHJcblxyXG5Db25uZWN0REIoKTtcclxuXHJcbi8qIGVzbGludCBjb25zaXN0ZW50LXJldHVybjogXCJlcnJvclwiICovXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZl90b2tlbiA9IHJlcS5jb29raWVzLnJlZnJlc2hUb2tlbjtcclxuICAgIGlmICghcmZfdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1BvciBmYXZvciwgZmHDp2EgbG9naW4nIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGp3dC52ZXJpZnkocmZfdG9rZW4sIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVUKTtcclxuICAgIGlmICghcmVzdWx0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdTZXUgdG9rZW4gZXN0YSBpbmNvcnJldG8gb3UgZXhwaXJvdScgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRCeUlkKHJlc3VsdC5pZCk7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ1VzdcOhcmlvIG7Do28gZXhpc3RlJyB9KTtcclxuXHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHsgaWQ6IHVzZXIuX2lkIH0pO1xyXG5cclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgYWNjZXNzVG9rZW4sXHJcbiAgICAgIHVzZXI6IHtcclxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgYXZhdGFyX2ltYWdlOiB1c2VyLmF2YXRhcl9pbWFnZSxcclxuICAgICAgICBhZG1pbjogdXNlci5hZG1pbixcclxuICAgICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=