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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/middleware/auth.js":
/*!***********************************!*\
  !*** ./assets/middleware/auth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/UserModel */ "./assets/models/UserModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Autenticação inválida: Não existe token'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, "s')sWx$TgNx2e7:r*g,2(WA.H6kDHszaDCfDz=WL`}Zyc#X5CM");
  if (!decoded) return res.status(400).json({
    err: 'Autenticação inválida: Token inválido'
  });
  const user = await _models_UserModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: decoded.id
  });
  return user;
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

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

/***/ "./pages/api/user/[id].js":
/*!********************************!*\
  !*** ./pages/api/user/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/utils/ConnectDB */ "./assets/utils/ConnectDB.js");
/* harmony import */ var _assets_middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/middleware/auth */ "./assets/middleware/auth.js");
/* harmony import */ var _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/models/UserModel */ "./assets/models/UserModel.js");



Object(_assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await updateRole(req, res);
      break;

    case "DELETE":
      await deleteUser(req, res);
      break;
  }
});

const updateRole = async (req, res) => {
  try {
    const result = await Object(_assets_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    if (result.role !== 'master admin') return res.status(400).json({
      err: 'Autenticação inválida'
    });
    const {
      id
    } = req.query;
    const {
      role
    } = req.body;
    const admin = req.body.role === 'admin' || req.body.role === 'master admin' ? true : false;
    await _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
      _id: id
    }, {
      role,
      admin
    });
    res.json({
      msg: 'Update Success'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await Object(_assets_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    if (result.role !== 'master admin') return res.status(400).json({
      err: 'Autenticação inválida'
    });
    const {
      id
    } = req.query;
    await _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findByIdAndDelete(id);
    res.json({
      msg: 'Delete Success'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvQ29ubmVjdERCLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c2VyLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwianNvbiIsImVyciIsImRlY29kZWQiLCJqd3QiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwidXNlciIsIlVzZXJzIiwiZmluZE9uZSIsIl9pZCIsImlkIiwidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsImFkbWluIiwiQm9vbGVhbiIsImF2YXRhcl9pbWFnZSIsInRpbWVzdGFtcHMiLCJkYXRhc2V0IiwibW9kZWxzIiwibW9kZWwiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsIm1ldGhvZCIsInVwZGF0ZVJvbGUiLCJkZWxldGVVc2VyIiwicmVzdWx0IiwicXVlcnkiLCJib2R5IiwiZmluZE9uZUFuZFVwZGF0ZSIsIm1zZyIsIm1lc3NhZ2UiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFB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eEIsQ0FBTjtBQUVBZixPQUFHLENBQUNLLElBQUosQ0FBUztBQUFFK0MsU0FBRyxFQUFFO0FBQVAsS0FBVDtBQUdILEdBWkQsQ0FZRSxPQUFPOUMsR0FBUCxFQUFZO0FBQ1YsV0FBT04sR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsU0FBRyxFQUFFQSxHQUFHLENBQUMrQztBQUFYLEtBQXJCLENBQVA7QUFDSDtBQUNKLENBaEJELEM7Ozs7Ozs7Ozs7O0FDckNBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS91c2VyL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS91c2VyL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwnXHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uXHJcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdBdXRlbnRpY2HDp8OjbyBpbnbDoWxpZGE6IE7Do28gZXhpc3RlIHRva2VuJyB9KVxyXG5cclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxyXG4gICAgaWYgKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdBdXRlbnRpY2HDp8OjbyBpbnbDoWxpZGE6IFRva2VuIGludsOhbGlkbycgfSlcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KVxyXG5cclxuICAgIHJldHVybiB1c2VyXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInLFxyXG4gICAgfSxcclxuICAgIGFkbWluOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJfaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG59LCB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlXHJcbn0pXHJcblxyXG5sZXQgZGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgZGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkJylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIuJylcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3V0aWxzL0Nvbm5lY3REQidcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vYXNzZXRzL21pZGRsZXdhcmUvYXV0aCdcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9tb2RlbHMvVXNlck1vZGVsJ1xyXG5cclxuY29ubmVjdERCKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZVJvbGUocmVxLCByZXMpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICAgICAgICBhd2FpdCBkZWxldGVVc2VyKHJlcSwgcmVzKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVSb2xlID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgIGlmIChyZXN1bHQucm9sZSAhPT0gJ21hc3RlciBhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ0F1dGVudGljYcOnw6NvIGludsOhbGlkYScgfSlcclxuXHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgeyByb2xlIH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IGFkbWluID0gKHJlcS5ib2R5LnJvbGUgPT09ICdhZG1pbicgfHwgcmVxLmJvZHkucm9sZSA9PT0gJ21hc3RlciBhZG1pbicpID8gdHJ1ZSA6IGZhbHNlXHJcblxyXG4gICAgICAgIGF3YWl0IFVzZXJzLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIHsgcm9sZSwgYWRtaW4gfSlcclxuXHJcbiAgICAgICAgcmVzLmpzb24oeyBtc2c6ICdVcGRhdGUgU3VjY2VzcycgfSlcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyOiBlcnIubWVzc2FnZSB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgIGlmIChyZXN1bHQucm9sZSAhPT0gJ21hc3RlciBhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ0F1dGVudGljYcOnw6NvIGludsOhbGlkYScgfSlcclxuXHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5XHJcblxyXG4gICAgICAgIGF3YWl0IFVzZXJzLmZpbmRCeUlkQW5kRGVsZXRlKGlkKVxyXG5cclxuICAgICAgICByZXMuanNvbih7IG1zZzogJ0RlbGV0ZSBTdWNjZXNzJyB9KVxyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnI6IGVyci5tZXNzYWdlIH0pXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==