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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/CEI/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/utils/ValidateData/ValidCpf.js":
/*!***********************************************!*\
  !*** ./assets/utils/ValidateData/ValidCpf.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const validCpfAuth = (cpf, password) => {
  if (!cpf && !password) {
    return {
      cpfMsg: 'Por favor, preencha seu CPF',
      passwordMsg: 'Por favor, preencha sua senha'
    };
  }

  if (!cpf) {
    return {
      cpfMsg: 'Por favor, preencha seu CPF',
      passwordMsg: ''
    };
  }

  if (!password) {
    return {
      emailMessage: '',
      passwordMsg: 'Por favor, preencha sua senha'
    };
  }

  if (TestaCPF(cpf)) {
    return {
      cpfMsg: 'Cpf válido',
      validate: true
    };
  }

  return {
    cpfMsg: 'Por favor, insira um CPF válido',
    validate: false
  };
};

function TestaCPF(strCPF) {
  // eslint-disable-next-line no-param-reassign
  strCPF = strCPF.split('.').join('').split('-').join('');
  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF === '00000000000') return false;

  for (let i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (11 - i);

  Resto = Soma * 10 % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10), 10)) return false;
  Soma = 0;

  for (let i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);

  Resto = Soma * 10 % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11), 10)) return false;
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (validCpfAuth);

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

/***/ "./pages/CEI/index.js":
/*!****************************!*\
  !*** ./pages/CEI/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _snnipets_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../snnipets/Loading */ "./snnipets/Loading/index.js");
/* harmony import */ var _assets_utils_ValidateData_ValidCpf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/utils/ValidateData/ValidCpf */ "./assets/utils/ValidateData/ValidCpf.js");
/* harmony import */ var _snnipets_GoBackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../snnipets/GoBackButton */ "./snnipets/GoBackButton/index.js");
/* harmony import */ var _assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/utils/fetchData */ "./assets/utils/fetchData.js");


var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\pages\\CEI\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CEI = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CEI",
  componentId: "sc-16inz0t-0"
})([""]);
CEI.Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "CEI__Header",
  componentId: "sc-16inz0t-1"
})([""]);
CEI.Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form.withConfig({
  displayName: "CEI__Form",
  componentId: "sc-16inz0t-2"
})([""]);

function insertCEIinfo() {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    loading,
    auth
  } = state;
  const {
    0: submitData,
    1: setSubmitData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    cpf: '',
    password: '' // user_id: '',

  });

  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setSubmitData(_objectSpread(_objectSpread({}, submitData), {}, {
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validData = await Object(_assets_utils_ValidateData_ValidCpf__WEBPACK_IMPORTED_MODULE_5__["default"])(submitData.cpf, submitData.password);

    if (!validData.validate) {
      setSubmitData(_objectSpread(_objectSpread({}, submitData), {}, {
        cpfErr: validData.cpfMsg,
        passwordMsg: validData.passwordMsg
      }));
      console.log(validData);
      return;
    }

    setSubmitData(_objectSpread(_objectSpread({}, submitData), {}, {
      cpfErr: '',
      passwordMsg: ''
    }));
    const CEIdata = {
      CPF: submitData.cpf.split('.').join('').split('-').join(''),
      CEIpassword: submitData.password // _id: submitData.user_id,

    };
    const {
      CPF,
      CEIpassword
    } = CEIdata;
    dispatch({
      type: 'START_LOADING'
    });
    await Object(_assets_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__["patchData"])('api/user', {
      CPF,
      CEIpassword
    }, auth.token).then(res => {
      if (res.err) {
        console.log(res.err);
        return;
      }

      console.log(res);
    });
    dispatch({
      type: 'END_LOADING'
    });
  };
  /* useEffect(() => {
    if (!auth.user) return;
      setSubmitData({
      ...submitData,
      user_id: auth.user._id,
    });
  }, [auth.user]); */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_GoBackButton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CEI, {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CEI.Header, {
        children: "CEI INFO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CEI.Form, {
        onSubmit: handleSubmit,
        noValidate: true,
        className: "mx-auto my-4",
        style: {
          maxWidth: '500px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "cpf",
            className: "form-label",
            children: "Cpf"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "cpf",
            "aria-describedby": "emailHelp",
            name: "cpf",
            onChange: handleInputChange,
            value: submitData.cpf
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "cpfHelp",
            className: `form-text${submitData.cpfErr ? ' text-danger' : ''}`,
            children: submitData.cpfErr ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: submitData.cpfErr
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 37
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "password",
            className: "form-label",
            children: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "password",
            className: "form-control",
            id: "password",
            name: "password",
            onChange: handleInputChange,
            value: submitData.password
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "passwordHelp",
            className: `form-text${submitData.passwordMsg ? ' text-danger' : ''}`,
            children: submitData.passwordMsg ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: submitData.passwordMsg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 37
            }, this) : 'Nós nunca vamos compartilhar seus dados com ninguém.'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary d-flex mx-auto",
          children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_snnipets_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 35
            }, this)
          }, void 0, false) : 'Salvar'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (insertCEIinfo);

