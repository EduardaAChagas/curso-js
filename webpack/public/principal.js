/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: TypeError: this.getResolve is not a function\\n    at Object.loader (C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:52:26)\\n    at C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:252:20\\n    at C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\T-Gamer\\\\Desktop\\\\exercicios-js\\\\webpack\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:61:3)\");\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = class Pessoa {\r\n    cumprimentar() {\r\n        return 'Bom dia!'\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pessoa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _src_assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1__);\n// const Pessoa = require('./pessoa')\r\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0___default.a\r\n\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });