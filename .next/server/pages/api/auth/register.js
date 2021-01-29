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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/register.js");
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

/***/ "./pages/api/auth/register.js":
/*!************************************!*\
  !*** ./pages/api/auth/register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/utils/ConnectDB */ "./assets/utils/ConnectDB.js");
/* harmony import */ var _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/models/UserModel */ "./assets/models/UserModel.js");
/* harmony import */ var _assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/utils/GenerateToken */ "./assets/utils/GenerateToken.js");




Object(_assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;

    default:
  }
});

const register = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    const user = await _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
      email
    });
    if (user) return res.status(405).json({
      emailMessage: 'Email já cadastrado'
    });
    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(password, 12);
    const newUser = new _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"]({
      email,
      password: passwordHash
    });
    console.log(newUser);
    await newUser.save();
    const accessToken = Object(_assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__["createAccessToken"])({
      id: newUser._id
    });
    const refreshToken = Object(_assets_utils_GenerateToken__WEBPACK_IMPORTED_MODULE_3__["createRefreshToken"])({
      id: newUser._id
    });
    res.json({
      msg: 'Register Success',
      refreshToken,
      accessToken
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message,
      status: 500
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vZGVscy9Vc2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL0Nvbm5lY3REQi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvR2VuZXJhdGVUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJhZG1pbiIsIkJvb2xlYW4iLCJhdmF0YXJfaW1hZ2UiLCJ0cmFuc2FjdGlvbnMiLCJic29uVHlwZSIsIk9iamVjdCIsIkNQRiIsIkNFSXBhc3N3b3JkIiwidGltZXN0YW1wcyIsImRhdGFzZXQiLCJtb2RlbHMiLCJ1c2VyIiwibW9kZWwiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJlcnIiLCJjcmVhdGVBY2Nlc3NUb2tlbiIsInBheWxvYWQiLCJqd3QiLCJzaWduIiwiZXhwaXJlc0luIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwiQ29ubmVjdERCIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVnaXN0ZXIiLCJib2R5IiwiVXNlcnMiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkSGFzaCIsImJjcnlwdCIsImhhc2giLCJuZXdVc2VyIiwic2F2ZSIsImFjY2Vzc1Rva2VuIiwiaWQiLCJfaWQiLCJyZWZyZXNoVG9rZW4iLCJtc2ciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FBb0I7QUFDbkNDLE1BQUksRUFBRTtBQUNGQyxRQUFJLEVBQUVDLE1BREo7QUFFRkMsWUFBUSxFQUFFO0FBRlIsR0FENkI7QUFLbkNDLE9BQUssRUFBRTtBQUNISCxRQUFJLEVBQUVDLE1BREg7QUFFSEMsWUFBUSxFQUFFLElBRlA7QUFHSEUsVUFBTSxFQUFFO0FBSEwsR0FMNEI7QUFVbkNDLFVBQVEs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QVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQUFyQixDQUFQO0FBRVYsVUFBTUMsWUFBWSxHQUFHLE1BQU1DLDZDQUFNLENBQUNDLElBQVAsQ0FBWS9DLFFBQVosRUFBc0IsRUFBdEIsQ0FBM0I7QUFFQSxVQUFNZ0QsT0FBTyxHQUFHLElBQUlSLGdFQUFKLENBQVU7QUFBRTFDLFdBQUY7QUFBU0UsY0FBUSxFQUFFNkM7QUFBbkIsS0FBVixDQUFoQjtBQUVBMUIsV0FBTyxDQUFDQyxHQUFSLENBQVk0QixPQUFaO0FBRUEsVUFBTUEsT0FBTyxDQUFDQyxJQUFSLEVBQU47QUFFQSxVQUFNQyxXQUFXLEdBQUd0QixxRkFBaUIsQ0FBQztBQUFFdUIsUUFBRSxFQUFFSCxPQUFPLENBQUNJO0FBQWQsS0FBRCxDQUFyQztBQUNBLFVBQU1DLFlBQVksR0FBR3BCLHNGQUFrQixDQUFDO0FBQUVrQixRQUFFLEVBQUVILE9BQU8sQ0FBQ0k7QUFBZCxLQUFELENBQXZDO0FBRUFoQixPQUFHLENBQUNPLElBQUosQ0FBUztBQUNQVyxTQUFHLEVBQUUsa0JBREU7QUFFUEQsa0JBRk87QUFHUEg7QUFITyxLQUFUO0FBS0QsR0F0QkQsQ0FzQkUsT0FBT3ZCLEdBQVAsRUFBWTtBQUNaLFdBQU9TLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVoQixTQUFHLEVBQUVBLEdBQUcsQ0FBQzRCLE9BQVg7QUFBb0JiLFlBQU0sRUFBRTtBQUE1QixLQUFyQixDQUFQO0FBQ0Q7QUFDRixDQTFCRCxDOzs7Ozs7Ozs7OztBQ2pCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9yZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIuanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInLFxyXG4gICAgfSxcclxuICAgIGFkbWluOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJfaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNhY3Rpb25zIDoge1xyXG4gICAgICAgIGJzb25UeXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDp7fVxyXG4gICAgfSxcclxuICAgIENQRjp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6JycsXHJcbiAgICB9LFxyXG4gICAgQ0VJcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnLFxyXG4gICAgfVxyXG59LCB7XHJcbiAgdGltZXN0YW1wczogdHJ1ZSxcclxufSk7XHJcblxyXG5sZXQgZGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgZGF0YXNldFxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB9LCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIuJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVBY2Nlc3NUb2tlbiA9IChwYXlsb2FkKSA9PiBqd3Quc2lnbihwYXlsb2FkLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULCB7IGV4cGlyZXNJbjogJzEwbScgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmcmVzaFRva2VuID0gKHBheWxvYWQpID0+IGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULCB7IGV4cGlyZXNJbjogJzI1ZCcgfSk7XHJcbiIsImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcclxuaW1wb3J0IENvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9hc3NldHMvdXRpbHMvQ29ubmVjdERCJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9tb2RlbHMvVXNlck1vZGVsJztcclxuaW1wb3J0IHsgY3JlYXRlQWNjZXNzVG9rZW4sIGNyZWF0ZVJlZnJlc2hUb2tlbiB9IGZyb20gJy4uLy4uLy4uL2Fzc2V0cy91dGlscy9HZW5lcmF0ZVRva2VuJztcclxuXHJcbkNvbm5lY3REQigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlICdQT1NUJzpcclxuICAgICAgYXdhaXQgcmVnaXN0ZXIocmVxLCByZXMpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKHVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVtYWlsTWVzc2FnZTogJ0VtYWlsIGrDoSBjYWRhc3RyYWRvJyB9KTtcclxuXHJcbiAgICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTIpO1xyXG5cclxuICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcnMoeyBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkSGFzaCB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhuZXdVc2VyKTtcclxuXHJcbiAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuXHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHsgaWQ6IG5ld1VzZXIuX2lkIH0pO1xyXG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gY3JlYXRlUmVmcmVzaFRva2VuKHsgaWQ6IG5ld1VzZXIuX2lkIH0pO1xyXG5cclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgbXNnOiAnUmVnaXN0ZXIgU3VjY2VzcycsXHJcbiAgICAgIHJlZnJlc2hUb2tlbixcclxuICAgICAgYWNjZXNzVG9rZW4sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UsIHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9