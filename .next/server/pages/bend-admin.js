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

/***/ "./assets/utils/ValidLogin.js":
/*!************************************!*\
  !*** ./assets/utils/ValidLogin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validLogin = (email, password) => {
  if (!email && !password) return {
    emailMessage: 'Por favor, preencha seu e-mail',
    passwordMessage: 'Por favor, preencha sua senha'
  };
  if (!email) return {
    emailMessage: 'Por favor, preencha seu e-mail',
    passwordMessage: ''
  };
  if (!password) return {
    emailMessage: '',
    passwordMessage: 'Por favor, preencha sua senha'
  };

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
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../snnipets/Loading */ "./snnipets/Loading.js");
/* harmony import */ var _assets_utils_ValidLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/utils/ValidLogin */ "./assets/utils/ValidLogin.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/utils/fetchData */ "./assets/utils/fetchData.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\pages\\bend-admin\\index.js";









function Login() {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__["DataContext"]);
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
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].UPDATE_USER_DATA,
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
    } = Object(_assets_utils_ValidLogin__WEBPACK_IMPORTED_MODULE_5__["default"])(userData.email, userData.password);
    setSubmitStatus({
      emailMessage: emailMessage,
      passwordMessage: passwordMessage
    });

    if (emailMessage || passwordMessage) {
      return;
    }

    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].START_LOADING
    });
    const res = await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["postData"])('api/api-bend-admin/login', userData);
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].END_LOADING
    });
    setSubmitStatus({
      emailMessage: res.emailMessage,
      passwordMessage: res.passwordMessage
    });

    if (res.emailMessage || res.passwordMessage) {
      return;
    }

    if (res.err) {
      alert(res.err);
      return;
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('refreshToken', res.refreshToken, {
      path: '/api/auth/accessToken',
      expires: 25
    });
    localStorage.setItem('firstLogin', true); //set new auth

    const new_auth = await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["getData"])('api/auth/accessToken');
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].AUTH,
      payload: {
        token: new_auth.accessToken,
        user: new_auth.user
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _store_Actions__WEBPACK_IMPORTED_MODULE_3__["ACTION"].UPDATE_USER_DATA,
      payload: {
        email: '',
        password: ''
      }
    });
  }, []);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
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
          lineNumber: 108,
          columnNumber: 21
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
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "emailHelp",
          className: `form-text${submitStatus.emailMessage || submitStatus.emailNotExist ? ' text-danger' : ''}`,
          children: submitStatus.emailMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.emailMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 37
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          className: "form-label",
          children: "Senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "password",
          name: "password",
          onChange: handleInputChange,
          value: password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "passwordHelp",
          className: `form-text${submitStatus.passwordMessage || submitStatus.wrongPassword ? ' text-danger' : ''}`,
          children: submitStatus.passwordMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: submitStatus.passwordMessage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 37
          }, this) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary d-flex mx-auto",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 37
          }, this)
        }, void 0, false) : 'ENTRAR'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./snnipets/Loading.js":
