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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ErrorHandler.ts":
/*!*****************************!*\
  !*** ./src/ErrorHandler.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar ErrorHandler = /** @class */ (function () {\n    function ErrorHandler(err) {\n        this.error = err;\n    }\n    ErrorHandler.instance = function (err) {\n        if (this.singleton == null) { // check if instance already created\n            this.singleton = new ErrorHandler(err);\n        }\n        return this.singleton;\n    };\n    ErrorHandler.prototype.handle = function (msg) {\n        console.log(\"Error occured : \" + this.error);\n        alert(msg);\n    };\n    return ErrorHandler;\n}());\nexports.ErrorHandler = ErrorHandler;\n\n\n//# sourceURL=webpack:///./src/ErrorHandler.ts?");

/***/ }),

/***/ "./src/NewsBoard.js":
/*!**************************!*\
  !*** ./src/NewsBoard.js ***!
  \**************************/
/*! exports provided: getNewsSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsSources\", function() { return getNewsSources; });\n/* harmony import */ var _ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorHandler.ts */ \"./src/ErrorHandler.ts\");\n/* harmony import */ var _ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NewsSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsSource */ \"./src/NewsSource.js\");\n\n\nvar newsBar = document.getElementById('news-bar');\n\nfunction getNewsSources(apiKey) {\n  fetch(\"https://newsapi.org/v2/sources?apiKey=\" + apiKey).then(function (response) {\n    response.json().then(function (data) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        var _loop = function _loop() {\n          var source = _step.value;\n          var sourcesLink = document.createElement('div');\n          var sourceId = source.id;\n          sourcesLink.setAttribute('id', sourceId);\n          sourcesLink.setAttribute('tabindex', '0');\n          sourcesLink.textContent = source.name;\n\n          sourcesLink.onclick = function (e) {\n            Object(_NewsSource__WEBPACK_IMPORTED_MODULE_1__[\"getNewsItems\"])(sourceId, apiKey);\n          };\n\n          newsBar.appendChild(sourcesLink);\n        };\n\n        for (var _iterator = data.sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          _loop();\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    });\n  }).catch(function (err) {\n    _ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0__[\"ErrorHandler\"].instance(err).handle(\"Please reload page\");\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/NewsBoard.js?");

/***/ }),

/***/ "./src/NewsSource.js":
/*!***************************!*\
  !*** ./src/NewsSource.js ***!
  \***************************/
/*! exports provided: getNewsItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewsItems\", function() { return getNewsItems; });\n/* harmony import */ var _ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorHandler.ts */ \"./src/ErrorHandler.ts\");\n/* harmony import */ var _ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nfunction getNewsItems(sourceId, apiKey) {\n  fetch(\"https://newsapi.org/v2/top-headlines?sources=\" + sourceId + \"&apiKey=\" + apiKey).then(function (response) {\n    response.json().then(function (data) {\n      var newsList = document.getElementsByClassName(\"news-item\");\n      var NEWS_CONTAINER = document.getElementById('news-wrapp');\n\n      for (var i = newsList.length - 1; 0 <= i; i--) {\n        if (newsList[i] && newsList[i].parentElement) {\n          ƒ;\n          newsList[i].parentElement.removeChild(newsList[i]);\n        }\n      }\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var news = _step.value;\n          var newsItem = document.createElement(\"div\");\n          var newsTitle = document.createElement(\"h3\");\n          var author = document.createElement(\"p\");\n          var newsContant = document.createElement(\"div\");\n          var goToButton = document.createElement(\"a\");\n          var urlLink = news.url;\n          newsItem.setAttribute('id', 'news-item');\n          newsItem.classList.add('news-item');\n          author.classList.add('news-author');\n          newsContant.classList.add('news-content');\n          goToButton.setAttribute('href', urlLink);\n          goToButton.setAttribute('target', 'blank');\n          goToButton.classList.add('to-news-button');\n          newsTitle.textContent = news.title;\n          newsContant.textContent = news.description;\n          newsItem.style.backgroundImage = \"url(\" + news.urlToImage + \")\";\n          author.textContent = news.author;\n          goToButton.textContent = \"Read more...\";\n          newsItem.appendChild(newsTitle);\n          newsItem.appendChild(author);\n          newsItem.appendChild(newsContant);\n          newsContant.appendChild(goToButton);\n          NEWS_CONTAINER.appendChild(newsItem);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    });\n  }).catch(function (err) {\n    _ErrorHandler_ts__WEBPACK_IMPORTED_MODULE_0__[\"ErrorHandler\"].instance(err).handle(\"Please reload page\");\n  });\n}\n\n\n\n//# sourceURL=webpack:///./src/NewsSource.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewsBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsBoard.js */ \"./src/NewsBoard.js\");\n\nvar API_KEY = \"cff4aa421fae4c30a27c064004dcedad\";\nObject(_NewsBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"getNewsSources\"])(API_KEY);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });