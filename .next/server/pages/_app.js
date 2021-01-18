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
const baseURL = "https://mufasa.vercel.app/";
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
/* harmony import */ var _api_auth_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/auth/facebook */ "./pages/api/auth/facebook.js");


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

/***/ "./pages/api/auth/facebook.js":
/*!************************************!*\
  !*** ./pages/api/auth/facebook.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Facebook; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\pages\\api\\auth\\Facebook.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Facebook extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isLoggedin: false,
      userID: '',
      name: '',
      email: '',
      picture: ','
    });

    _defineProperty(this, "responseFacebook", response => {
      //console.log(response);
      this.setState({
        isLoggedin: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    });

    _defineProperty(this, "componentClicked", () => console.log("clicked"));
  }

  render() {
    let fbContent;

    if (this.state.isLoggedin) {
      fbContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: '400px',
          margin: 'auto',
          backgroud: 'grey',
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
      fbContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_facebook_login__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

}

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvRmFjZWJvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYmFzZVVSTCIsInByb2Nlc3MiLCJnZXREYXRhIiwidXJsIiwidG9rZW4iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInBvc3REYXRhIiwicG9zdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInB1dERhdGEiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkZhY2Vib29rIiwiaXNMb2dnZWRpbiIsInVzZXJJRCIsIm5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJyZXNwb25zZSIsInNldFN0YXRlIiwicmVuZGVyIiwiZmJDb250ZW50Iiwic3RhdGUiLCJ3aWR0aCIsIm1hcmdpbiIsImJhY2tncm91ZCIsInBhZGRpbmciLCJjb21wb25lbnRDbGlja2VkIiwicmVzcG9uc2VGYWNlYm9vayIsIkFDVElPTiIsIkFVVEgiLCJJTklUSUFMX1NUQVRFIiwiU1RBUlRfTE9BRElORyIsIkVORF9MT0FESU5HIiwiVVBEQVRFX1VTRVJfREFUQSIsIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImF1dGgiLCJsb2FkaW5nIiwidXNlckRhdGEiLCJwYXNzd29yZCIsIkRhdGFQcm92aWRlciIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwidXNlRWZmZWN0IiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwicGF5bG9hZCIsImFjY2Vzc1Rva2VuIiwidXNlciIsImFjdGlvbiIsImRyYWZ0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FB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SSxXQUFaO0FBQ0ksNkNBQ09zQixVQURQO0FBRUloQixlQUFPLEVBQUU7QUFGYjtBQUtKOztBQUNBLFNBQUtWLGdEQUFNLENBQUNLLGdCQUFaO0FBQ0ksNkNBQ09xQixVQURQO0FBRUlmLGdCQUFRLGtDQUNEZSxVQUFVLENBQUNmLFFBRFYsR0FFRGMsTUFBTSxDQUFDSCxPQUZOO0FBRlo7O0FBUUo7QUFDSSxhQUFPN0IsS0FBUDtBQXBDUjtBQXNDSCxDQTFDRDs7QUE0Q2V1Qix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgYmFzZVVSTCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHB1dERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi9hcGkvYXV0aC9mYWNlYm9vaydcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8RGF0YVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4nXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZWJvb2tcclxuIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgICBpc0xvZ2dlZGluOiBmYWxzZSxcclxuICAgICAgICAgdXNlcklEOiAnJyxcclxuICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgIHBpY3R1cmU6JywnXHJcbiAgICAgfVxyXG5cclxuICAgIHJlc3BvbnNlRmFjZWJvb2sgPSByZXNwb25zZSA9PntcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgaXNMb2dnZWRpbjogdHJ1ZSxcclxuICAgICAgICAgICAgIHVzZXJJRDogcmVzcG9uc2UudXNlcklELFxyXG4gICAgICAgICAgICAgbmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5lbWFpbCxcclxuICAgICAgICAgICAgIHBpY3R1cmU6IHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmxcclxuICAgICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgY29tcG9uZW50Q2xpY2tlZCA9ICgpID0+IGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGZiQ29udGVudDtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzTG9nZ2VkaW4pe1xyXG4gICAgICAgICAgICBmYkNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VkOiAnZ3JleScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzIwcHgnXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMuc3RhdGUucGljdHVyZX0gYWx0PXt0aGlzLnN0YXRlLm5hbWV9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEJlbSB2aW5kbyB7dGhpcy5zdGF0ZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgZmJDb250ZW50ID0gKFxyXG4gICAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICAgICAgICAgIGFwcElkPVwiMjc5MDEyMTAwNDY0OTI2MlwiXHJcbiAgICAgICAgICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbXBvbmVudENsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz17dGhpcy5yZXNwb25zZUZhY2Vib29rfSAvPiApXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZmJDb250ZW50fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgQUNUSU9OID0ge1xyXG5cclxuICAgIC8vQVVUSFxyXG4gICAgQVVUSDpcclxuICAgICAgICAnQVVUSCcsXHJcblxyXG4gICAgLy8gSU5JVElBTF9TVEFURVxyXG4gICAgSU5JVElBTF9TVEFURTpcclxuICAgICAgICAnSU5JVElBTF9TVEFURScsXHJcblxyXG4gICAgLy8gTE9BRElORyBSRUdJU1RFUiBBTkQgTE9HSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFNUQVJUX0xPQURJTkc6XHJcbiAgICAgICAgJ1NUQVJUX0xPQURJTkcnLFxyXG4gICAgRU5EX0xPQURJTkc6XHJcbiAgICAgICAgJ0VORF9MT0FESU5HJyxcclxuXHJcbiAgICAvLyBVUERBVEUgVVNFUiBEQVRBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBVUERBVEVfVVNFUl9EQVRBOlxyXG4gICAgICAgICdVUERBVEVfVVNFUl9EQVRBJyxcclxuXHJcbiAgICAvL1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQUNUSU9OXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xyXG5pbXBvcnQgQUNUSU9OIGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGF1dGg6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB1c2VyRGF0YToge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rJylcclxuICAgICAgICBjb25zdCBmaXJzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0TG9naW4nKVxyXG4gICAgICAgIGlmIChmaXJzdExvZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2F1dGgvYWNjZXNzVG9rZW4nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGRhdGEuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogZGF0YS51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcblxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEFDVElPTiBmcm9tICcuL0FjdGlvbnMnXHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vR2xvYmFsU3RhdGUnXHJcblxyXG5jb25zdCByZWR1Y2VycyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZHJhZnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKVxyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgLy8gQVVUSFxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkFVVEg6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJTklUSUFMIFNUQVRFXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uSU5JVElBTF9TVEFURTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxyXG5cclxuICAgICAgICAvL2xvYWRpbmcgUmVnaXN0ZXIgQW5kIExvZ2luID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLlNUQVJUX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uRU5EX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9VcGRhdGUgdXNlciBkYXRhID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLlVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlckRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLnVzZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VycyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmFjZWJvb2stbG9naW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=