/*!*****************************!*\
  !*** ./snnipets/Loading.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Andrey luiz\\Desktop\\MUFASA\\mufasa_vercel\\snnipets\\Loading.js";


function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "request-loading",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: "fa fa-spinner fa-spin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), " Carregando..."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL1ZhbGlkTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9iZW5kLWFkbWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NubmlwZXRzL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidmFsaWRMb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJlbWFpbE1lc3NhZ2UiLCJwYXNzd29yZE1lc3NhZ2UiLCJ2YWxpZGF0ZUVtYWlsIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJiYXNlVVJMIiwicHJvY2VzcyIsImdldERhdGEiLCJ1cmwiLCJ0b2tlbiIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicHV0RGF0YSIsInBhdGNoRGF0YSIsImRlbGV0ZURhdGEiLCJMb2dpbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJsb2FkaW5nIiwidXNlckRhdGEiLCJhdXRoIiwic3VibWl0U3RhdHVzIiwic2V0U3VibWl0U3RhdHVzIiwidXNlU3RhdGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ0eXBlIiwiQUNUSU9OIiwiVVBEQVRFX1VTRVJfREFUQSIsInBheWxvYWQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIlNUQVJUX0xPQURJTkciLCJFTkRfTE9BRElORyIsImVyciIsImFsZXJ0IiwiQ29va2llIiwic2V0IiwicmVmcmVzaFRva2VuIiwicGF0aCIsImV4cGlyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmV3X2F1dGgiLCJBVVRIIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwidXNlRWZmZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImFkbWluIiwicHVzaCIsIm1heFdpZHRoIiwiZW1haWxOb3RFeGlzdCIsIndyb25nUGFzc3dvcmQiLCJMb2FkaW5nIiwiQUREX01PREFMIiwiTk9USUZZIiwiSU5JVElBTF9TVEFURSIsIkFERF9VU0VSUyIsInVwZGF0ZUl0ZW0iLCJpZCIsIm5ld0RhdGEiLCJtYXAiLCJpdGVtIiwiX2lkIiwiZGVsZXRlSXRlbSIsImZpbHRlciIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJtb2RhbCIsIm5vdGlmeSIsInVzZXJzIiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJmaXJzdExvZ2luIiwiZ2V0SXRlbSIsInJvbGUiLCJ0aGVuIiwiZXJyb3IiLCJhY3Rpb24iLCJkcmFmdFN0YXRlIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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O0FBQ0ksNkNBQ08wRCxVQURQO0FBRUl0RSxnQkFBUSxrQ0FDRHNFLFVBQVUsQ0FBQ3RFLFFBRFYsR0FFRHFFLE1BQU0sQ0FBQ3hELE9BRk47QUFGWjs7QUFRSjtBQUNJLGFBQU9sQixLQUFQO0FBekRSO0FBMkRILENBL0REOztBQWlFZW9FLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDcEVBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2JlbmQtYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2JlbmQtYWRtaW4vaW5kZXguanNcIik7XG4iLCJjb25zdCB2YWxpZExvZ2luID0gKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG5cclxuICAgIGlmICghZW1haWwgJiYgIXBhc3N3b3JkKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogJ1BvciBmYXZvciwgcHJlZW5jaGEgc2V1IGUtbWFpbCcsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJ1BvciBmYXZvciwgcHJlZW5jaGEgc3VhIHNlbmhhJyxcclxuICAgICAgICB9XHJcblxyXG4gICAgaWYgKCFlbWFpbClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbWFpbE1lc3NhZ2U6ICdQb3IgZmF2b3IsIHByZWVuY2hhIHNldSBlLW1haWwnLFxyXG4gICAgICAgICAgICBwYXNzd29yZE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAoIXBhc3N3b3JkKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJ1BvciBmYXZvciwgcHJlZW5jaGEgc3VhIHNlbmhhJyxcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlbWFpbE1lc3NhZ2U6ICdQb3IgZmF2b3IgcHJlZW5jaGEgdW0gZW1haWwgdmFsaWRvJyxcclxuICAgICAgICAgICAgcGFzc3dvcmRNZXNzYWdlOiAnJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICByZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZExvZ2luIiwiY29uc3QgYmFzZVVSTCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlbixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG4gICAgbGV0IHJlc1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHB1dERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG5cclxuICAgIGxldCByZXNcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVzXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuXHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGFcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4uLy4uL3N0b3JlL0FjdGlvbnMnXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL3NubmlwZXRzL0xvYWRpbmcnXHJcbmltcG9ydCB2YWxpZExvZ2luIGZyb20gJy4uLy4uL2Fzc2V0cy91dGlscy9WYWxpZExvZ2luJztcclxuaW1wb3J0IHsgZ2V0RGF0YSwgcG9zdERhdGEgfSBmcm9tICcuLi8uLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhJztcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHsgbG9hZGluZyB9ID0gc3RhdGVcclxuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgY29uc3QgW3N1Ym1pdFN0YXR1cywgc2V0U3VibWl0U3RhdHVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkTWVzc2FnZTogJycsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyRGF0YVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7IFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBjb25zdCB7IGVtYWlsTWVzc2FnZSwgcGFzc3dvcmRNZXNzYWdlIH0gPSB2YWxpZExvZ2luKHVzZXJEYXRhLmVtYWlsLCB1c2VyRGF0YS5wYXNzd29yZClcclxuXHJcbiAgICAgICAgc2V0U3VibWl0U3RhdHVzKHtcclxuICAgICAgICAgICAgZW1haWxNZXNzYWdlOiBlbWFpbE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkTWVzc2FnZTogcGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChlbWFpbE1lc3NhZ2UgfHwgcGFzc3dvcmRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uU1RBUlRfTE9BRElORywgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcG9zdERhdGEoJ2FwaS9hcGktYmVuZC1hZG1pbi9sb2dpbicsIHVzZXJEYXRhKTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5FTkRfTE9BRElORywgfSk7XHJcblxyXG4gICAgICAgIHNldFN1Ym1pdFN0YXR1cyh7XHJcbiAgICAgICAgICAgIGVtYWlsTWVzc2FnZTogcmVzLmVtYWlsTWVzc2FnZSxcclxuICAgICAgICAgICAgcGFzc3dvcmRNZXNzYWdlOiByZXMucGFzc3dvcmRNZXNzYWdlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChyZXMuZW1haWxNZXNzYWdlIHx8IHJlcy5wYXNzd29yZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzLmVycikge1xyXG4gICAgICAgICAgICBhbGVydChyZXMuZXJyKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvb2tpZS5zZXQoJ3JlZnJlc2hUb2tlbicsIHJlcy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgICAgICAgcGF0aDogJy9hcGkvYXV0aC9hY2Nlc3NUb2tlbicsXHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDI1XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2dpbicsIHRydWUpXHJcblxyXG4gICAgICAgIC8vc2V0IG5ldyBhdXRoXHJcbiAgICAgICAgY29uc3QgbmV3X2F1dGggPSBhd2FpdCBnZXREYXRhKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicpXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHRva2VuOiBuZXdfYXV0aC5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgIHVzZXI6IG5ld19hdXRoLnVzZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTi5VUERBVEVfVVNFUl9EQVRBLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwICYmIGF1dGgudXNlci5hZG1pbikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vaG9tZScpXHJcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggIT09IDAgJiYgIWF1dGgudXNlci5hZG1pbikge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JlbmQtYWRtaW4vZGVuaWVkLWFjY2VzcycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2F1dGhdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZSBjbGFzc05hbWU9XCJteC1hdXRvIG15LTRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICc1MDBweCcgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT17YGZvcm0tdGV4dCR7c3VibWl0U3RhdHVzLmVtYWlsTWVzc2FnZSB8fCBzdWJtaXRTdGF0dXMuZW1haWxOb3RFeGlzdCA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2UgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdFN0YXR1cy5lbWFpbE1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXtwYXNzd29yZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXRTdGF0dXMucGFzc3dvcmRNZXNzYWdlIHx8IHN1Ym1pdFN0YXR1cy53cm9uZ1Bhc3N3b3JkID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57c3VibWl0U3RhdHVzLnBhc3N3b3JkTWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVja01lT3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjaGVja01lT3V0XCI+TGVtYnJhciBkZSBtaW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBkLWZsZXggbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0VOVFJBUidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0LWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCIgLz4gQ2FycmVnYW5kby4uLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXHJcbiIsImV4cG9ydCBjb25zdCBBQ1RJT04gPSB7XHJcblxyXG4gICAgLy8gQUREX01PREFMXHJcbiAgICBBRERfTU9EQUw6XHJcbiAgICAgICAgJ0FERF9NT0RBTCcsXHJcblxyXG4gICAgLy9OT1RJRllcclxuICAgIE5PVElGWTpcclxuICAgICAgICAnTk9USUZZJyxcclxuXHJcbiAgICAvLyBBVVRIXHJcbiAgICBBVVRIOlxyXG4gICAgICAgICdBVVRIJyxcclxuXHJcbiAgICAvLyBJTklUSUFMX1NUQVRFXHJcbiAgICBJTklUSUFMX1NUQVRFOlxyXG4gICAgICAgICdJTklUSUFMX1NUQVRFJyxcclxuXHJcbiAgICAvLyBMT0FESU5HIFJFR0lTVEVSIEFORCBMT0dJTiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU1RBUlRfTE9BRElORzpcclxuICAgICAgICAnU1RBUlRfTE9BRElORycsXHJcbiAgICBFTkRfTE9BRElORzpcclxuICAgICAgICAnRU5EX0xPQURJTkcnLFxyXG5cclxuICAgIC8vIFVQREFURSBVU0VSIERBVEEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgJ1VQREFURV9VU0VSX0RBVEEnLFxyXG5cclxuICAgIC8vQUREIFVTRVJTXHJcbiAgICBBRERfVVNFUlM6XHJcbiAgICAgICAgJ0FERF9VU0VSUycsXHJcblxyXG4gICAgLy9cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGEsIGlkLCBwb3N0LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZGF0YSwgaWQsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcihpdGVtID0+IChpdGVtLl9pZCAhPT0gaWQpKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9SZWR1Y2VycydcclxuaW1wb3J0IHsgQUNUSU9OIH0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL2Fzc2V0cy91dGlscy9mZXRjaERhdGEnXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbW9kYWw6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgYXV0aDoge1xyXG5cclxuICAgIH0sXHJcbiAgICBub3RpZnk6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB1c2VyRGF0YToge1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICB9LFxyXG4gICAgdXNlcnM6IFtcclxuXHJcbiAgICBdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIGNvbnN0IHsgYXV0aCB9ID0gc3RhdGVcclxuXHJcbiAgICAvLyBBVVRIXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgICAgICAgaWYgKGZpcnN0TG9naW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YSgnYXBpL2F1dGgvYWNjZXNzVG9rZW4nKVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OLkFVVEgsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcy5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiByZXMudXNlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIFVTRVJTXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdXRoLnRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyB8fCBhdXRoLnVzZXIucm9sZSA9PT0gJ21hc3RlciBhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIGdldERhdGEoJ2FwaS91c2VyJywgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5lcnIgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnMgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW10gfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbYXV0aC50b2tlbl0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICAgIClcclxufSIsImltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4vQWN0aW9ucydcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSdcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICBjb25zdCBkcmFmdFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpXHJcblxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICAvLyBOT1RJRllcclxuICAgICAgICBjYXNlIEFDVElPTi5BRERfTU9EQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbW9kYWw6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTk9USUZZXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uTk9USUZZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vdGlmeTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBREQgVVNFUlNcclxuICAgICAgICBjYXNlIEFDVElPTi5BRERfVVNFUlM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQVVUSFxyXG4gICAgICAgIGNhc2UgQUNUSU9OLkFVVEg6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJTklUSUFMIFNUQVRFXHJcbiAgICAgICAgY2FzZSBBQ1RJT04uSU5JVElBTF9TVEFURTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZVxyXG5cclxuICAgICAgICAvL2xvYWRpbmcgUmVnaXN0ZXIgQW5kIExvZ2luID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLlNUQVJUX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBQ1RJT04uRU5EX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9VcGRhdGUgdXNlciBkYXRhID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGNhc2UgQUNUSU9OLlVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlckRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kcmFmdFN0YXRlLnVzZXJEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VycyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==