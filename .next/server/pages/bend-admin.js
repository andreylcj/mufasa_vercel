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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/bend-admin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/utils/ValidateData/ValidLogin.js":
/*!*************************************************!*\
  !*** ./assets/utils/ValidateData/ValidLogin.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validLogin = (email, password) => {
  if (!email && !password) {
    return {
      emailMessage: 'Por favor, preencha seu e-mail',
      passwordMessage: 'Por favor, preencha sua senha'
    };
  }

  if (!email) {
    return {
      emailMessage: 'Por favor, preencha seu e-mail',
      passwordMessage: ''
    };
  }

  if (!password) {
    return {
      emailMessage: '',
      passwordMessage: 'Por favor, preencha sua senha'
    };
  }

  if (!validateEmail(email)) {
    return {
      emailMessage: 'Por favor preencha um email valido',
      passwordMessage: ''
    };
  }

  return {
    emailMessage: '',
    passwordMessage: ''
  };
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/* harmony default export */ __webpack_exports__["default"] = (validLogin);

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
const baseURL =  true ? "http://localhost:3000/" : undefined;
const getData = async (url, token) => {
  let res;

  if (token) {
    res = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: {
        Authorization: token
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
        Authorization: token
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
  return data;
};
const putData = async (url, post, token) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const patchData = async (url, post, token) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const deleteData = async (url, token) => {
  const res = await fetch(`${baseURL}${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  });
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "./pages/bend-admin/index.js":
/*!***********************************!*\
  !*** ./pages/bend-admin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../snnipets/Loading */ "./snnipets/Loading/index.js");
/* harmony import */ var _assets_utils_ValidateData_ValidLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/utils/ValidateData/ValidLogin */ "./assets/utils/ValidateData/ValidLogin.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/utils/fetchData */ "./assets/utils/fetchData.js");


var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\pages\\bend-admin\\index.js";









function Login() {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_4__["DataContext"]);
  const {
    loading
  } = state;
  const {
    userData
  } = state;
  const {
    auth
  } = state;
  const {
    0: submitStatus,
    1: setSubmitStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    emailMessage: '',
    passwordMessage: ''
  });
  const {
    email,
    password
  } = userData;

  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].UPDATE_USER_DATA,
      payload: {
        [name]: value
      }
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const {
      emailMessage,
      passwordMessage
    } = Object(_assets_utils_ValidateData_ValidLogin__WEBPACK_IMPORTED_MODULE_7__["default"])(userData.email, userData.password);
    setSubmitStatus({
      emailMessage,
      passwordMessage
    });

    if (emailMessage || passwordMessage) {
      return;
    }

    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].START_LOADING
    });
    const res = await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_8__["postData"])('api/api-bend-admin/login', userData);
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].END_LOADING
    });
    setSubmitStatus({
      emailMessage: res.emailMessage,
      passwordMessage: res.passwordMessage
    });

    if (res.emailMessage || res.passwordMessage) {
      return;
    }

    if (res.err) {
      return;
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25
    });
    localStorage.setItem('firstLogin', true); // set new auth

    const new_auth = await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_8__["getData"])('api/auth/accessToken');
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].AUTH,
      payload: {
        token: new_auth.accessToken,
        user: new_auth.user
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_5__["ACTION"].UPDATE_USER_DATA,
      payload: {
        email: '',
        password: ''
      }
    });
  }, []);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (Object.keys(auth).length !== 0 && auth.user.admin) {
      router.push('/bend-admin/home');
    } else if (Object.keys(auth).length !== 0 && !auth.user.admin) {
      router.push('/bend-admin/denied-access');
    }
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      noValidate: true,
      className: "mx-auto my-4",
      style: {
        maxWidth: '500px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          className: "form-label",
          children: "E-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          id: "email",
          "aria-describedby": "emailHelp",
          name: "email",
          onChange: handleInputChange,
          value: email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: `form-text${submitStatus.emailMessage || submitStatus.emailNotExist ? ' text-danger' : ''}`,
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 33
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "password",
          name: "password",
          onChange: handleInputChange,
          value: password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: `form-text${submitStatus.passwordMessage || submitStatus.wrongPassword ? ' text-danger' : ''}`,
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 33
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 31
          }, this)
        }, void 0, false) : 'ENTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./snnipets/Loading/index.js":
/*!***********************************!*\
  !*** ./snnipets/Loading/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\snnipets\\Loading\\index.js";


function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "request-loading",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "fa fa-spinner fa-spin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), ' ', "Carregando..."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

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
  // NOTIFY
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
  // ADD USERS
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
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var _InitialState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InitialState */ "./store/InitialState.js");

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\store\\GlobalState.js";





const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const DataProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_2__["default"], _InitialState__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    auth
  } = state; // AUTH

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    const firstLogin = localStorage.getItem('firstLogin');

    if (firstLogin) {
      const res = await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["getData"])('api/auth/accessToken');
      dispatch({
        type: _Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].AUTH,
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
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./store/InitialState.js":
/*!*******************************!*\
  !*** ./store/InitialState.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  roles: ['master admin', 'admin', 'user'],
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
/* harmony default export */ __webpack_exports__["default"] = (initialState);

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
/* harmony import */ var _InitialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InitialState */ "./store/InitialState.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const reducers = (state, action) => {
  const draftState = _objectSpread({}, state);

  switch (action.type) {
    // ADD_MODAL
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
      return _InitialState__WEBPACK_IMPORTED_MODULE_1__["default"];
    // loading Register And Login ==========================================================

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].START_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: true
      });

    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTION"].END_LOADING:
      return _objectSpread(_objectSpread({}, draftState), {}, {
        loading: false
      });
    // Update user data ========================================================================

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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL1ZhbGlkYXRlRGF0YS9WYWxpZExvZ2luLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmVuZC1hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zbm5pcGV0cy9Mb2FkaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvR2xvYmFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvSW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ2YWxpZExvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImVtYWlsTWVzc2FnZSIsInBhc3N3b3JkTWVzc2FnZSIsInZhbGlkYXRlRW1haWwiLCJyZSIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZ2V0RGF0YSIsInVybCIsInRva2VuIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJqc29uIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXREYXRhIiwicGF0Y2hEYXRhIiwiZGVsZXRlRGF0YSIsIkxvZ2luIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImxvYWRpbmciLCJ1c2VyRGF0YSIsImF1dGgiLCJzdWJtaXRTdGF0dXMiLCJzZXRTdWJtaXRTdGF0dXMiLCJ1c2VTdGF0ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInR5cGUiLCJBQ1RJT04iLCJVUERBVEVfVVNFUl9EQVRBIiwicGF5bG9hZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiU1RBUlRfTE9BRElORyIsIkVORF9MT0FESU5HIiwiZXJyIiwiQ29va2llIiwic2V0IiwicmVmcmVzaFRva2VuIiwicGF0aCIsImV4cGlyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmV3X2F1dGgiLCJBVVRIIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImFkbWluIiwicHVzaCIsIm1heFdpZHRoIiwiZW1haWxOb3RFeGlzdCIsIndyb25nUGFzc3dvcmQiLCJMb2FkaW5nIiwiQUREX01PREFMIiwiTk9USUZZIiwiSU5JVElBTF9TVEFURSIsIkFERF9VU0VSUyIsInVwZGF0ZUl0ZW0iLCJpZCIsIm5ld0RhdGEiLCJtYXAiLCJpdGVtIiwiX2lkIiwiZGVsZXRlSXRlbSIsImZpbHRlciIsImNyZWF0ZUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImZpcnN0TG9naW4iLCJnZXRJdGVtIiwicm9sZSIsInRoZW4iLCJlcnJvciIsInVzZXJzIiwicm9sZXMiLCJtb2RhbCIsIm5vdGlmeSIsImFjdGlvbiIsImRyYWZ0U3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtR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LFNBQUtGLCtDQUFNLENBQUNnQyxNQUFaO0FBQ0UsNkNBQ0syQixVQURMO0FBRUVGLGNBQU0sRUFBRUMsTUFBTSxDQUFDeEQ7QUFGakI7QUFLQTs7QUFDRixTQUFLRiwrQ0FBTSxDQUFDa0MsU0FBWjtBQUNFLDZDQUNLeUIsVUFETDtBQUVFTCxhQUFLLEVBQUVJLE1BQU0sQ0FBQ3hEO0FBRmhCO0FBS0E7O0FBQ0YsU0FBS0YsK0NBQU0sQ0FBQ2dCLElBQVo7QUFDRSw2Q0FDSzJDLFVBREw7QUFFRXJFLFlBQUksRUFBRW9FLE1BQU0sQ0FBQ3hEO0FBRmY7QUFLQTs7QUFDRixTQUFLRiwrQ0FBTSxDQUFDaUMsYUFBWjtBQUNFLGFBQU9lLHFEQUFQO0FBRUE7O0FBQ0YsU0FBS2hELCtDQUFNLENBQUNLLGFBQVo7QUFDRSw2Q0FDS3NELFVBREw7QUFFRXZFLGVBQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtZLCtDQUFNLENBQUNNLFdBQVo7QUFDRSw2Q0FDS3FELFVBREw7QUFFRXZFLGVBQU8sRUFBRTtBQUZYO0FBS0E7O0FBQ0YsU0FBS1ksK0NBQU0sQ0FBQ0MsZ0JBQVo7QUFDRSw2Q0FDSzBELFVBREw7QUFFRXRFLGdCQUFRLGtDQUNIc0UsVUFBVSxDQUFDdEUsUUFEUixHQUVIcUUsTUFBTSxDQUFDeEQsT0FGSjtBQUZWOztBQVFGO0FBQ0UsYUFBT2xCLEtBQVA7QUF4REo7QUEwREQsQ0E3REQ7O0FBK0RlK0QsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsRUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYmVuZC1hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmVuZC1hZG1pbi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHZhbGlkTG9naW4gPSAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgaWYgKCFlbWFpbCAmJiAhcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVtYWlsTWVzc2FnZTogJ1BvciBmYXZvciwgcHJlZW5jaGEgc2V1IGUtbWFpbCcsXHJcbiAgICAgIHBhc3N3b3JkTWVzc2FnZTogJ1BvciBmYXZvciwgcHJlZW5jaGEgc3VhIHNlbmhhJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoIWVtYWlsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbWFpbE1lc3NhZ2U6ICdQb3IgZmF2b3IsIHByZWVuY2hhIHNldSBlLW1haWwnLFxyXG4gICAgICBwYXNzd29yZE1lc3NhZ2U6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmICghcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVtYWlsTWVzc2FnZTogJycsXHJcbiAgICAgIHBhc3N3b3JkTWVzc2FnZTogJ1BvciBmYXZvciwgcHJlZW5jaGEgc3VhIHNlbmhhJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbWFpbE1lc3NhZ2U6ICdQb3IgZmF2b3IgcHJlZW5jaGEgdW0gZW1haWwgdmFsaWRvJyxcclxuICAgICAgcGFzc3dvcmRNZXNzYWdlOiAnJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZW1haWxNZXNzYWdlOiAnJyxcclxuICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcclxuICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZExvZ2luO1xyXG4iLCJjb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgOiBwcm9jZXNzLmVudi5CQVNFX1VSTCA/IHByb2Nlc3MuZW52LkJBU0VfVVJMIDogJy8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gIGxldCByZXM7XHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgbGV0IHJlcztcclxuICBpZiAodG9rZW4pIHtcclxuICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1dERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgbWV0aG9kOiAnUFVUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSc7XHJcbmltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4uLy4uL3N0b3JlL0FjdGlvbnMnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9zbm5pcGV0cy9Mb2FkaW5nJztcclxuaW1wb3J0IHZhbGlkTG9naW4gZnJvbSAnLi4vLi4vYXNzZXRzL3V0aWxzL1ZhbGlkYXRlRGF0YS9WYWxpZExvZ2luJztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfSBmcm9tICcuLi8uLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJztcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nIH0gPSBzdGF0ZTtcclxuICBjb25zdCB7IHVzZXJEYXRhIH0gPSBzdGF0ZTtcclxuICBjb25zdCB7IGF1dGggfSA9IHN0YXRlO1xyXG5cclxuICBjb25zdCBbc3VibWl0U3RhdHVzLCBzZXRTdWJtaXRTdGF0dXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWxNZXNzYWdlOiAnJyxcclxuICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyRGF0YTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLFxyXG4gICAgICBwYXlsb2FkOiB7IFtuYW1lXTogdmFsdWUgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbE1lc3NhZ2UsIHBhc3N3b3JkTWVzc2FnZSB9ID0gdmFsaWRMb2dpbih1c2VyRGF0YS5lbWFpbCwgdXNlckRhdGEucGFzc3dvcmQpO1xyXG5cclxuICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgIGVtYWlsTWVzc2FnZSxcclxuICAgICAgcGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVtYWlsTWVzc2FnZSB8fCBwYXNzd29yZE1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlNUQVJUX0xPQURJTkcgfSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBwb3N0RGF0YSgnYXBpL2FwaS1iZW5kLWFkbWluL2xvZ2luJywgdXNlckRhdGEpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uRU5EX0xPQURJTkcgfSk7XHJcblxyXG4gICAgc2V0U3VibWl0U3RhdHVzKHtcclxuICAgICAgZW1haWxNZXNzYWdlOiByZXMuZW1haWxNZXNzYWdlLFxyXG4gICAgICBwYXNzd29yZE1lc3NhZ2U6IHJlcy5wYXNzd29yZE1lc3NhZ2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzLmVtYWlsTWVzc2FnZSB8fCByZXMucGFzc3dvcmRNZXNzYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLmVycikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQ29va2llLnNldCgncmVmcmVzaFRva2VuJywgcmVzLnJlZnJlc2hUb2tlbiwge1xyXG4gICAgICBwYXRoOiAnL2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyxcclxuICAgICAgZXhwaXJlczogMjUsXHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmaXJzdExvZ2luJywgdHJ1ZSk7XHJcblxyXG4gICAgLy8gc2V0IG5ldyBhdXRoXHJcbiAgICBjb25zdCBuZXdfYXV0aCA9IGF3YWl0IGdldERhdGEoJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyk7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBQ1RJT04uQVVUSCxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHRva2VuOiBuZXdfYXV0aC5hY2Nlc3NUb2tlbixcclxuICAgICAgICB1c2VyOiBuZXdfYXV0aC51c2VyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUNUSU9OLlVQREFURV9VU0VSX0RBVEEsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggIT09IDAgJiYgYXV0aC51c2VyLmFkbWluKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYmVuZC1hZG1pbi9ob21lJyk7XHJcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGF1dGgpLmxlbmd0aCAhPT0gMCAmJiAhYXV0aC51c2VyLmFkbWluKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvYmVuZC1hZG1pbi9kZW5pZWQtYWNjZXNzJyk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBteS00XCJcclxuICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwMHB4JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMuZW1haWxNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy5lbWFpbE5vdEV4aXN0ID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2VuaGE8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy53cm9uZ1Bhc3N3b3JkID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVja01lT3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjaGVja01lT3V0XCI+TGVtYnJhciBkZSBtaW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZC1mbGV4IG14LWF1dG9cIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRU5UUkFSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdC1sb2FkaW5nXCI+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiIC8+XHJcbiAgICAgIHsnICd9XHJcbiAgICAgIENhcnJlZ2FuZG8uLi5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsImV4cG9ydCBjb25zdCBBQ1RJT04gPSB7XHJcblxyXG4gIC8vIEFERF9NT0RBTFxyXG4gIEFERF9NT0RBTDpcclxuICAgICAgICAnQUREX01PREFMJyxcclxuXHJcbiAgLy8gTk9USUZZXHJcbiAgTk9USUZZOlxyXG4gICAgICAgICdOT1RJRlknLFxyXG5cclxuICAvLyBBVVRIXHJcbiAgQVVUSDpcclxuICAgICAgICAnQVVUSCcsXHJcblxyXG4gIC8vIElOSVRJQUxfU1RBVEVcclxuICBJTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICdJTklUSUFMX1NUQVRFJyxcclxuXHJcbiAgLy8gTE9BRElORyBSRUdJU1RFUiBBTkQgTE9HSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBTVEFSVF9MT0FESU5HOlxyXG4gICAgICAgICdTVEFSVF9MT0FESU5HJyxcclxuICBFTkRfTE9BRElORzpcclxuICAgICAgICAnRU5EX0xPQURJTkcnLFxyXG5cclxuICAvLyBVUERBVEUgVVNFUiBEQVRBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgVVBEQVRFX1VTRVJfREFUQTpcclxuICAgICAgICAnVVBEQVRFX1VTRVJfREFUQScsXHJcblxyXG4gIC8vIEFERCBVU0VSU1xyXG4gIEFERF9VU0VSUzpcclxuICAgICAgICAnQUREX1VTRVJTJyxcclxuXHJcbiAgLy9cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xyXG4gIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSkgPT4gKGl0ZW0uX2lkID09PSBpZCA/IHBvc3QgOiBpdGVtKSk7XHJcbiAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGEgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IChkYXRhLCBpZCwgdHlwZSkgPT4ge1xyXG4gIGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0uX2lkICE9PSBpZCkpO1xyXG4gIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9SZWR1Y2Vycyc7XHJcbmltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJztcclxuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL0luaXRpYWxTdGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZTtcclxuXHJcbiAgLy8gQVVUSFxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpcnN0TG9naW4nKTtcclxuICAgIGlmIChmaXJzdExvZ2luKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERhdGEoJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJyk7XHJcblxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdG9rZW46IHJlcy5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgIHVzZXI6IHJlcy51c2VyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gVVNFUlNcclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF1dGgudG9rZW4pIHtcclxuICAgICAgaWYgKGF1dGgudXNlci5yb2xlID09PSAnYWRtaW4nIHx8IGF1dGgudXNlci5yb2xlID09PSAnbWFzdGVyIGFkbWluJykge1xyXG4gICAgICAgIGdldERhdGEoJ2FwaS91c2VyJywgYXV0aC50b2tlbilcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7IGVycm9yOiByZXMuZXJyIH0gfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9VU0VSUycsIHBheWxvYWQ6IHJlcy51c2VycyB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiBbXSB9KTtcclxuICAgIH1cclxuICB9LCBbYXV0aC50b2tlbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcblxyXG4gICk7XHJcbn07XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICByb2xlczogW1xyXG4gICAgJ21hc3RlciBhZG1pbicsXHJcbiAgICAnYWRtaW4nLFxyXG4gICAgJ3VzZXInLFxyXG4gIF0sXHJcbiAgbW9kYWw6IHtcclxuXHJcbiAgfSxcclxuICBhdXRoOiB7XHJcblxyXG4gIH0sXHJcbiAgbm90aWZ5OiB7XHJcblxyXG4gIH0sXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgdXNlckRhdGE6IHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9LFxyXG4gIHVzZXJzOiBbXHJcblxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RhdGU7XHJcbiIsImltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4vQWN0aW9ucyc7XHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9Jbml0aWFsU3RhdGUnO1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGRyYWZ0U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIC8vIEFERF9NT0RBTFxyXG4gICAgY2FzZSBBQ1RJT04uQUREX01PREFMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgbW9kYWw6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gTk9USUZZXHJcbiAgICBjYXNlIEFDVElPTi5OT1RJRlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQUREIFVTRVJTXHJcbiAgICBjYXNlIEFDVElPTi5BRERfVVNFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBBVVRIXHJcbiAgICBjYXNlIEFDVElPTi5BVVRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBJTklUSUFMIFNUQVRFXHJcbiAgICBjYXNlIEFDVElPTi5JTklUSUFMX1NUQVRFOlxyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cclxuICAgICAgLy8gbG9hZGluZyBSZWdpc3RlciBBbmQgTG9naW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY2FzZSBBQ1RJT04uU1RBUlRfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTi5FTkRfTE9BRElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHVzZXIgZGF0YSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNhc2UgQUNUSU9OLlVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICB1c2VyRGF0YToge1xyXG4gICAgICAgICAgLi4uZHJhZnRTdGF0ZS51c2VyRGF0YSxcclxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=