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
const baseURL = "http://localhost:3000/";
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
  let res = await fetch(`${baseURL}${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
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
/* harmony import */ var _sections_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/Header */ "./sections/Header.js");
/* harmony import */ var _snnipets_Notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snnipets/Notify */ "./snnipets/Notify.js");
/* harmony import */ var _snnipets_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snnipets/Modal */ "./snnipets/Modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\layout\\Layout.js";






function Layout({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const pathName = router.pathname;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [// exclude header from page denied-access ========================
    pathName.indexOf("denied-access") !== -1 ? '' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sections_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }, this), // notify only in bend ========================
    pathName.indexOf("bend-admin") !== -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Notify__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "text-center my-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\_app.js";

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

/***/ "./sections/Header.js":
/*!****************************!*\
  !*** ./sections/Header.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\sections\\Header.js";


function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "mx-auto my-2 text-center",
    children: "Header"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./snnipets/Modal.js":
/*!***************************!*\
  !*** ./snnipets/Modal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\snnipets\\Modal.js";





function Modal() {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__["DataContext"]);
  const {
    modal,
    auth
  } = state;
  const bodyMsg = modal.body || "Você tem certeza que deseja deletar este item?";
  const title = modal.title || "";

  const handleSubmit = async () => {
    if (modal.type === 'ADD_USERS') {
      await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["deleteData"])(`api/user/${modal.id}`, auth.token).then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_3__["deleteItem"])(modal.data, modal.id, 'ADD_USERS'));
        return dispatch({
          type: 'NOTIFY',
          payload: {
            success: res.msg
          }
        });
      });
      dispatch({
        type: "ADD_MODAL",
        payload: {}
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "modal fade",
    id: "exampleModal",
    tabIndex: "-1",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "modal-dialog",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "modal-title",
            id: "exampleModalLabel",
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-body",
          children: bodyMsg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "modal-footer",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-secondary",
            onClick: handleSubmit,
            "data-bs-dismiss": "modal",
            children: "Sim"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            className: "btn btn-primary",
            "data-bs-dismiss": "modal",
            children: "Cancelar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./snnipets/Notify.js":
/*!****************************!*\
  !*** ./snnipets/Notify.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toast */ "./snnipets/Toast.js");


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\snnipets\\Notify.js";




function Notify() {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__["DataContext"]);
  const {
    notify
  } = state;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [notify.error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Toast__WEBPACK_IMPORTED_MODULE_3__["default"], {
      msg: {
        msg: notify.error,
        title: 'Error'
      },
      handleShow: () => dispatch({
        type: 'NOTIFY',
        payload: {}
      }),
      bgColor: "bg-danger"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, this), notify.success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Toast__WEBPACK_IMPORTED_MODULE_3__["default"], {
      msg: {
        msg: notify.success,
        title: 'Success'
      },
      handleShow: () => dispatch({
        type: 'NOTIFY',
        payload: {}
      }),
      bgColor: "bg-success"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Notify);

/***/ }),

/***/ "./snnipets/Toast.js":
/*!***************************!*\
  !*** ./snnipets/Toast.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\snnipets\\Toast.js";


const Toast = ({
  msg,
  handleShow,
  bgColor
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `toast show position-fixed ${bgColor}`,
    style: {
      top: '5px',
      right: '5px',
      minWidht: '280px',
      zIndex: 9
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `toast-header text-light ${bgColor} d-flex justify-content-between`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        className: "mr-auto text-light",
        children: msg.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "ms-2 mb-1 close text-light",
        "data-dismiss": "toast",
        style: {
          outline: 'none',
          background: 'none',
          border: 'none'
        },
        onClick: handleShow,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "toast-body text-light",
      children: msg.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTION, updateItem, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION", function() { return ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
const ACTION = {
  // ADD_MODAL
  ADD_MODAL: 'ADD_MODAL',
  //NOTIFY
  NOTIFY: 'NOTIFY',
  // AUTH
  AUTH: 'AUTH',
  // INITIAL_STATE
  INITIAL_STATE: 'INITIAL_STATE',
  // LOADING REGISTER AND LOGIN ========================================================
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  // UPDATE USER DATA ========================================================
  UPDATE_USER_DATA: 'UPDATE_USER_DATA',
  //ADD USERS
  ADD_USERS: 'ADD_USERS' //

};
const updateItem = (data, id, post, type) => {
  const newData = data.map(item => item._id === id ? post : item);
  return {
    type,
    payload: newData
  };
};
const deleteItem = (data, id, type) => {
  const newData = data.filter(item => item._id !== id);
  return {
    type,
    payload: newData
  };
};

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

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\store\\GlobalState.js";




const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const initialState = {
  modal: {},
  auth: {},
  notify: {},
  loading: false,
  userData: {
    email: '',
    password: ''
  },
  users: []
};
const DataProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
  const {
    auth
  } = state; // AUTH

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    const firstLogin = localStorage.getItem('firstLogin');

    if (firstLogin) {
      const res = await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["getData"])('api/auth/accessToken');
      dispatch({
        type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].AUTH,
        payload: {
          token: res.accessToken,
          user: res.user
        }
      });
    }
  }, []); // USERS

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    if (auth.token) {
      if (auth.user.role === 'admin' || auth.user.role === 'master admin') {
        Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["getData"])('api/user', auth.token).then(res => {
          if (res.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.err
            }
          });
          dispatch({
            type: 'ADD_USERS',
            payload: res.users
          });
        });
      }
    } else {
      dispatch({
        type: 'ADD_USERS',
        payload: []
      });
    }
  }, [auth.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DataContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
    // NOTIFY
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].ADD_MODAL:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        modal: action.payload
      });
    // NOTIFY

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].NOTIFY:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        notify: action.payload
      });
    // ADD USERS

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].ADD_USERS:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        users: action.payload
      });
    // AUTH

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].AUTH:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        auth: action.payload
      });
    // INITIAL STATE

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].INITIAL_STATE:
      return _GlobalState__WEBPACK_IMPORTED_MODULE_1__["initialState"];
    //loading Register And Login ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].START_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: true
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].END_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: false
      });
    //Update user data ========================================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].UPDATE_USER_DATA:
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NubmlwZXRzL01vZGFsLmpzIiwid2VicGFjazovLy8uL3NubmlwZXRzL05vdGlmeS5qcyIsIndlYnBhY2s6Ly8vLi9zbm5pcGV0cy9Ub2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJiYXNlVVJMIiwicHJvY2VzcyIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicHV0RGF0YSIsInBhdGNoRGF0YSIsImRlbGV0ZURhdGEiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJpbmRleE9mIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJIZWFkZXIiLCJNb2RhbCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJtb2RhbCIsImF1dGgiLCJib2R5TXNnIiwidGl0bGUiLCJoYW5kbGVTdWJtaXQiLCJ0eXBlIiwiaWQiLCJ0aGVuIiwiZXJyIiwicGF5bG9hZCIsImVycm9yIiwiZGVsZXRlSXRlbSIsInN1Y2Nlc3MiLCJtc2ciLCJOb3RpZnkiLCJub3RpZnkiLCJUb2FzdCIsImhhbmRsZVNob3ciLCJiZ0NvbG9yIiwidG9wIiwicmlnaHQiLCJtaW5XaWRodCIsInpJbmRleCIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiQUNUSU9OIiwiQUREX01PREFMIiwiTk9USUZZIiwiQVVUSCIsIklOSVRJQUxfU1RBVEUiLCJTVEFSVF9MT0FESU5HIiwiRU5EX0xPQURJTkciLCJVUERBVEVfVVNFUl9EQVRBIiwiQUREX1VTRVJTIiwidXBkYXRlSXRlbSIsIm5ld0RhdGEiLCJtYXAiLCJpdGVtIiwiX2lkIiwiZmlsdGVyIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VycyIsIkRhdGFQcm92aWRlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsInVzZUVmZmVjdCIsImZpcnN0TG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwicm9sZSIsImFjdGlvbiIsImRyYWZ0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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QWlFZXNELHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcblxyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zZWN0aW9ucy9IZWFkZXInO1xyXG5pbXBvcnQgTm90aWZ5IGZyb20gJy4uL3NubmlwZXRzL05vdGlmeSc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9zbm5pcGV0cy9Nb2RhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBwYXRoTmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4Y2x1ZGUgaGVhZGVyIGZyb20gcGFnZSBkZW5pZWQtYWNjZXNzID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgKHBhdGhOYW1lLmluZGV4T2YoXCJkZW5pZWQtYWNjZXNzXCIpICE9PSAtMSkgP1xyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3RpZnkgb25seSBpbiBiZW5kID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgKHBhdGhOYW1lLmluZGV4T2YoXCJiZW5kLWFkbWluXCIpICE9PSAtMSkgP1xyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vdGlmeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgLz5cclxuXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IERhdGFQcm92aWRlciB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8RGF0YVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICBIZWFkZXJcclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGRlbGV0ZURhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQgeyBkZWxldGVJdGVtIH0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuXHJcbmZ1bmN0aW9uIE1vZGFsKCkge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgbW9kYWwsIGF1dGggfSA9IHN0YXRlXHJcbiAgICBjb25zdCBib2R5TXNnID0gbW9kYWwuYm9keSB8fCBcIlZvY8OqIHRlbSBjZXJ0ZXphIHF1ZSBkZXNlamEgZGVsZXRhciBlc3RlIGl0ZW0/XCJcclxuICAgIGNvbnN0IHRpdGxlID0gbW9kYWwudGl0bGUgfHwgXCJcIlxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAobW9kYWwudHlwZSA9PT0gJ0FERF9VU0VSUycpIHtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZURhdGEoYGFwaS91c2VyLyR7bW9kYWwuaWR9YCwgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZXJyIH0gfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWwuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWwuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBRERfVVNFUlMnXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBzdWNjZXNzOiByZXMubXNnIH0gfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX01PREFMXCIsIHBheWxvYWQ6IHt9IH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJleGFtcGxlTW9kYWxcIiB0YWJJbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2JvZHlNc2d9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+U2ltPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+Q2FuY2VsYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCdcclxuXHJcbmZ1bmN0aW9uIE5vdGlmeSgpIHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7IG5vdGlmeSB9ID0gc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtub3RpZnkuZXJyb3IgJiZcclxuICAgICAgICAgICAgICAgIDxUb2FzdFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZz17eyBtc2c6IG5vdGlmeS5lcnJvciwgdGl0bGU6ICdFcnJvcicgfX1cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTaG93PXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KX1cclxuICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yPVwiYmctZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICB7bm90aWZ5LnN1Y2Nlc3MgJiZcclxuICAgICAgICAgICAgICAgIDxUb2FzdFxyXG4gICAgICAgICAgICAgICAgICAgIG1zZz17eyBtc2c6IG5vdGlmeS5zdWNjZXNzLCB0aXRsZTogJ1N1Y2Nlc3MnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2hvdz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cImJnLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmeVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUb2FzdCA9ICh7IG1zZywgaGFuZGxlU2hvdywgYmdDb2xvciB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3Qgc2hvdyBwb3NpdGlvbi1maXhlZCAke2JnQ29sb3J9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogJzVweCcsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJzVweCcsXHJcbiAgICAgICAgICAgICAgICBtaW5XaWRodDogJzI4MHB4JyxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogOSxcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9hc3QtaGVhZGVyIHRleHQtbGlnaHQgJHtiZ0NvbG9yfSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5gfT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwibXItYXV0byB0ZXh0LWxpZ2h0XCI+e21zZy50aXRsZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtcy0yIG1iLTEgY2xvc2UgdGV4dC1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwidG9hc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvYXN0LWJvZHkgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAge21zZy5tc2d9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxyXG4iLCJleHBvcnQgY29uc3QgQUNUSU9OID0ge1xyXG5cclxuICAgIC8vIEFERF9NT0RBTFxyXG4gICAgQUREX01PREFMOlxyXG4gICAgICAgICdBRERfTU9EQUwnLFxyXG5cclxuICAgIC8vTk9USUZZXHJcbiAgICBOT1RJRlk6XHJcbiAgICAgICAgJ05PVElGWScsXHJcblxyXG4gICAgLy8gQVVUSFxyXG4gICAgQVVUSDpcclxuICAgICAgICAnQVVUSCcsXHJcblxyXG4gICAgLy8gSU5JVElBTF9TVEFURVxyXG4gICAgSU5JVElBTF9TVEFURTpcclxuICAgICAgICAnSU5JVElBTF9TVEFURScsXHJcblxyXG4gICAgLy8gTE9BRElORyBSRUdJU1RFUiBBTkQgTE9HSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFNUQVJUX0xPQURJTkc6XHJcbiAgICAgICAgJ1NUQVJUX0xPQURJTkcnLFxyXG4gICAgRU5EX0xPQURJTkc6XHJcbiAgICAgICAgJ0VORF9MT0FESU5HJyxcclxuXHJcbiAgICAvLyBVUERBVEUgVVNFUiBEQVRBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBVUERBVEVfVVNFUl9EQVRBOlxyXG4gICAgICAgICdVUERBVEVfVVNFUl9EQVRBJyxcclxuXHJcbiAgICAvL0FERCBVU0VSU1xyXG4gICAgQUREX1VTRVJTOlxyXG4gICAgICAgICdBRERfVVNFUlMnLFxyXG5cclxuICAgIC8vXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4gKGl0ZW0uX2lkID09PSBpZCA/IHBvc3QgOiBpdGVtKSlcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiAoaXRlbS5faWQgIT09IGlkKSlcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnXHJcbmltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1vZGFsOiB7XHJcblxyXG4gICAgfSxcclxuICAgIGF1dGg6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbm90aWZ5OiB7XHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXNlckRhdGE6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgfSxcclxuICAgIHVzZXJzOiBbXHJcblxyXG4gICAgXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgLy8gQVVUSFxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0TG9naW4nKVxyXG4gICAgICAgIGlmIChmaXJzdExvZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERhdGEoJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJylcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTi5BVVRILFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvLyBVU0VSU1xyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoYXV0aC50b2tlbikge1xyXG4gICAgICAgICAgICBpZiAoYXV0aC51c2VyLnJvbGUgPT09ICdhZG1pbicgfHwgYXV0aC51c2VyLnJvbGUgPT09ICdtYXN0ZXIgYWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhKCdhcGkvdXNlcicsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZXJyIH0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogcmVzLnVzZXJzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9VU0VSUycsIHBheWxvYWQ6IFtdIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dGgudG9rZW5dKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuL0FjdGlvbnMnXHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vR2xvYmFsU3RhdGUnXHJcblxyXG5jb25zdCByZWR1Y2VycyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZHJhZnRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKVxyXG5cclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHJcbiAgICAgICAgLy8gTk9USUZZXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQUREX01PREFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5PVElGWVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLk5PVElGWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQUREIFVTRVJTXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uQUREX1VTRVJTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFVVEhcclxuICAgICAgICBjYXNlIEFDVElPTi5BVVRIOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF1dGg6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSU5JVElBTCBTVEFURVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLklOSVRJQUxfU1RBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcclxuXHJcbiAgICAgICAgLy9sb2FkaW5nIFJlZ2lzdGVyIEFuZCBMb2dpbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYXNlIEFDVElPTi5TVEFSVF9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkVORF9MT0FESU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vVXBkYXRlIHVzZXIgZGF0YSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBjYXNlIEFDVElPTi5VUERBVEVfVVNFUl9EQVRBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZS51c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=