/***/ }),

/***/ "./snnipets/GoBackButton/index.js":
/*!****************************************!*\
  !*** ./snnipets/GoBackButton/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\gusta\\Pessoal\\Mufasa\\mufasa_vercel\\snnipets\\GoBackButton\\index.js";



function GoBackButton(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleBack = () => {
    if (props.url) {
      router.push(props.url);
    } else {
      router.back();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "mb-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "btn btn-dark",
      onClick: handleBack,
      type: "button",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "fas fa-long-arrow-alt-left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), ' ', "Voltar"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (GoBackButton);

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL1ZhbGlkYXRlRGF0YS9WYWxpZENwZi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdXRpbHMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0NFSS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zbm5pcGV0cy9Hb0JhY2tCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc25uaXBldHMvTG9hZGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ2YWxpZENwZkF1dGgiLCJjcGYiLCJwYXNzd29yZCIsImNwZk1zZyIsInBhc3N3b3JkTXNnIiwiZW1haWxNZXNzYWdlIiwiVGVzdGFDUEYiLCJ2YWxpZGF0ZSIsInN0ckNQRiIsInNwbGl0Iiwiam9pbiIsIlNvbWEiLCJSZXN0byIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZ2V0RGF0YSIsInVybCIsInRva2VuIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJqc29uIiwicG9zdERhdGEiLCJwb3N0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXREYXRhIiwicGF0Y2hEYXRhIiwiZGVsZXRlRGF0YSIsIkNFSSIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsImgxIiwiRm9ybSIsImZvcm0iLCJpbnNlcnRDRUlpbmZvIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImxvYWRpbmciLCJhdXRoIiwic3VibWl0RGF0YSIsInNldFN1Ym1pdERhdGEiLCJ1c2VTdGF0ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWREYXRhIiwiY3BmRXJyIiwiY29uc29sZSIsImxvZyIsIkNFSWRhdGEiLCJDUEYiLCJDRUlwYXNzd29yZCIsInR5cGUiLCJ0aGVuIiwiZXJyIiwibWF4V2lkdGgiLCJHb0JhY2tCdXR0b24iLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUJhY2siLCJwdXNoIiwiYmFjayIsIkxvYWRpbmciLCJBQ1RJT04iLCJBRERfTU9EQUwiLCJOT1RJRlkiLCJBVVRIIiwiSU5JVElBTF9TVEFURSIsIlNUQVJUX0xPQURJTkciLCJFTkRfTE9BRElORyIsIlVQREFURV9VU0VSX0RBVEEiLCJBRERfVVNFUlMiLCJ1cGRhdGVJdGVtIiwiaWQiLCJuZXdEYXRhIiwibWFwIiwiaXRlbSIsIl9pZCIsInBheWxvYWQiLCJkZWxldGVJdGVtIiwiZmlsdGVyIiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwidXNlRWZmZWN0IiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJyb2xlIiwiZXJyb3IiLCJ1c2VycyIsInJvbGVzIiwibW9kYWwiLCJub3RpZnkiLCJ1c2VyRGF0YSIsImVtYWlsIiwiYWN0aW9uIiwiZHJhZnRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7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Q0tnQyxVQURMO0FBRUVILGdCQUFRLGtDQUNIRyxVQUFVLENBQUNILFFBRFIsR0FFSEUsTUFBTSxDQUFDdkIsT0FGSjtBQUZWOztBQVFGO0FBQ0UsYUFBT2xELEtBQVA7QUF4REo7QUEwREQsQ0E3REQ7O0FBK0RleUQsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNsRUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvQ0VJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9DRUkvaW5kZXguanNcIik7XG4iLCJjb25zdCB2YWxpZENwZkF1dGggPSAoY3BmLCBwYXNzd29yZCkgPT4ge1xyXG4gIGlmICghY3BmICYmICFwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY3BmTXNnOiAnUG9yIGZhdm9yLCBwcmVlbmNoYSBzZXUgQ1BGJyxcclxuICAgICAgcGFzc3dvcmRNc2c6ICdQb3IgZmF2b3IsIHByZWVuY2hhIHN1YSBzZW5oYScsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjcGYpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNwZk1zZzogJ1BvciBmYXZvciwgcHJlZW5jaGEgc2V1IENQRicsXHJcbiAgICAgIHBhc3N3b3JkTXNnOiAnJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlbWFpbE1lc3NhZ2U6ICcnLFxyXG4gICAgICBwYXNzd29yZE1zZzogJ1BvciBmYXZvciwgcHJlZW5jaGEgc3VhIHNlbmhhJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoVGVzdGFDUEYoY3BmKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAge1xyXG4gICAgICAgIGNwZk1zZzogJ0NwZiB2w6FsaWRvJyxcclxuICAgICAgICB2YWxpZGF0ZTogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICB7XHJcbiAgICAgIGNwZk1zZzogJ1BvciBmYXZvciwgaW5zaXJhIHVtIENQRiB2w6FsaWRvJyxcclxuICAgICAgdmFsaWRhdGU6IGZhbHNlLFxyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBUZXN0YUNQRihzdHJDUEYpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICBzdHJDUEYgPSBzdHJDUEYuc3BsaXQoJy4nKS5qb2luKCcnKS5zcGxpdCgnLScpLmpvaW4oJycpO1xyXG5cclxuICBsZXQgU29tYTtcclxuICBsZXQgUmVzdG87XHJcbiAgU29tYSA9IDA7XHJcbiAgaWYgKHN0ckNQRiA9PT0gJzAwMDAwMDAwMDAwJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIFNvbWEgKz0gcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMSAtIGkpO1xyXG4gIFJlc3RvID0gKFNvbWEgKiAxMCkgJSAxMTtcclxuXHJcbiAgaWYgKChSZXN0byA9PT0gMTApIHx8IChSZXN0byA9PT0gMTEpKSBSZXN0byA9IDA7XHJcbiAgaWYgKFJlc3RvICE9PSBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKDksIDEwKSwgMTApKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIFNvbWEgPSAwO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIFNvbWEgKz0gcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZyhpIC0gMSwgaSksIDEwKSAqICgxMiAtIGkpO1xyXG4gIFJlc3RvID0gKFNvbWEgKiAxMCkgJSAxMTtcclxuXHJcbiAgaWYgKChSZXN0byA9PT0gMTApIHx8IChSZXN0byA9PT0gMTEpKSBSZXN0byA9IDA7XHJcbiAgaWYgKFJlc3RvICE9PSBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKDEwLCAxMSksIDEwKSkgcmV0dXJuIGZhbHNlO1xyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZENwZkF1dGg7XHJcbiIsImNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5WRVJDRUxfVVJMID8gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA6IHByb2Nlc3MuZW52LkJBU0VfVVJMID8gcHJvY2Vzcy5lbnYuQkFTRV9VUkwgOiAnLyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgbGV0IHJlcztcclxuICBpZiAodG9rZW4pIHtcclxuICAgIHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICBsZXQgcmVzO1xyXG4gIGlmICh0b2tlbikge1xyXG4gICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke3VybH1gLCB7XHJcbiAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7dXJsfWAsIHtcclxuICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHt1cmx9YCwge1xyXG4gICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vc25uaXBldHMvTG9hZGluZyc7XHJcbmltcG9ydCB2YWxpZENwZkF1dGggZnJvbSAnLi4vLi4vYXNzZXRzL3V0aWxzL1ZhbGlkYXRlRGF0YS9WYWxpZENwZic7XHJcbmltcG9ydCBHb0JhY2tCdXR0b24gZnJvbSAnLi4vLi4vc25uaXBldHMvR29CYWNrQnV0dG9uJztcclxuaW1wb3J0IHsgcGF0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSc7XHJcblxyXG5jb25zdCBDRUkgPSBzdHlsZWQuZGl2YFxyXG5cclxuYDtcclxuXHJcbkNFSS5IZWFkZXIgPSBzdHlsZWQuaDFgXHJcblxyXG5gO1xyXG5cclxuQ0VJLkZvcm0gPSBzdHlsZWQuZm9ybWBcclxuXHJcbmA7XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRDRUlpbmZvKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBhdXRoIH0gPSBzdGF0ZTtcclxuXHJcbiAgY29uc3QgW3N1Ym1pdERhdGEsIHNldFN1Ym1pdERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgY3BmOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIC8vIHVzZXJfaWQ6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFN1Ym1pdERhdGEoe1xyXG4gICAgICAuLi5zdWJtaXREYXRhLFxyXG4gICAgICBbbmFtZV06IHZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB2YWxpZERhdGEgPSBhd2FpdCB2YWxpZENwZkF1dGgoc3VibWl0RGF0YS5jcGYsIHN1Ym1pdERhdGEucGFzc3dvcmQpO1xyXG5cclxuICAgIGlmICghdmFsaWREYXRhLnZhbGlkYXRlKSB7XHJcbiAgICAgIHNldFN1Ym1pdERhdGEoe1xyXG4gICAgICAgIC4uLnN1Ym1pdERhdGEsXHJcbiAgICAgICAgY3BmRXJyOiB2YWxpZERhdGEuY3BmTXNnLFxyXG4gICAgICAgIHBhc3N3b3JkTXNnOiB2YWxpZERhdGEucGFzc3dvcmRNc2csXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWxpZERhdGEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3VibWl0RGF0YSh7XHJcbiAgICAgIC4uLnN1Ym1pdERhdGEsXHJcbiAgICAgIGNwZkVycjogJycsXHJcbiAgICAgIHBhc3N3b3JkTXNnOiAnJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IENFSWRhdGEgPSB7XHJcbiAgICAgIENQRjogc3VibWl0RGF0YS5jcGYuc3BsaXQoJy4nKS5qb2luKCcnKS5zcGxpdCgnLScpLmpvaW4oJycpLFxyXG4gICAgICBDRUlwYXNzd29yZDogc3VibWl0RGF0YS5wYXNzd29yZCxcclxuICAgICAgLy8gX2lkOiBzdWJtaXREYXRhLnVzZXJfaWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHsgQ1BGLCBDRUlwYXNzd29yZCB9ID0gQ0VJZGF0YTtcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVEFSVF9MT0FESU5HJyB9KTtcclxuXHJcbiAgICBhd2FpdCBwYXRjaERhdGEoJ2FwaS91c2VyJywgeyBDUEYsIENFSXBhc3N3b3JkIH0sIGF1dGgudG9rZW4pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmVycik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdFTkRfTE9BRElORycgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyogdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aC51c2VyKSByZXR1cm47XHJcblxyXG4gICAgc2V0U3VibWl0RGF0YSh7XHJcbiAgICAgIC4uLnN1Ym1pdERhdGEsXHJcbiAgICAgIHVzZXJfaWQ6IGF1dGgudXNlci5faWQsXHJcbiAgICB9KTtcclxuICB9LCBbYXV0aC51c2VyXSk7ICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R29CYWNrQnV0dG9uIC8+XHJcblxyXG4gICAgICA8Q0VJIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDRUkuSGVhZGVyPlxyXG4gICAgICAgICAgQ0VJIElORk9cclxuICAgICAgICA8L0NFSS5IZWFkZXI+XHJcblxyXG4gICAgICAgIDxDRUkuRm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzUwMHB4JyB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjcGZcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+Q3BmPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjcGZcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjcGZcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c3VibWl0RGF0YS5jcGZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjcGZIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXREYXRhLmNwZkVyciA/ICcgdGV4dC1kYW5nZXInIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdERhdGEuY3BmRXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1Ym1pdERhdGEuY3BmRXJyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdWJtaXREYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRIZWxwXCIgY2xhc3NOYW1lPXtgZm9ybS10ZXh0JHtzdWJtaXREYXRhLnBhc3N3b3JkTXNnID8gJyB0ZXh0LWRhbmdlcicgOiAnJ31gfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGF0YS5wYXNzd29yZE1zZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJtaXREYXRhLnBhc3N3b3JkTXNnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOw7NzIG51bmNhIHZhbW9zIGNvbXBhcnRpbGhhciBzZXVzIGRhZG9zIGNvbSBuaW5ndcOpbS4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJjaGVja01lT3V0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjaGVja01lT3V0XCI+TGVtYnJhciBkZSBtaW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBkLWZsZXggbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTYWx2YXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9DRUkuRm9ybT5cclxuICAgICAgPC9DRUk+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnNlcnRDRUlpbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBHb0JhY2tCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIGlmIChwcm9wcy51cmwpIHtcclxuICAgICAgcm91dGVyLnB1c2gocHJvcHMudXJsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFya1wiIG9uQ2xpY2s9e2hhbmRsZUJhY2t9IHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtbGVmdFwiIC8+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICBWb2x0YXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb0JhY2tCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3QtbG9hZGluZ1wiPlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIiAvPlxyXG4gICAgICB7JyAnfVxyXG4gICAgICBDYXJyZWdhbmRvLi4uXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xyXG4iLCJleHBvcnQgY29uc3QgQUNUSU9OID0ge1xyXG5cclxuICAvLyBBRERfTU9EQUxcclxuICBBRERfTU9EQUw6XHJcbiAgICAgICAgJ0FERF9NT0RBTCcsXHJcblxyXG4gIC8vIE5PVElGWVxyXG4gIE5PVElGWTpcclxuICAgICAgICAnTk9USUZZJyxcclxuXHJcbiAgLy8gQVVUSFxyXG4gIEFVVEg6XHJcbiAgICAgICAgJ0FVVEgnLFxyXG5cclxuICAvLyBJTklUSUFMX1NUQVRFXHJcbiAgSU5JVElBTF9TVEFURTpcclxuICAgICAgICAnSU5JVElBTF9TVEFURScsXHJcblxyXG4gIC8vIExPQURJTkcgUkVHSVNURVIgQU5EIExPR0lOID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgU1RBUlRfTE9BRElORzpcclxuICAgICAgICAnU1RBUlRfTE9BRElORycsXHJcbiAgRU5EX0xPQURJTkc6XHJcbiAgICAgICAgJ0VORF9MT0FESU5HJyxcclxuXHJcbiAgLy8gVVBEQVRFIFVTRVIgREFUQSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFVQREFURV9VU0VSX0RBVEE6XHJcbiAgICAgICAgJ1VQREFURV9VU0VSX0RBVEEnLFxyXG5cclxuICAvLyBBREQgVVNFUlNcclxuICBBRERfVVNFUlM6XHJcbiAgICAgICAgJ0FERF9VU0VSUycsXHJcblxyXG4gIC8vXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcclxuICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoKGl0ZW0pID0+IChpdGVtLl9pZCA9PT0gaWQgPyBwb3N0IDogaXRlbSkpO1xyXG4gIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZGF0YSwgaWQsIHR5cGUpID0+IHtcclxuICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IChpdGVtLl9pZCAhPT0gaWQpKTtcclxuICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YSB9KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnO1xyXG5pbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vYXNzZXRzL3V0aWxzL2ZldGNoRGF0YSc7XHJcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9Jbml0aWFsU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IHsgYXV0aCB9ID0gc3RhdGU7XHJcblxyXG4gIC8vIEFVVEhcclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3RMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvZ2luJyk7XHJcbiAgICBpZiAoZmlyc3RMb2dpbikge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXREYXRhKCdhcGkvYXV0aC9hY2Nlc3NUb2tlbicpO1xyXG5cclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFDVElPTi5BVVRILFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICB1c2VyOiByZXMudXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIFVTRVJTXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdXRoLnRva2VuKSB7XHJcbiAgICAgIGlmIChhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyB8fCBhdXRoLnVzZXIucm9sZSA9PT0gJ21hc3RlciBhZG1pbicpIHtcclxuICAgICAgICBnZXREYXRhKCdhcGkvdXNlcicsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDogeyBlcnJvcjogcmVzLmVyciB9IH0pO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnMgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW10gfSk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGgudG9rZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICApO1xyXG59O1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcm9sZXM6IFtcclxuICAgICdtYXN0ZXIgYWRtaW4nLFxyXG4gICAgJ2FkbWluJyxcclxuICAgICd1c2VyJyxcclxuICBdLFxyXG4gIG1vZGFsOiB7XHJcblxyXG4gIH0sXHJcbiAgYXV0aDoge1xyXG5cclxuICB9LFxyXG4gIG5vdGlmeToge1xyXG5cclxuICB9LFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIHVzZXJEYXRhOiB7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgfSxcclxuICB1c2VyczogW1xyXG5cclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFN0YXRlO1xyXG4iLCJpbXBvcnQgeyBBQ1RJT04gfSBmcm9tICcuL0FjdGlvbnMnO1xyXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vSW5pdGlhbFN0YXRlJztcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCBkcmFmdFN0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvLyBBRERfTU9EQUxcclxuICAgIGNhc2UgQUNUSU9OLkFERF9NT0RBTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIE5PVElGWVxyXG4gICAgY2FzZSBBQ1RJT04uTk9USUZZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgbm90aWZ5OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEFERCBVU0VSU1xyXG4gICAgY2FzZSBBQ1RJT04uQUREX1VTRVJTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQVVUSFxyXG4gICAgY2FzZSBBQ1RJT04uQVVUSDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5kcmFmdFN0YXRlLFxyXG4gICAgICAgIGF1dGg6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gSU5JVElBTCBTVEFURVxyXG4gICAgY2FzZSBBQ1RJT04uSU5JVElBTF9TVEFURTpcclxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHJcbiAgICAgIC8vIGxvYWRpbmcgUmVnaXN0ZXIgQW5kIExvZ2luID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNhc2UgQUNUSU9OLlNUQVJUX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBQ1RJT04uRU5EX0xPQURJTkc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uZHJhZnRTdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSB1c2VyIGRhdGEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjYXNlIEFDVElPTi5VUERBVEVfVVNFUl9EQVRBOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRyYWZ0U3RhdGUsXHJcbiAgICAgICAgdXNlckRhdGE6IHtcclxuICAgICAgICAgIC4uLmRyYWZ0U3RhdGUudXNlckRhdGEsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=