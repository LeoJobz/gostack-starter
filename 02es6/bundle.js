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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\n//----------------------------------------------------CLASSES----------------------------------------------------\n//#region \n// class List {\n//     constructor() {\n//         this.data = []\n//     }\n//     add(data) {\n//         this.data.push(data)\n//         console.log(this.data)\n//     }\n// }\n// class TodoList extends List {\n//     constructor() {\n//         super();\n//         this.nome = 'Leo'\n//     }\n//     mostraNome() {\n//         console.log(this.nome)\n//     }\n// }\n// var minhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function () {\n//     minhaLista.add('novotodo')\n// }\n// minhaLista.mostraNome();\n// //Static methods\n// class Matematica {\n//     static soma(a, b) {\n//         return a + b\n//     }\n// }\n// console.log(Matematica.soma(1,2))\n//#endregion\n//----------------------------------------------------OPERAÇÕES EM ARRAY----------------------------------------------------\n//#region \n// const arr = [1, 3, 4, 5, 6, 7]\n// const newArr = arr.map(function(item, index){\n//     return item + index\n// })\n// console.log(newArr)\n// const sum = arr.reduce(function(total, next){\n//     return total + next\n// })\n// console.log(sum)\n// const filter = arr.filter(function(item) {\n//     return item % 2 === 0\n// })\n// console.log(filter)\n// const find = arr.find(function (item) {\n//     return item === 4\n// })\n// console.log(find)\n//#endregion\n//----------------------------------------------------ARROW FUNCTION----------------------------------------------------\n//#region \n// const arr = [1, 3, 4, 5, 6, 7]\n// const newArrUm = arr.map(function(item) {\n//     return item * 2\n// })\n// const newArrDois = arr.map(item => {\n//     return item * 2\n// })\n// const newArrTres = arr.map(item => item * 2)\n// console.log(newArrTres)\n// const teste = () => ({ nome: 'Leonardo '})\n// console.log(teste())\n//#endregion\n//----------------------------------------------------DESESTRUTURAÇÃO----------------------------------------------------\n//#region \n// const usuario = {\n//     nome: 'Leonardo',\n//     idade: 23,\n//     endereco: {\n//         cidade: 'São Paulo',\n//         uf: 'SP'\n//     }\n// }\n// const { nome, idade, endereco: { cidade } } = usuario;\n// console.log(nome)\n// console.log(idade)\n// console.log(cidade)\n// function mostraNome({nome, idade}) {\n//     console.log(idade)\n// }\n// mostraNome(usuario)\n//#endregion\n//----------------------------------------------------OPERADORES REST/SPREAD----------------------------------------------------\n//#region \n// REST\n// const arr = [0, 1, 2, 3, 4, 5]\n// const [ a, b, ...c ] = arr;\n// console.log(a)\n// console.log(b)\n// console.log(c)\n// function soma(...params) {\n//     return params.reduce((total, next) =>  total + next)\n// }\n// console.log(soma(1, 2, 3, 4, 5))\n// function somaDois(a, b, ...params) {\n//     return params\n// }\n// console.log(1, 2, 3, 4, 5, 6)\n//SPREAD\n// const arr1 = [1, 2, 3]\n// const arr2 = [4, 5, 6]\n// const arr3 = [ ...arr1, ...arr2]\n// console.log(arr3)\n// const usuario1 = {\n//     nome: 'Leonardo',\n//     idade: 23,\n//     empresa: 'Bitwide'\n// }\n// const usuario2 = { ...usuario1, nome: 'Patrick' }\n// console.log(usuario2)\n//#endregion\nconsole.log((0, _funcoes.soma)(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });