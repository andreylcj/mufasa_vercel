module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/styles/global.css":
/*!**********************************!*\
  !*** ./assets/styles/global.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/utils/fetchData.js":
/*!***********************************!*\
  !*** ./assets/utils/fetchData.js ***!
  \***********************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
const baseURL = process.env.BASE_URL;
const getData = async (url, token) => {
  let res;

  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'GET'
    });
  }

  const data = await res.json();
  return data;
};
const postData = async (url, post, token) => {
  let res;

  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(post)
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
  }

  const data = await res.json();
  console.log(data);
  return data;
};
const putData = async (url, post, token) => {
  let res;

  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(post)
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
  }

  const data = await res.json();
  return data;
};
const patchData = async (url, post, token) => {
  let res;

  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(post)
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
  }

  const data = await res.json();
  return data;
};
const deleteData = async (url, token) => {
  let res;

  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
  } else {
    res = await fetch(`${baseURL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const data = await res.json();
  return data;
};

/***/ }),

/***/ "./layout/Layout.js":
/*!**************************!*\
  !*** ./layout/Layout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\layout\\Layout.js";


function Layout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/styles/global.css */ "./assets/styles/global.css");
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");


var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__["DataProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ACTION = {
  //AUTH
  AUTH: 'AUTH',
  // INITIAL_STATE
  INITIAL_STATE: 'INITIAL_STATE',
  // LOADING REGISTER AND LOGIN ========================================================
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  // UPDATE USER DATA ========================================================
  UPDATE_USER_DATA: 'UPDATE_USER_DATA' //

};
/* harmony default export */ __webpack_exports__["default"] = (ACTION);

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, initialState, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/utils/fetchData */ "./assets/utils/fetchData.js");

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\store\\GlobalState.js";




const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const initialState = {
  auth: {},
  loading: false,
  userData: {
    email: '',
    password: ''
  }
};
const DataProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    console.log('ok');
    const firstLogin = localStorage.getItem('firstLogin');

    if (firstLogin) {
      const res = await fetch('http://localhost:3000/api/auth/accessToken', {
        method: 'GET'
      });
      const data = await res.json();
      dispatch({
        type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["default"].AUTH,
        payload: {
          token: data.accessToken,
          user: data.user
        }
      });
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalState */ "./store/GlobalState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const reducers = (state, action) => {
  const draftState = Object.assign({}, state);

  switch (action.type) {
    // AUTH
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        auth: action.payload
      });
    // INITIAL STATE

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["default"].INITIAL_STATE:
      return _GlobalState__WEBPACK_IMPORTED_MODULE_1__["initialState"];
    //loading Register And Login ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["default"].START_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: true
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["default"].END_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: false
      });
    //Update user data ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_DATA:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        userData: _objectSpread(_objectSpread({}, draftState.userData), action.payload)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9VUkwiLCJnZXREYXRhIiwidXJsIiwidG9rZW4iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInBvc3REYXRhIiwicG9zdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInB1dERhdGEiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkFDVElPTiIsIkFVVEgiLCJJTklUSUFMX1NUQVRFIiwiU1RBUlRfTE9BRElORyIsIkVORF9MT0FESU5HIiwiVVBEQVRFX1VTRVJfREFUQSIsIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImF1dGgiLCJsb2FkaW5nIiwidXNlckRhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiRGF0YVByb3ZpZGVyIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsInVzZUVmZmVjdCIsImZpcnN0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidHlwZSIsInBheWxvYWQiLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJhY3Rpb24iLCJkcmFmdFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBNUI7QUFFTyxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxLQUFaLEtBQXNCO0FBQ3pDLE1BQUlDLEdBQUo7O0FBQ0EsTUFBSUQsS0FBSixFQUFXO0FBQ1BDLE9BQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRVIsT0FBUSxHQUFFSyxHQUFJLEVBQWxCLEVBQXFCO0FBQ2xDSSxZQUFNLEVBQUUs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WSxNQUFSLEtBQW1CO0FBRWhDLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQmYsS0FBbEIsQ0FBbkI7O0FBRUEsVUFBUVksTUFBTSxDQUFDSixJQUFmO0FBRUk7QUFDQSxTQUFLdkIsZ0RBQU0sQ0FBQ0MsSUFBWjtBQUNJLDZDQUNPMkIsVUFEUDtBQUVJbkIsWUFBSSxFQUFFa0IsTUFBTSxDQUFDSDtBQUZqQjtBQUtKOztBQUNBLFNBQUt4QixnREFBTSxDQUFDRSxhQUFaO0FBQ0ksYUFBT00seURBQVA7QUFFSjs7QUFDQSxTQUFLUixnREFBTSxDQUFDRyxhQUFaO0FBQ0ksNkNBQ095QixVQURQO0FBRUlsQixlQUFPLEVBQUU7QUFGYjs7QUFJSixTQUFLVixnREFBTSxDQUFDSSxXQUFaO0FBQ0ksNkNBQ093QixVQURQO0FBRUlsQixlQUFPLEVBQUU7QUFGYjtBQUtKOztBQUNBLFNBQUtWLGdEQUFNLENBQUNLLGdCQUFaO0FBQ0ksNkNBQ091QixVQURQO0FBRUlqQixnQkFBUSxrQ0FDRGlCLFVBQVUsQ0FBQ2pCLFFBRFYsR0FFRGdCLE1BQU0sQ0FBQ0gsT0FGTjtBQUZaOztBQVFKO0FBQ0ksYUFBT1QsS0FBUDtBQXBDUjtBQXNDSCxDQTFDRDs7QUE0Q2VHLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcblxyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxEYXRhUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L0RhdGFQcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJjb25zdCBBQ1RJT04gPSB7XHJcblxyXG4gICAgLy9BVVRIXHJcbiAgICBBVVRIOlxyXG4gICAgICAgICdBVVRIJyxcclxuXHJcbiAgICAvLyBJTklUSUFMX1NUQVRFXHJcbiAgICBJTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICdJTklUSUFMX1NUQVRFJyxcclxuXHJcbiAgICAvLyBMT0FESU5HIFJFR0lTVEVSIEFORCBMT0dJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU1RBUlRfTE9BRElORzpcclxuICAgICAgICAnU1RBUlRfTE9BRElORycsXHJcbiAgICBFTkRfTE9BRElORzpcclxuICAgICAgICAnRU5EX0xPQURJTkcnLFxyXG5cclxuICAgIC8vIFVQREFURSBVU0VSIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgJ1VQREFURV9VU0VSX0RBVEEnLFxyXG5cclxuICAgIC8vXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBQ1RJT05cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnXHJcbmltcG9ydCBBQ1RJT04gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYXV0aDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgICAgICAgaWYgKGZpcnN0TG9naW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9hY2Nlc3NUb2tlbicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZGF0YS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBkYXRhLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQUNUSU9OIGZyb20gJy4vQWN0aW9ucydcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSdcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBjb25zdCBkcmFmdFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpXHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICAvLyBBVVRIXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQVVUSDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElOSVRJQUwgU1RBVEVcclxuICAgICAgICBjYXNlIEFDVElPTi5JTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlXHJcblxyXG4gICAgICAgIC8vbG9hZGluZyBSZWdpc3RlciBBbmQgTG9naW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uU1RBUlRfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFDVElPTi5FTkRfTE9BRElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1VwZGF0ZSB1c2VyIGRhdGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uVVBEQVRFX1VTRVJfREFUQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUudXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9