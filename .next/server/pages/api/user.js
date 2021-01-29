module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/index.js");
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

/***/ "./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/utils/ConnectDB */ "./assets/utils/ConnectDB.js");
/* harmony import */ var _assets_middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/middleware/auth */ "./assets/middleware/auth.js");
/* harmony import */ var _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/models/UserModel */ "./assets/models/UserModel.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




Object(_assets_utils_ConnectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getUsers(req, res);
      break;

    case "PATCH":
      await uploadInfor(req, res);
      break;
  }
});

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = _objectSpread({}, this.queryString);

    const excludeFields = ['sort'];
    excludeFields.forEach(el => delete queryObj[el]);
    if (queryObj.role !== 'all' && queryObj.role) this.query.find({
      role: queryObj.role
    });
    if (queryObj.search !== 'all' && queryObj.search) this.query.find({
      email: {
        $regex: queryObj.search
      }
    });
    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

}

const getUsers = async (req, res) => {
  try {
    const result = await Object(_assets_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    if (result.role !== 'admin' && result.role !== 'master admin') return res.status(400).json({
      err: 'Autenticação inválida'
    });
    const features = new APIfeatures(_assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].find().select('-password'), req.query).filtering().sorting();
    const users = await features.query;
    res.json({
      users
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const uploadInfor = async (req, res) => {
  try {
    const result = await Object(_assets_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const {
      CPF,
      CEIpassword
    } = req.body;
    const newUser = await _assets_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["default"].findOneAndUpdate({
      _id: result.id
    }, {
      CPF,
      CEIpassword
    }).select("-password");
    res.json({
      message: "Update Success",
      user: {
        name: newUser.name,
        email: newUser.email,
        CPF,
        CEIpassword,
        role: newUser.role
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW9kZWxzL1VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvQ29ubmVjdERCLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c2VyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJ1c2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0IiwiYWRtaW4iLCJCb29sZWFuIiwiYXZhdGFyX2ltYWdlIiwidHJhbnNhY3Rpb25zIiwiYnNvblR5cGUiLCJPYmplY3QiLCJDUEYiLCJDRUlwYXNzd29yZCIsInRpbWVzdGFtcHMiLCJkYXRhc2V0IiwibW9kZWxzIiwibW9kZWwiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsIm1ldGhvZCIsImdldFVzZXJzIiwidXBsb2FkSW5mb3IiLCJBUElmZWF0dXJlcyIsImNvbnN0cnVjdG9yIiwicXVlcnkiLCJxdWVyeVN0cmluZyIsImZpbHRlcmluZyIsInF1ZXJ5T2JqIiwiZXhjbHVkZUZpZWxkcyIsImZvckVhY2giLCJlbCIsImZpbmQiLCJzZWFyY2giLCIkcmVnZXgiLCJzb3J0aW5nIiwic29ydCIsInNvcnRCeSIsInNwbGl0Iiwiam9pbiIsInJlc3VsdCIsImZlYXR1cmVzIiwic2VsZWN0IiwidXNlcnMiLCJtZXNzYWdlIiwiYm9keSIsIm5ld1VzZXIiLCJmaW5kT25lQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLGFBQTFCO0FBQ0EsTUFBSSxDQUFD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WCxLQUFyQixDQUFQO0FBQ0g7QUFDSixDQWZEOztBQWlCQSxNQUFNdEIsV0FBVyxHQUFHLE9BQU9yRCxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDcEMsTUFBSTtBQUVBLFVBQU1zRSxNQUFNLEdBQUUsTUFBTXhFLHVFQUFJLENBQUVDLEdBQUYsRUFBTUMsR0FBTixDQUF4QjtBQUVBLFVBQU07QUFBQ2tDLFNBQUQ7QUFBTUM7QUFBTixRQUFvQnBDLEdBQUcsQ0FBQzRFLElBQTlCO0FBRUEsVUFBTUMsT0FBTyxHQUFHLE1BQU1oRSxnRUFBSyxDQUFDaUUsZ0JBQU4sQ0FBdUI7QUFBQy9ELFNBQUcsRUFBQ3dELE1BQU0sQ0FBQ3ZEO0FBQVosS0FBdkIsRUFBdUM7QUFBQ21CLFNBQUQ7QUFBTUM7QUFBTixLQUF2QyxFQUEyRHFDLE1BQTNELENBQWtFLFdBQWxFLENBQXRCO0FBRUF4RSxPQUFHLENBQUNLLElBQUosQ0FBUztBQUNMcUUsYUFBTyxFQUFFLGdCQURKO0FBRUwvRCxVQUFJLEVBQUU7QUFDRlEsWUFBSSxFQUFDeUQsT0FBTyxDQUFDekQsSUFEWDtBQUVGSSxhQUFLLEVBQUNxRCxPQUFPLENBQUNyRCxLQUZaO0FBR0ZXLFdBSEU7QUFJRkMsbUJBSkU7QUFLRlQsWUFBSSxFQUFDa0QsT0FBTyxDQUFDbEQ7QUFMWDtBQUZELEtBQVQ7QUFZSCxHQXBCRCxDQW9CQyxPQUFPcEIsR0FBUCxFQUFXO0FBQ1IsV0FBT04sR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsU0FBRyxFQUFFQSxHQUFHLENBQUNvRTtBQUFWLEtBQXJCLENBQVA7QUFDSDtBQUNKLENBeEJELEM7Ozs7Ozs7Ozs7O0FDakVBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS91c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwnO1xyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuICBpZiAoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnI6ICdBdXRlbnRpY2HDp8OjbyBpbnbDoWxpZGE6IE7Do28gZXhpc3RlIHRva2VuJyB9KTtcclxuXHJcbiAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpO1xyXG4gIGlmICghZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyOiAnQXV0ZW50aWNhw6fDo28gaW52w6FsaWRhOiBUb2tlbiBpbnbDoWxpZG8nIH0pO1xyXG5cclxuICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7IF9pZDogZGVjb2RlZC5pZCB9KTtcclxuXHJcbiAgcmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInLFxyXG4gICAgfSxcclxuICAgIGFkbWluOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJfaW1hZ2U6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNhY3Rpb25zIDoge1xyXG4gICAgICAgIGJzb25UeXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDp7fVxyXG4gICAgfSxcclxuICAgIENQRjp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6JycsXHJcbiAgICB9LFxyXG4gICAgQ0VJcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnLFxyXG4gICAgfVxyXG59LCB7XHJcbiAgdGltZXN0YW1wczogdHJ1ZSxcclxufSk7XHJcblxyXG5sZXQgZGF0YXNldCA9IG1vbmdvb3NlLm1vZGVscy51c2VyIHx8IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgdXNlclNjaGVtYSlcclxuZXhwb3J0IGRlZmF1bHQgZGF0YXNldFxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB9LCAoZXJyKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIuJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiIsImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL3V0aWxzL0Nvbm5lY3REQic7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9taWRkbGV3YXJlL2F1dGgnO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL21vZGVscy9Vc2VyTW9kZWwnO1xyXG5cclxuY29ubmVjdERCKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgYXdhaXQgZ2V0VXNlcnMocmVxLCByZXMpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IHVwbG9hZEluZm9yIChyZXEsIHJlcylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFQSWZlYXR1cmVzIHtcclxuICBjb25zdHJ1Y3RvcihxdWVyeSwgcXVlcnlTdHJpbmcpIHtcclxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgIHRoaXMucXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZztcclxuICB9XHJcblxyXG4gIGZpbHRlcmluZygpIHtcclxuICAgIGNvbnN0IHF1ZXJ5T2JqID0geyAuLi50aGlzLnF1ZXJ5U3RyaW5nIH07XHJcblxyXG4gICAgY29uc3QgZXhjbHVkZUZpZWxkcyA9IFsnc29ydCddO1xyXG4gICAgZXhjbHVkZUZpZWxkcy5mb3JFYWNoKChlbCkgPT4gZGVsZXRlIChxdWVyeU9ialtlbF0pKTtcclxuXHJcbiAgICBpZiAocXVlcnlPYmoucm9sZSAhPT0gJ2FsbCcgJiYgcXVlcnlPYmoucm9sZSkgdGhpcy5xdWVyeS5maW5kKHsgcm9sZTogcXVlcnlPYmoucm9sZSB9KTtcclxuICAgIGlmIChxdWVyeU9iai5zZWFyY2ggIT09ICdhbGwnICYmIHF1ZXJ5T2JqLnNlYXJjaCkgdGhpcy5xdWVyeS5maW5kKHsgZW1haWw6IHsgJHJlZ2V4OiBxdWVyeU9iai5zZWFyY2ggfSB9KTtcclxuXHJcbiAgICB0aGlzLnF1ZXJ5LmZpbmQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc29ydGluZygpIHtcclxuICAgIGlmICh0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQpIHtcclxuICAgICAgY29uc3Qgc29ydEJ5ID0gdGhpcy5xdWVyeVN0cmluZy5zb3J0LnNwbGl0KCcsJykuam9pbignJyk7XHJcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNvcnQoc29ydEJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNvcnQoJy1jcmVhdGVkQXQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFVzZXJzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgIGlmIChyZXN1bHQucm9sZSAhPT0gJ2FkbWluJyAmJiByZXN1bHQucm9sZSAhPT0gJ21hc3RlciBhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycjogJ0F1dGVudGljYcOnw6NvIGludsOhbGlkYScgfSlcclxuXHJcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBuZXcgQVBJZmVhdHVyZXMoVXNlcnMuZmluZCgpLnNlbGVjdCgnLXBhc3N3b3JkJyksIHJlcS5xdWVyeSlcclxuICAgICAgICAgICAgLmZpbHRlcmluZygpLnNvcnRpbmcoKVxyXG5cclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGZlYXR1cmVzLnF1ZXJ5XHJcbiAgICAgICAgcmVzLmpzb24oeyB1c2VycyB9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycjogZXJyLm1lc3NhZ2UgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdXBsb2FkSW5mb3IgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdD0gYXdhaXQgYXV0aCAocmVxLHJlcylcclxuXHJcbiAgICAgICAgY29uc3Qge0NQRiwgQ0VJcGFzc3dvcmR9PSByZXEuYm9keVxyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOnJlc3VsdC5pZH0se0NQRiwgQ0VJcGFzc3dvcmR9KS5zZWxlY3QoXCItcGFzc3dvcmRcIilcclxuXHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVwZGF0ZSBTdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6bmV3VXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6bmV3VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIENQRixcclxuICAgICAgICAgICAgICAgIENFSXBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgcm9sZTpuZXdVc2VyLnJvbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1jYXRjaCAoZXJyKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9