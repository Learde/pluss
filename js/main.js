/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/controls/controls.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/controls/controls.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.controls__arrow--up').click(function () {
    $(".fullpage").moveUp();
  });
  $('.controls__arrow--down').click(function () {
    $(".fullpage").moveDown();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/fullpage/fullpage.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/fullpage/fullpage.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var onepage_scroll_jquery_onepage_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! onepage-scroll/jquery.onepage-scroll.js */ "./node_modules/onepage-scroll/jquery.onepage-scroll.js");
/* harmony import */ var onepage_scroll_jquery_onepage_scroll_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(onepage_scroll_jquery_onepage_scroll_js__WEBPACK_IMPORTED_MODULE_0__);

$(function () {
  $("#fullpage").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 1000,
    pagination: true,
    updateURL: false,
    beforeMove: function beforeMove(index) {
      $('.status-menu__elem').removeClass('status-menu__elem--active');
      $('.status-menu__elem').eq(index - 1).addClass('status-menu__elem--active');
    },
    afterMove: function afterMove(index) {},
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: "vertical"
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/slide-advantages/slide-advantages.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/slide-advantages/slide-advantages.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(function () {
  if ($(window).width() < 768) {
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slide-advantages__slider', {
      slidesPerView: 'auto',
      keyboard: {
        enabled: true
      },
      spaceBetween: 20
    });
    var panel = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slide-advantages__panel', {
      slidesPerView: 'auto',
      keyboard: {
        enabled: true
      }
    });
    swiper.on('slideNextTransitionStart', function () {
      panel.slideNext(300, false);
    });
    panel.on('slideNextTransitionStart', function () {
      swiper.slideNext(300, false);
    });
    swiper.on('slidePrevTransitionStart', function () {
      panel.slidePrev(300, false);
    });
    panel.on('slidePrevTransitionStart', function () {
      swiper.slidePrev(300, false);
    });
    $('.slide-advantages__panel-img--right').on('click', function () {
      console.log(1);
      swiper.slideNext(300);
    });
    $('.slide-advantages__panel-img--left').on('click', function () {
      swiper.slidePrev(300);
      swiper.slidePrev(300);
    });
  } // swiper.on('reachEnd', function() {
  //     setTimeout(function() {
  //         $('.swiper-container').css("margin-right", "4rem")
  //     }, 50);
  // })
  // swiper.on('setTranslate', function(translate) {
  //     console.log(translate);
  //     if (translate == -212) $('.swiper-container').css("margin-right", "0")
  // })
  // swiper.on('slidePrevTransitionStart', function() {
  //     if($('.swiper-container').css("margin-right") == "40px") {
  //         setTimeout(function() {
  //             $('.swiper-container').css("margin-right", "0")
  //         }, 50);
  //     }
  // })

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/status-menu/status-menu.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/status-menu/status-menu.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.status-menu__elem').each(function (i, elem) {
    $(elem).click(function () {
      $('.menu').moveTo(i + 1);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_modules_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../blocks/modules/fullpage/fullpage */ "./src/blocks/modules/fullpage/fullpage.js");
/* harmony import */ var _blocks_modules_controls_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../blocks/modules/controls/controls */ "./src/blocks/modules/controls/controls.js");
/* harmony import */ var _blocks_modules_controls_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_controls_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_modules_status_menu_status_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blocks/modules/status-menu/status-menu */ "./src/blocks/modules/status-menu/status-menu.js");
/* harmony import */ var _blocks_modules_status_menu_status_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_status_menu_status_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_modules_slide_advantages_slide_advantages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../blocks/modules/slide-advantages/slide-advantages */ "./src/blocks/modules/slide-advantages/slide-advantages.js");





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map